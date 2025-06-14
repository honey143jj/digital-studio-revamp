
import { useState, useEffect } from "react";
import { Camera, Video, Palette, Globe, TrendingUp, Share2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  const [currentService, setCurrentService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    {
      icon: Camera,
      title: "Photo Studio Rental",
      description: "Professional studio space with state-of-the-art lighting and equipment for your perfect shoot.",
      color: "from-blue-500 to-purple-600",
      path: "/photo-studio"
    },
    {
      icon: Video,
      title: "Photo/Video Shoot & Editing",
      description: "Complete production services from concept to final delivery with professional editing.",
      color: "from-purple-500 to-pink-600",
      path: "/video-production"
    },
    {
      icon: Video,
      title: "Film & Ad Making",
      description: "Creative storytelling through compelling films and advertisements that capture your vision.",
      color: "from-pink-500 to-red-600",
      path: "/video-production"
    },
    {
      icon: Palette,
      title: "Graphics Design & Branding",
      description: "Complete brand identity solutions including logos, packaging, and visual communication.",
      color: "from-red-500 to-orange-600",
      path: "/graphics-branding"
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Modern, responsive websites that drive engagement and convert visitors into customers.",
      color: "from-orange-500 to-yellow-600",
      path: "/web-development"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital campaigns that amplify your brand and drive measurable results.",
      color: "from-yellow-500 to-green-600",
      path: "/digital-marketing"
    },
    {
      icon: Share2,
      title: "Social Media Handling",
      description: "Complete social media management to build your online presence and engage your audience.",
      color: "from-green-500 to-teal-600",
      path: "/social-media"
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description: "Improve your online visibility and rank higher in search results with our SEO expertise.",
      color: "from-teal-500 to-blue-600",
      path: "/seo-services"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className={`relative z-20 text-center px-4 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              KGMI
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
            Digital Studio & Creative Agency
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into stunning visual experiences. From concept to creation, 
            we deliver exceptional digital solutions that elevate your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                Explore Our Services
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full backdrop-blur-sm">
              View Portfolio
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital solutions to bring your creative vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link key={index} to={service.path}>
                  <Card 
                    className={`bg-gradient-to-br ${service.color} p-1 rounded-2xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer ${
                      index === currentService ? 'ring-4 ring-white/50 scale-105' : ''
                    }`}
                  >
                    <CardContent className="bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 h-full">
                      <div className="flex flex-col items-center text-center h-full">
                        <div className={`bg-gradient-to-br ${service.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors flex-grow">
                          {service.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Creating Digital Excellence Since Day One
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                At KGMI, we're passionate about transforming creative visions into reality. 
                Our team of experienced professionals combines technical expertise with 
                artistic innovation to deliver exceptional results.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                From our fully-equipped photo studio to cutting-edge digital marketing strategies, 
                we provide end-to-end solutions that help brands stand out in today's competitive landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">500+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">50+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <Camera className="w-24 h-24 text-white mb-4 mx-auto animate-pulse" />
                  <p className="text-white text-xl font-semibold">Professional Studio</p>
                  <p className="text-gray-300">State-of-the-art equipment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's discuss how we can bring your creative vision to life
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">hello@kgmi.net</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Visit Studio</h3>
              <p className="text-gray-400">Schedule a tour</p>
            </div>
          </div>

          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              Get In Touch
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
