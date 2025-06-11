import { Home, ShoppingCart, ClipboardList, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Inicio", path: "/" },
  { icon: ShoppingCart, label: "Catálogo", path: "/catalog" },
  { icon: ClipboardList, label: "Pedidos", path: "/orders" },
  { icon: Phone, label: "Contacto", path: "/contact" },
];

export function BottomNavigation() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
      <div className="flex items-center justify-around max-w-md mx-auto">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;

          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center py-2 px-3 rounded-lg transition-all duration-200 min-w-0 flex-1",
                isActive
                  ? "text-primary-400 bg-primary-50"
                  : "text-gray-500 hover:text-primary-400 hover:bg-gray-50",
              )}
            >
              <Icon size={20} className="mb-1" />
              <span className="text-xs font-medium truncate">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
