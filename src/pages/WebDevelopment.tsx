
import { Globe, Code, Smartphone, Zap, CheckCircle, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const WebDevelopment = () => {
  const services = [
    {
      icon: Globe,
      title: "Custom Websites",
      description: "Bespoke website development tailored to your unique business needs.",
      features: ["Custom design", "Responsive layout", "CMS integration", "SEO optimized"]
    },
    {
      icon: Code,
      title: "Web Applications",
      description: "Modern web applications built with cutting-edge technologies.",
      features: ["React/Vue.js", "Node.js backend", "Database design", "API development"]
    },
    {
      icon: Smartphone,
      title: "Mobile Responsive",
      description: "Websites that look perfect on all devices and screen sizes.",
      features: ["Mobile-first design", "Touch optimization", "Fast loading", "Cross-browser compatible"]
    }
  ];

  const technologies = [
    { name: "React", logo: "⚛️" },
    { name: "Vue.js", logo: "🟢" },
    { name: "Node.js", logo: "🟩" },
    { name: "WordPress", logo: "📝" },
    { name: "Shopify", logo: "🛒" },
    { name: "HTML5", logo: "🌐" },
    { name: "CSS3", logo: "🎨" },
    { name: "JavaScript", logo: "⚡" }
  ];

  const portfolio = [
    {
      title: "E-commerce Platform",
      category: "Online Store",
      tech: "React + Node.js",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Corporate Website",
      category: "Business",
      tech: "WordPress",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Portfolio Site",
      category: "Creative",
      tech: "Vue.js",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=80"
            alt="Web development code"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Web Development
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent block">
              & Design
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Modern, responsive websites that drive engagement and convert visitors into customers. 
            Built with the latest technologies for optimal performance.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-full">
              Start Your Website
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Development Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From simple websites to complex web applications, we deliver solutions that work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-white/10 hover:border-green-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-green-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-400">Modern tools and frameworks for robust web solutions</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-900/80 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center hover:border-green-500/50 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-3">{tech.logo}</div>
                <p className="text-white font-medium">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Recent Projects</h2>
            <p className="text-xl text-gray-400">Websites and applications we've built</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-green-400 text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.tech}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    View Site
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-blue-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Development</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Fast Performance", desc: "Optimized for speed and performance" },
              { icon: Monitor, title: "Responsive Design", desc: "Perfect on all devices" },
              { icon: CheckCircle, title: "SEO Ready", desc: "Built for search engines" },
              { icon: Code, title: "Clean Code", desc: "Maintainable and scalable" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's create a website that drives results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-4 text-lg rounded-full">
                Get Started
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

export default WebDevelopment;
