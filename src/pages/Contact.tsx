import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  const handleWhatsAppClick = () => {
    // Replace with actual WhatsApp number
    const phoneNumber = "56912345678";
    const message = "Hola, me gustaría hacer un pedido de agua FlujoConce";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-bold text-gray-900">Contacto</h1>
          <p className="text-sm text-gray-600">Estamos aquí para ayudarte</p>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6 space-y-6">
        {/* WhatsApp Contact - Primary */}
        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle size={24} />
              </div>
              <div>
                <h2 className="text-lg font-bold">WhatsApp</h2>
                <p className="text-green-100 text-sm">Respuesta inmediata</p>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              className="w-full bg-white text-green-600 hover:bg-green-50 font-semibold py-3 rounded-full shadow-lg"
            >
              Chatear con Profe Paiva
            </Button>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Teléfono</div>
                  <div className="text-sm text-gray-600">+56 9 1234 5678</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Mail size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Email</div>
                  <div className="text-sm text-gray-600">
                    contacto@flujoconce.cl
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Clock size={20} className="text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horarios</div>
                  <div className="text-sm text-gray-600">
                    Lun-Dom: 8:00 - 22:00
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Coverage Area */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <MapPin size={20} className="text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">
                  Área de cobertura
                </h3>
                <p className="text-sm text-gray-600">
                  Entregamos en estas zonas
                </p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 h-48 rounded-lg mb-4 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={32} className="mx-auto mb-2" />
                <p className="text-sm">Mapa de cobertura</p>
                <p className="text-xs">Gran Concepción</p>
              </div>
            </div>

            {/* Coverage List */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span>Concepción Centro</span>
                <span className="text-green-600 font-medium">✓ Disponible</span>
              </div>
              <div className="flex items-center justify-between">
                <span>San Pedro de la Paz</span>
                <span className="text-green-600 font-medium">✓ Disponible</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Talcahuano</span>
                <span className="text-green-600 font-medium">✓ Disponible</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Chiguayante</span>
                <span className="text-orange-600 font-medium">
                  Próximamente
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-900 mb-2">
              ¿Necesitas ayuda?
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Estamos aquí para resolver todas tus dudas sobre nuestro servicio
              de entrega de agua.
            </p>
            <div className="space-y-1 text-xs text-blue-700">
              <p>• Consultas sobre pedidos</p>
              <p>• Información de productos</p>
              <p>• Problemas con entregas</p>
              <p>• Sugerencias y comentarios</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
