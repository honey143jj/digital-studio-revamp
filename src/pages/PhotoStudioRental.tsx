
import { useState } from "react";
import { Camera, Clock, Users, Wifi, Coffee, Car, Shield, CheckCircle, Star, Calendar, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const PhotoStudioRental = () => {
  const [selectedPackage, setSelectedPackage] = useState("basic");

  const studioFeatures = [
    { icon: Camera, title: "Professional Equipment", description: "High-end cameras, lenses, and lighting equipment" },
    { icon: Clock, title: "24/7 Access", description: "Round-the-clock studio access for your convenience" },
    { icon: Users, title: "Team Support", description: "Professional assistance and technical support" },
    { icon: Wifi, title: "High-Speed WiFi", description: "Ultra-fast internet for instant uploads and streaming" },
    { icon: Coffee, title: "Client Lounge", description: "Comfortable waiting area with refreshments" },
    { icon: Car, title: "Free Parking", description: "Complimentary parking space for clients and crew" },
    { icon: Shield, title: "Insurance Coverage", description: "Fully insured studio space and equipment" }
  ];

  const packages = [
    {
      id: "basic",
      name: "Basic Studio",
      price: "$150",
      duration: "4 hours",
      features: [
        "Professional lighting setup",
        "Backdrop selection (3 options)",
        "Basic props and accessories",
        "Changing room access",
        "Free parking",
        "WiFi access"
      ]
    },
    {
      id: "premium",
      name: "Premium Studio",
      price: "$300",
      duration: "8 hours",
      popular: true,
      features: [
        "All Basic features included",
        "Advanced lighting equipment",
        "Unlimited backdrop options",
        "Professional props library",
        "Hair & makeup station",
        "Client lounge access",
        "Equipment rental discounts",
        "Technical assistance"
      ]
    },
    {
      id: "professional",
      name: "Professional Suite",
      price: "$500",
      duration: "Full day",
      features: [
        "All Premium features included",
        "Private studio suite",
        "Professional photographer on-call",
        "Video recording capabilities",
        "Green screen setup",
        "Catering service",
        "Client consultation",
        "Post-production support"
      ]
    }
  ];

  const equipment = [
    "Canon EOS R5 & R6 Cameras",
    "Professional Lighting Kits",
    "Backdrop Support Systems",
    "Ring Lights & Softboxes",
    "Tripods & Stabilizers",
    "Audio Recording Equipment",
    "Green Screen Setup",
    "Props & Accessories"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
            alt="Professional Photo Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Professional
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Photo Studio Rental
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            State-of-the-art photography studio with professional equipment, 
            perfect lighting, and everything you need for your perfect shoot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Now
            </Button>
            <Button variant="outline" size="lg" className="border-white/70 text-white hover:bg-white/20 px-8 py-4 text-lg">
              View Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Studio Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Studio?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our professional photography studio offers everything you need for exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studioFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-slate-800/50 border-white/10 hover:bg-slate-700/50 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rental Packages */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Studio Rental Packages</h2>
            <p className="text-xl text-gray-400">
              Choose the perfect package for your photography needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative bg-slate-800/50 border-white/10 hover:scale-105 transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-purple-400">{pkg.price}</div>
                  <div className="text-gray-400">{pkg.duration}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Amenities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Professional Equipment Included</h2>
              <p className="text-xl text-gray-400 mb-8">
                Our studio comes fully equipped with industry-standard photography equipment 
                to ensure your shoots are successful and professional.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {equipment.map((item, index) => (
                  <div key={index} className="flex items-center text-gray-300">
                    <Star className="w-5 h-5 text-yellow-400 mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Studio Equipment"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Gallery */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Studio Gallery</h2>
            <p className="text-xl text-gray-400">
              Take a virtual tour of our professional photography studio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1567450169088-17f8c2a2b915?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            ].map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={src}
                  alt={`Studio view ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Book Your Studio Session?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Contact us today to reserve your time slot and create amazing content
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-white/10">
              <CardContent className="p-6 text-center">
                <Phone className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-white/10">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">studio@kgmi.net</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-white/10">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">123 Studio Street, City</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Book Studio Now
            </Button>
            <Button variant="outline" size="lg" className="border-white/70 text-white hover:bg-white/20 px-12 py-4 text-lg">
              Request Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PhotoStudioRental;
