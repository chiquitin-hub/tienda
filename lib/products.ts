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

// Simular una demora en la carga de datos
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export async function getAllProducts() {
  // Simular tiempo de carga
  await delay(1000)
  return products
}

export async function getFeaturedProducts() {
  // Simular tiempo de carga
  await delay(500)
  return products.filter((product) => product.featured)
}

export async function getProductById(id: string) {
  // Simular tiempo de carga
  await delay(300)
  return products.find((product) => product.id === id)
}

