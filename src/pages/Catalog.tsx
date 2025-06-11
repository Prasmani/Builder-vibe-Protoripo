import { useState } from "react";
import { WaterBottleCard } from "@/components/ui/water-bottle-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Filter } from "lucide-react";

interface WaterBottle {
  id: string;
  title: string;
  volume: string;
  price: string;
  image: string;
  description: string;
}

const waterBottles: WaterBottle[] = [
  {
    id: "1",
    title: "Bidón 5L",
    volume: "5 litros",
    price: "$1.800",
    image: "/placeholder.svg",
    description: "Perfecto para uso personal y familiar pequeña",
  },
  {
    id: "2",
    title: "Bidón 10L",
    volume: "10 litros",
    price: "$2.500",
    image: "/placeholder.svg",
    description: "Ideal para oficinas y familias medianas",
  },
  {
    id: "3",
    title: "Bidón 20L",
    volume: "20 litros",
    price: "$3.500",
    image: "/placeholder.svg",
    description: "La opción más económica para familias grandes",
  },
];

export default function Catalog() {
  const [cart, setCart] = useState<string[]>([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (productId: string) => {
    setCart((prev) => [...prev, productId]);
    setShowCart(true);
    // Hide cart preview after 2 seconds
    setTimeout(() => setShowCart(false), 2000);
  };

  const cartTotal = cart.length * 2500; // Simplified calculation

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">Catálogo</h1>
              <p className="text-sm text-gray-600">Elige tu bidón ideal</p>
            </div>

            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="p-2">
                <Filter size={16} />
              </Button>

              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  className="p-2"
                  onClick={() => setShowCart(!showCart)}
                >
                  <ShoppingCart size={16} />
                  {cart.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cart.length}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Featured Banner */}
        <Card className="mb-6 bg-gradient-to-r from-primary-400 to-primary-500 text-white">
          <CardContent className="p-4">
            <div className="text-center">
              <h2 className="text-lg font-bold mb-1">¡Oferta especial!</h2>
              <p className="text-primary-100 text-sm">
                3 bidones de 20L por $9.500
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Product Grid */}
        <div className="space-y-4">
          {waterBottles.map((bottle) => (
            <WaterBottleCard
              key={bottle.id}
              id={bottle.id}
              title={bottle.title}
              volume={bottle.volume}
              price={bottle.price}
              image={bottle.image}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Additional Info */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-900 mb-2">
              Información importante
            </h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Entrega gratuita en pedidos sobre $5.000</li>
              <li>• Tiempo de entrega: 30-60 minutos</li>
              <li>• Agua purificada y certificada</li>
              <li>• Bidones sanitizados en cada entrega</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Cart Preview */}
      {showCart && cart.length > 0 && (
        <div className="fixed bottom-20 left-4 right-4 z-50">
          <Card className="bg-green-500 text-white shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold">
                    {cart.length} producto{cart.length > 1 ? "s" : ""} agregado
                    {cart.length > 1 ? "s" : ""}
                  </div>
                  <div className="text-green-100 text-sm">
                    Total: ${cartTotal.toLocaleString()}
                  </div>
                </div>
                <Button
                  size="sm"
                  className="bg-white text-green-500 hover:bg-green-50"
                >
                  Ver carrito
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
