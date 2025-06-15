import { Search, TrendingUp, Target, BarChart, CheckCircle, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const SEOServices = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research",
      description: "Comprehensive keyword analysis to target the right search terms for your business.",
      features: ["Competitor analysis", "Search volume research", "Long-tail keywords", "Intent mapping"]
    },
    {
      icon: Globe,
      title: "Technical SEO",
      description: "Optimize your website's technical foundation for better search engine crawling.",
      features: ["Site speed optimization", "Mobile responsiveness", "Schema markup", "XML sitemaps"]
    },
    {
      icon: Target,
      title: "Content Optimization",
      description: "Create and optimize content that ranks well and engages your audience.",
      features: ["On-page optimization", "Content strategy", "Meta tags", "Internal linking"]
    }
  ];

  const seoStats = [
    { number: "150%", label: "Average Traffic Increase" },
    { number: "300+", label: "Keywords Ranked" },
    { number: "90%", label: "Page 1 Rankings" },
    { number: "6 Months", label: "Average ROI Timeline" }
  ];

  const results = [
    {
      title: "Local Restaurant",
      industry: "Food & Beverage",
      result: "+400% Organic Traffic",
      image: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-commerce Store",
      industry: "Retail",
      result: "+250% Revenue",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Professional Services",
      industry: "Legal",
      result: "+300% Leads",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1920&q=80"
            alt="SEO analytics dashboard"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            SEO Services
            <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent block">
              That Rank Higher
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Improve your online visibility and rank higher in search results with our 
            comprehensive SEO strategies that drive organic traffic and qualified leads.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 text-white px-8 py-4 text-lg rounded-full">
              Improve Rankings
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {seoStats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-teal-400 mb-2">{stat.number}</h3>
                <p className="text-gray-400 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">SEO Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete SEO solutions to improve your search engine rankings and organic traffic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-white/10 hover:border-teal-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-teal-500 to-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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

      {/* Results Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-teal-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">SEO Results</h2>
            <p className="text-xl text-gray-400">Real improvements in search rankings and traffic</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-teal-400 text-sm font-medium mb-1">{result.industry}</p>
                  <h3 className="text-white text-xl font-bold mb-2">{result.title}</h3>
                  <p className="text-green-400 text-lg font-bold">{result.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our SEO Process</h2>
            <p className="text-xl text-gray-400">Systematic approach to improve your search rankings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Audit", desc: "Comprehensive SEO audit and analysis" },
              { step: "02", title: "Research", desc: "Keyword and competitor research" },
              { step: "03", title: "Optimize", desc: "On-page and technical optimization" },
              { step: "04", title: "Content", desc: "Content creation and optimization" },
              { step: "05", title: "Monitor", desc: "Track rankings and performance" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-teal-500 to-green-600 text-white text-xl font-bold w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-green-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What We Deliver</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: "Increased Rankings", desc: "Higher positions in search results" },
              { icon: Target, title: "Targeted Traffic", desc: "Quality visitors who convert" },
              { icon: BarChart, title: "Detailed Reports", desc: "Monthly performance analytics" },
              { icon: CheckCircle, title: "ROI Focused", desc: "Measurable business results" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-teal-500 to-green-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Rank Higher?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Get a free SEO audit and discover how to improve your search rankings
          </p>
          <div className="flex justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700 px-8 py-4 text-lg rounded-full">
                Free SEO Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SEOServices;
