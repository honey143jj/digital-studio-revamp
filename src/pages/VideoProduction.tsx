
import { Video, Film, Edit, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const VideoProduction = () => {
  const services = [
    {
      icon: Video,
      title: "Corporate Videos",
      description: "Professional corporate videos that showcase your brand and engage your audience.",
      features: ["Brand storytelling", "Product demos", "Training videos", "Company profiles"]
    },
    {
      icon: Film,
      title: "Commercial Production",
      description: "High-quality commercials and advertisements that drive results.",
      features: ["TV commercials", "Online ads", "Social media content", "Brand campaigns"]
    },
    {
      icon: Edit,
      title: "Post-Production",
      description: "Professional editing, color grading, and post-production services.",
      features: ["Video editing", "Color correction", "Audio mixing", "Visual effects"]
    }
  ];

  const portfolio = [
    {
      title: "Tech Startup Launch",
      category: "Corporate Video",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Fashion Brand Campaign", 
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Restaurant Promo",
      category: "Social Media",
      image: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1920&q=80"
            alt="Video production setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Video Production
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent block">
              & Film Making
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            From concept to completion, we create compelling videos that tell your story 
            and captivate your audience with professional cinematography and editing.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-full">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Video Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete video production services from pre-production planning to final delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-white/10 hover:border-red-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-red-500 to-pink-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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

      {/* Portfolio Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-red-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Recent Projects</h2>
            <p className="text-xl text-gray-400">Showcase of our latest video production work</p>
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
                  <p className="text-red-400 text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" className="bg-red-600 hover:bg-red-700 rounded-full">
                    <Play className="w-6 h-6" />
                  </Button>
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
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-400">From concept to final cut</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Concept & Planning", desc: "Define objectives and create detailed production plan" },
              { step: "02", title: "Pre-Production", desc: "Scripting, storyboarding, and location scouting" },
              { step: "03", title: "Production", desc: "Professional filming with high-end equipment" },
              { step: "04", title: "Post-Production", desc: "Editing, color grading, and final delivery" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-red-500 to-pink-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's discuss your video project and bring your vision to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-4 text-lg rounded-full">
                Get Quote
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

export default VideoProduction;
