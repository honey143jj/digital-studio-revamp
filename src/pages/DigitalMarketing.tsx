
import { TrendingUp, Target, BarChart, Users, CheckCircle, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const DigitalMarketing = () => {
  const services = [
    {
      icon: Target,
      title: "PPC Advertising",
      description: "Targeted pay-per-click campaigns that drive qualified traffic and conversions.",
      features: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Campaign optimization"]
    },
    {
      icon: BarChart,
      title: "Analytics & Reporting",
      description: "Data-driven insights to measure and improve your marketing performance.",
      features: ["Google Analytics", "Conversion tracking", "ROI analysis", "Monthly reports"]
    },
    {
      icon: Megaphone,
      title: "Content Marketing",
      description: "Engaging content strategies that attract and retain your target audience.",
      features: ["Blog writing", "Email campaigns", "Video content", "Content calendar"]
    }
  ];

  const stats = [
    { number: "300%", label: "Average ROI Increase" },
    { number: "150+", label: "Successful Campaigns" },
    { number: "95%", label: "Client Retention Rate" },
    { number: "24/7", label: "Campaign Monitoring" }
  ];

  const caseStudies = [
    {
      title: "E-commerce Growth",
      industry: "Retail",
      result: "+250% Revenue",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "SaaS Lead Generation",
      industry: "Technology",
      result: "+180% Leads",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Local Business",
      industry: "Services",
      result: "+320% Inquiries",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1920&q=80"
            alt="Digital marketing analytics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Digital Marketing
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent block">
              That Drives Results
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Strategic digital campaigns that amplify your brand, reach your target audience, 
            and deliver measurable ROI through data-driven marketing solutions.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white px-8 py-4 text-lg rounded-full">
              Grow Your Business
            </Button>
          </Link>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.number}</h3>
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
            <h2 className="text-4xl font-bold text-white mb-6">Marketing Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions to grow your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-yellow-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400">Real results from our marketing campaigns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-yellow-400 text-sm font-medium mb-1">{study.industry}</p>
                  <h3 className="text-white text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-green-400 text-lg font-bold">{study.result}</p>
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
            <p className="text-xl text-gray-400">Data-driven approach to digital marketing</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Strategy", desc: "Define goals and target audience" },
              { step: "02", title: "Execute", desc: "Launch optimized campaigns" },
              { step: "03", title: "Monitor", desc: "Track performance metrics" },
              { step: "04", title: "Optimize", desc: "Improve and scale results" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Accelerate Your Growth?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's create a digital marketing strategy that delivers real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 px-8 py-4 text-lg rounded-full">
                Get Free Audit
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DigitalMarketing;
