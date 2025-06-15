
import { Palette, Package, Briefcase, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const GraphicsBranding = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design",
      description: "Distinctive logos that capture your brand essence and make lasting impressions.",
      features: ["Custom logo concepts", "Brand mark design", "Icon creation", "Logo guidelines"]
    },
    {
      icon: Package,
      title: "Packaging Design",
      description: "Eye-catching packaging that stands out on shelves and drives sales.",
      features: ["Product packaging", "Label design", "Box design", "Sustainable options"]
    },
    {
      icon: Briefcase,
      title: "Brand Identity",
      description: "Complete brand identity systems that tell your story consistently.",
      features: ["Brand strategy", "Color palettes", "Typography", "Brand guidelines"]
    }
  ];

  const portfolio = [
    {
      title: "Organic Food Brand",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Tech Startup Logo",
      category: "Logo Design", 
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Coffee Package",
      category: "Packaging",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fashion Brand",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Restaurant Identity",
      category: "Brand Identity",
      image: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Product Labels",
      category: "Packaging",
      image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1920&q=80"
            alt="Graphic design workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Graphics Design
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent block">
              & Branding
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create powerful brand identities that resonate with your audience. 
            From logos to complete brand systems, we craft designs that tell your story.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full">
              Start Your Brand
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Design Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive design solutions that elevate your brand and drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-white/10 hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-orange-500 to-pink-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-400 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-orange-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Portfolio</h2>
            <p className="text-xl text-gray-400">Recent branding and design projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-orange-400 text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Design Process</h2>
            <p className="text-xl text-gray-400">How we bring your brand to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your brand and goals" },
              { step: "02", title: "Research", desc: "Market analysis and competitor study" },
              { step: "03", title: "Concept", desc: "Creative concepts and initial designs" },
              { step: "04", title: "Refine", desc: "Feedback and design refinement" },
              { step: "05", title: "Deliver", desc: "Final files and brand guidelines" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-pink-600 text-white text-xl font-bold w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Brand?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's create a brand identity that sets you apart from the competition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 px-8 py-4 text-lg rounded-full">
                Start Project
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GraphicsBranding;
