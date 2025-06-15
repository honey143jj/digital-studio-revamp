
import { Camera, Clock, Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const PhotoStudio = () => {
  const features = [
    "Professional lighting equipment",
    "Multiple backdrop options",
    "High-end camera gear available",
    "Spacious shooting area",
    "Makeup and styling area",
    "Client lounge",
    "Parking available",
    "Air conditioning"
  ];

  const packages = [
    {
      name: "Basic Studio",
      price: "$150/hour",
      features: [
        "Studio space rental",
        "Basic lighting setup",
        "White backdrop",
        "2-hour minimum"
      ]
    },
    {
      name: "Professional",
      price: "$250/hour",
      features: [
        "Full studio access",
        "Professional lighting",
        "Multiple backdrops",
        "Equipment included",
        "Makeup area"
      ]
    },
    {
      name: "Premium",
      price: "$400/hour",
      features: [
        "Everything included",
        "Professional photographer",
        "Photo editing",
        "High-res delivery",
        "Same-day preview"
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=1920&q=80"
            alt="Professional photo studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              Photo Studio
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            State-of-the-art photography studio equipped with professional lighting, 
            backdrops, and everything you need for the perfect shoot.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full">
              Book Studio Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Studio Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our fully equipped studio provides everything you need for professional photography
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                <p className="text-white font-medium">{feature}</p>
              </div>
            ))}
          </div>

          {/* Studio Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fbd62c81dda6?auto=format&fit=crop&w=800&q=80"
                alt="Studio lighting setup"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?auto=format&fit=crop&w=800&q=80"
                alt="Photography studio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
                alt="Professional camera equipment"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Studio Rental Packages</h2>
            <p className="text-xl text-gray-400">Choose the perfect package for your photography needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-3xl font-bold text-purple-400 mb-6">{pkg.price}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      Book Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Studio Session?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Contact us today to reserve your time slot and bring your creative vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg rounded-full">
                Book Studio
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
              View Gallery
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoStudio;
