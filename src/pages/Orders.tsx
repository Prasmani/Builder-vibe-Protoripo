import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, CheckCircle, Truck, Package } from "lucide-react";

const mockOrders = [
  {
    id: "1234",
    date: "2024-01-15",
    status: "En camino",
    items: "2x Bidón 20L",
    total: "$7.000",
    estimatedTime: "15 min",
  },
  {
    id: "1233",
    date: "2024-01-12",
    status: "Entregado",
    items: "1x Bidón 10L",
    total: "$2.500",
    estimatedTime: "Completado",
  },
  {
    id: "1232",
    date: "2024-01-08",
    status: "Entregado",
    items: "3x Bidón 20L",
    total: "$10.500",
    estimatedTime: "Completado",
  },
];

export default function Orders() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "En camino":
        return <Truck size={16} className="text-orange-500" />;
      case "Entregado":
        return <CheckCircle size={16} className="text-green-500" />;
      default:
        return <Package size={16} className="text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "En camino":
        return "bg-orange-100 text-orange-800";
      case "Entregado":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-4 sticky top-0 z-40">
        <div className="max-w-md mx-auto">
          <h1 className="text-xl font-bold text-gray-900">Mis Pedidos</h1>
          <p className="text-sm text-gray-600">Historial de entregas</p>
        </div>
      </header>

      <div className="max-w-md mx-auto px-4 py-6">
        {/* Active Orders */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Pedidos activos
          </h2>

          {mockOrders
            .filter((order) => order.status === "En camino")
            .map((order) => (
              <Card
                key={order.id}
                className="mb-3 border-l-4 border-l-primary-400"
              >
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(order.status)}
                      <span className="font-semibold text-gray-900">
                        Pedido #{order.id}
                      </span>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </div>

                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>{order.items}</span>
                      <span className="font-semibold">{order.total}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-orange-600">
                      <Clock size={12} />
                      <span>Llegada estimada: {order.estimatedTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>

        {/* Order History */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">
            Historial
          </h2>

          <div className="space-y-3">
            {mockOrders
              .filter((order) => order.status === "Entregado")
              .map((order) => (
                <Card key={order.id} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(order.status)}
                        <span className="font-semibold text-gray-900">
                          Pedido #{order.id}
                        </span>
                      </div>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>{order.items}</span>
                        <span className="font-semibold">{order.total}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        Entregado el{" "}
                        {new Date(order.date).toLocaleDateString("es-CL")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Empty State for new users */}
        {mockOrders.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Package size={48} className="mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No tienes pedidos aún
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                ¡Haz tu primer pedido de agua pura!
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
