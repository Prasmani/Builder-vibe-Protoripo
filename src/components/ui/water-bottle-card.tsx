import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface WaterBottleCardProps {
  id: string;
  title: string;
  volume: string;
  price: string;
  image: string;
  onAddToCart: (id: string) => void;
}

export function WaterBottleCard({
  id,
  title,
  volume,
  price,
  image,
  onAddToCart,
}: WaterBottleCardProps) {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="aspect-square mb-4 bg-gray-100 rounded-lg overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
          <p className="text-sm text-gray-600">{volume}</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary-600">{price}</span>
            <Button
              onClick={() => onAddToCart(id)}
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              Agregar
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
