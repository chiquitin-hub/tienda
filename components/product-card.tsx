"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCartStore } from "@/lib/cart-store"
import { formatPrice } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

interface Product {
  id: string
  name: string
  price: number
  image: string
  description: string
}

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleAddToCart = () => {
    setIsLoading(true)

    // Simular una pequeña demora para mejor UX
    setTimeout(() => {
      addItem(product)
      setIsLoading(false)

      toast({
        title: "¡Producto añadido!",
        description: `${product.name} ha sido añadido a tu carrito. Puedes verlo en tu carrito de compras.`,
        duration: 3000,
      })
    }, 300)
  }

  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="font-semibold truncate">{product.name}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2 h-10">{product.description}</p>
        <p className="font-medium mt-2">{formatPrice(product.price)}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full" onClick={handleAddToCart} disabled={isLoading}>
          {isLoading ? (
            <>Añadiendo...</>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Añadir al carrito
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

