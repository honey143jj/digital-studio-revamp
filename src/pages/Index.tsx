import { useState, useEffect } from "react";
import { Camera, Video, Palette, Globe, TrendingUp, Share2, Search, Eye, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Index = () => {
  const [currentService, setCurrentService] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    {
      id: 1,
      image: "/lovable-uploads/a671f0e3-f7e4-4969-8175-bdac75ce1958.png",
      title: "Family Photography",
      subtitle: "Capturing precious family moments"
    },
    {
      id: 2,
      image: "/lovable-uploads/74f1d783-5fc2-4dda-aa4c-99f724cbf40f.png",
      title: "Fashion Photography",
      subtitle: "Professional fashion and portrait shoots"
    },
    {
      id: 3,
      image: "/lovable-uploads/7d85121f-1ea0-4edd-8cd6-47f2d9a562fb.png",
      title: "Kids Photography",
      subtitle: "Creative and fun children photography"
    },
    {
      id: 4,
      image: "/lovable-uploads/4ed5767b-7d1b-4431-ab25-eaf92509c011.png",
      title: "Professional Portraits",
      subtitle: "Artistic portrait photography with professional lighting"
    },
    {
      id: 5,
      image: "/lovable-uploads/6fc71aee-bbc7-41ee-86e3-5dd6b37ad67f.png",
      title: "Traditional Dance Photography",
      subtitle: "Cultural and traditional photography"
    },
    {
      id: 6,
      image: "/lovable-uploads/9a9b9252-78b7-43f1-8851-9560324c9b48.png",
      title: "Product Photography",
      subtitle: "Professional product and jewelry photography"
    },
    {
      id: 7,
      image: "/lovable-uploads/7d85121f-1ea0-4edd-8cd6-47f2d9a562fb.png",
      title: "Creative Photography",
      subtitle: "Innovative and artistic visual concepts"
    },
    {
      id: 8,
      image: "/lovable-uploads/f83f37fd-a872-4d9c-8795-2f3b59498396.png",
      title: "Wedding Photography",
      subtitle: "Beautiful wedding and celebration photography"
    }
  ];

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
    const serviceInterval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 4000);

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      clearInterval(serviceInterval);
      clearInterval(slideInterval);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Layout>
      {/* Hero Section with Image Slider */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image Slider */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-black/30"></div>
            </div>
          ))}
        </div>

        {/* Slider Navigation */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className={`relative z-20 text-center px-4 max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight text-shadow">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              KGMI
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-white mb-8 font-light text-shadow">
            {heroImages[currentSlide].title}
          </h2>
          <p className="text-xl text-white mb-12 max-w-3xl mx-auto leading-relaxed text-shadow">
            {heroImages[currentSlide].subtitle} - From concept to creation, 
            we deliver exceptional digital solutions that elevate your brand.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Services
            </Button>
            <Link to="/gallery">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                View Our Gallery
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>

          
        </div>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-20 px-4 relative">
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
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">500+</h3>
                  <p className="text-gray-400">Projects Completed</p>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-blue-400 mb-2">50+</h3>
                  <p className="text-gray-400">Happy Clients</p>
                </div>
              </div>
              <Link to="/gallery">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full">
                  See Our Work →
                </Button>
              </Link>
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
              <p className="text-gray-400">+91-9867226595</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-400">info@kgmi.net</p>
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
