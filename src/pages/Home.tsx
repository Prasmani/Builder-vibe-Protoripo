import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Droplets, MapPin, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-primary-400 text-white px-4 py-6">
        <div className="max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-1">FlujoConce</h1>
          <p className="text-primary-100 text-sm">Agua pura, entrega segura</p>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* Profe Paiva Banner */}
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="bg-gradient-to-r from-primary-400 to-primary-500 p-6 text-white">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <Droplets size={32} className="text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-1">Profe Paiva</h2>
                  <p className="text-primary-100 text-sm">
                    Tu vendedor de confianza
                  </p>
                  <div className="flex items-center mt-2 text-xs">
                    <CheckCircle size={12} className="mr-1" />
                    <span>+500 entregas exitosas</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6">
              <Link to="/catalog">
                <Button className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-lg">
                  Pedir agua ahora
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-primary-400 mb-2">
                <Clock size={24} className="mx-auto" />
              </div>
              <div className="text-sm font-semibold text-gray-900">Entrega</div>
              <div className="text-xs text-gray-600">30-60 min</div>
            </CardContent>
          </Card>

          <Card className="text-center p-4">
            <CardContent className="p-0">
              <div className="text-primary-400 mb-2">
                <MapPin size={24} className="mx-auto" />
              </div>
              <div className="text-sm font-semibold text-gray-900">
                Cobertura
              </div>
              <div className="text-xs text-gray-600">Gran Concepción</div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Products Preview */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900">Más pedidos</h3>
              <Link
                to="/catalog"
                className="text-primary-500 text-sm font-medium"
              >
                Ver todo
              </Link>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Droplets size={20} className="text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Bidón 20L</div>
                    <div className="text-xs text-gray-600">Más popular</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary-600">$3.500</div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Droplets size={16} className="text-primary-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Bidón 10L</div>
                    <div className="text-xs text-gray-600">
                      Ideal para oficina
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-primary-600">$2.500</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trust Indicators */}
        <Card className="bg-gradient-to-r from-green-50 to-primary-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0">
                <CheckCircle className="text-green-500" size={24} />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">
                  Agua 100% pura
                </div>
                <div className="text-xs text-gray-600">
                  Certificada y analizada regularmente
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
