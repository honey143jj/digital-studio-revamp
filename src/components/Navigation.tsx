
import { useState } from "react";
import { Menu, X, Camera, Video, Palette, Globe, TrendingUp, Share2, Search, Phone, Settings, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Photo Studio", path: "/photo-studio", icon: Camera },
    { name: "Studio Rental", path: "/photo-studio-rental", icon: Building },
    { name: "Video Production", path: "/video-production", icon: Video },
    { name: "Graphics & Branding", path: "/graphics-branding", icon: Palette },
    { name: "Web Development", path: "/web-development", icon: Globe },
    { name: "Digital Marketing", path: "/digital-marketing", icon: TrendingUp },
    { name: "Social Media", path: "/social-media", icon: Share2 },
    { name: "SEO Services", path: "/seo-services", icon: Search },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="grid grid-cols-2 gap-1 p-2 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-pulse">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">K</span>
              </div>
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">G</span>
              </div>
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-black font-bold text-sm">M</span>
              </div>
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center relative">
                <span className="text-black font-bold text-sm">i</span>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  location.pathname === item.path ? 'text-purple-400' : 'text-gray-300'
                }`}
              >
                {item.name}
              </Link>
            ))}
            {/* Admin Login Link */}
            <Link
              to="/admin/login"
              className="flex items-center space-x-1 text-xs font-medium text-gray-500 hover:text-purple-400 transition-colors"
            >
              <Settings className="h-3 w-3" />
              <span>Admin</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-purple-400 ${
                    location.pathname === item.path ? 'text-purple-400' : 'text-gray-300'
                  }`}
                >
                  {item.icon && <item.icon className="h-4 w-4" />}
                  <span>{item.name}</span>
                </Link>
              ))}
              {/* Admin Login Link for Mobile */}
              <Link
                to="/admin/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-2 text-xs font-medium text-gray-500 hover:text-purple-400 transition-colors pt-2 border-t border-white/10"
              >
                <Settings className="h-3 w-3" />
                <span>Admin Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
