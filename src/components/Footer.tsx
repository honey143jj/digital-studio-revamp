
import { Camera, Video, Palette, Globe, TrendingUp, Share2, Search, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const services = [
    { name: "Photo Studio Rental", path: "/photo-studio", icon: Camera },
    { name: "Video Production", path: "/video-production", icon: Video },
    { name: "Graphics & Branding", path: "/graphics-branding", icon: Palette },
    { name: "Web Development", path: "/web-development", icon: Globe },
    { name: "Digital Marketing", path: "/digital-marketing", icon: TrendingUp },
    { name: "Social Media", path: "/social-media", icon: Share2 },
    { name: "SEO Services", path: "/seo-services", icon: Search },
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="grid grid-cols-2 gap-1 p-2 bg-gradient-to-br from-purple-600 via-blue-500 to-pink-500 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 animate-pulse mr-3">
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
              <h3 className="text-xl font-bold text-white">KGMI</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Digital Studio & Creative Agency transforming ideas into stunning visual experiences.
            </p>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="h-4 w-4" />
                <span>+91-9867226595</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>info@kgmi.net</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>81, Shiv Colony, Vaishali Nagar, Jaipur- 302021</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {services.slice(0, 4).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">More Services</h4>
            <ul className="space-y-2">
              {services.slice(4).map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2024 KGMI Digital Studio. All rights reserved. | Transforming Ideas Into Visual Excellence
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
