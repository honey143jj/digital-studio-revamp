
import { Camera, Video, Palette, Globe, TrendingUp, Share2, Search, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

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

  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/kgmi.net", icon: Facebook },
    { name: "Instagram", url: "https://www.instagram.com/kgmidigitalstudio/", icon: Instagram },
    { name: "YouTube", url: "https://www.youtube.com/@KGMIproductions", icon: Youtube },
  ];

  return (
    <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                KGMI
              </span>
            </h3>
            <p className="text-gray-400 mb-6">
              Digital Studio & Creative Agency transforming ideas into stunning visual experiences.
            </p>
            <div className="flex flex-col space-y-2 mb-6">
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
                <span>81, shiv colony, Habib Marg, Gandhi Path W, Vaishali Nagar, Jaipur, Rajasthan 302021</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-white/10"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
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

        <div className="border-t border-white/10 mt-12 pt-8">
          {/* Policy Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-1 mb-6">
            <Link 
              to="/privacy-policy" 
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Separator orientation="vertical" className="hidden sm:block h-4 bg-gray-600" />
            <span className="text-gray-600 sm:hidden">|</span>
            <Link 
              to="/terms-conditions" 
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Terms & Conditions
            </Link>
            <Separator orientation="vertical" className="hidden sm:block h-4 bg-gray-600" />
            <span className="text-gray-600 sm:hidden">|</span>
            <Link 
              to="/booking-cancellation-policy" 
              className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
            >
              Booking & Cancellation Policy
            </Link>
          </div>
          
          <div className="text-center">
            <p className="text-gray-500">
              © 2009 KGMI Digital Studio. All rights reserved. | Transforming Ideas Into Visual Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
