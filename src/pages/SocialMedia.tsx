
import { Share2, Users, Heart, MessageCircle, CheckCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const SocialMedia = () => {
  const services = [
    {
      icon: Calendar,
      title: "Content Planning",
      description: "Strategic content calendars that engage your audience and build brand loyalty.",
      features: ["Content strategy", "Editorial calendar", "Visual planning", "Trend analysis"]
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Active community engagement that builds relationships and drives growth.",
      features: ["Daily posting", "Comment management", "Audience engagement", "Crisis management"]
    },
    {
      icon: Heart,
      title: "Paid Social Campaigns",
      description: "Targeted social media advertising that reaches your ideal customers.",
      features: ["Facebook Ads", "Instagram Ads", "LinkedIn Ads", "Campaign optimization"]
    }
  ];

  const platforms = [
    { name: "Facebook", followers: "2.9B", color: "from-blue-600 to-blue-700" },
    { name: "Instagram", followers: "2B", color: "from-purple-600 to-pink-600" },
    { name: "LinkedIn", followers: "900M", color: "from-blue-700 to-blue-800" },
    { name: "Twitter", followers: "450M", color: "from-blue-400 to-blue-500" },
    { name: "TikTok", followers: "1B", color: "from-black to-gray-800" },
    { name: "YouTube", followers: "2.7B", color: "from-red-600 to-red-700" }
  ];

  const caseStudies = [
    {
      title: "Fashion Brand Growth",
      platform: "Instagram",
      result: "+500% Engagement",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "B2B Lead Generation",
      platform: "LinkedIn",
      result: "+300% Leads",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Restaurant Promotion",
      platform: "Facebook",
      result: "+250% Bookings",
      image: "https://images.unsplash.com/photo-1414609245224-afa02bfb3fda?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=1920&q=80"
            alt="Social media marketing"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-6xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Social Media
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent block">
              Management
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build your online presence and engage your audience with strategic social media 
            management that drives brand awareness and customer loyalty.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full">
            Boost Your Presence
          </Button>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Platforms We Manage</h2>
            <p className="text-xl text-gray-400">We help you succeed across all major social media platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className={`bg-gradient-to-br ${platform.color} rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300`}>
                <h3 className="text-white text-lg font-bold mb-2">{platform.name}</h3>
                <p className="text-white/80 text-sm">{platform.followers} users</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Our Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Complete social media management to grow your online presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-white/10 hover:border-pink-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
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
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-pink-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Success Stories</h2>
            <p className="text-xl text-gray-400">Real growth achieved through strategic social media</p>
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
                  <p className="text-pink-400 text-sm font-medium mb-1">{study.platform}</p>
                  <h3 className="text-white text-xl font-bold mb-2">{study.title}</h3>
                  <p className="text-green-400 text-lg font-bold">{study.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">What's Included</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Calendar, title: "Content Calendar", desc: "Monthly content planning and scheduling" },
              { icon: MessageCircle, title: "Engagement", desc: "Active community management and responses" },
              { icon: Heart, title: "Growth Strategy", desc: "Targeted follower growth campaigns" },
              { icon: Share2, title: "Analytics", desc: "Monthly performance reports and insights" }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Grow Your Social Presence?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Let's create a social media strategy that engages your audience and drives results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 px-8 py-4 text-lg rounded-full">
              Get Started
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
              View Examples
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SocialMedia;
