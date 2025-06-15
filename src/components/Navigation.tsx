
import { useState } from "react";
import { Menu, X, Video, Palette, Globe, TrendingUp, Share2, Search, Phone, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
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
          <Link to="/" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              KGMI
            </span>
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
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
