import { NextResponse } from "next/server"

// Simulación de una base de datos de productos
const products = [
  {
    id: "1",
    name: "Camiseta Premium",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Camiseta de algodón 100% orgánico con diseño exclusivo.",
    featured: true,
  },
  {
    id: "2",
    name: "Zapatillas Deportivas",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Zapatillas ligeras y cómodas, perfectas para correr o entrenar.",
    featured: true,
  },
  {
    id: "3",
    name: "Reloj Inteligente",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Monitorea tu actividad física, recibe notificaciones y más.",
    featured: true,
  },
  {
    id: "4",
    name: "Auriculares Inalámbricos",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Cancelación de ruido activa y hasta 30 horas de batería.",
    featured: true,
  },
  {
    id: "5",
    name: "Mochila Resistente",
    price: 59.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Espaciosa y resistente al agua, ideal para viajes y uso diario.",
    featured: false,
  },
  {
    id: "6",
    name: "Botella Térmica",
    price: 24.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Mantiene tus bebidas frías o calientes durante horas.",
    featured: false,
  },
  {
    id: "7",
    name: "Gafas de Sol",
    price: 79.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "Protección UV400 con diseño moderno y elegante.",
    featured: false,
  },
  {
    id: "8",
    name: "Cargador Portátil",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=400",
    description: "10000mAh, carga rápida para todos tus dispositivos.",
    featured: false,
  },
]

export async function GET(request: Request) {
  // Obtener parámetros de la URL
  const { searchParams } = new URL(request.url)
  const id = searchParams.get("id")
  const featured = searchParams.get("featured")

  // Si se proporciona un ID, devolver solo ese producto
  if (id) {
    const product = products.find((p) => p.id === id)

    if (!product) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 })
    }

    return NextResponse.json(product)
  }

  // Si se solicitan productos destacados
  if (featured === "true") {
    return NextResponse.json(products.filter((p) => p.featured))
  }

  // Devolver todos los productos
  return NextResponse.json(products)
}

