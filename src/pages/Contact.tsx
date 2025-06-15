import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91-9867226595"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@kgmi.net"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["81, shiv colony, Habib Marg, Gandhi Path W,", "Vaishali Nagar, Jaipur, Rajasthan 302021"],
      color: "from-pink-500 to-red-600"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"],
      color: "from-red-500 to-orange-600"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1920&q=80"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Get In Touch
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent block">
              With KGMI
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to transform your creative vision? Contact us today to discuss your project 
            and discover how we can bring your ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="bg-slate-900/80 backdrop-blur-sm border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`bg-gradient-to-br ${info.color} p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{info.title}</h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 mb-1">{detail}</p>
                    ))}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Studio Info */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Visit Our Studio</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">KGMI Digital Studio</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-400">81, shiv colony, Habib Marg, Gandhi Path W,<br />Vaishali Nagar, Jaipur, Rajasthan 302021</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Studio Hours</p>
                      <p className="text-gray-400">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: By Appointment Only
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-purple-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-400">+91-9867226595</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Studio Features */}
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">Studio Features</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• 2,000 sq ft professional studio space</li>
                  <li>• State-of-the-art lighting equipment</li>
                  <li>• Multiple backdrop options</li>
                  <li>• Makeup and styling area</li>
                  <li>• Client lounge and refreshments</li>
                  <li>• Free parking available</li>
                  <li>• Fully air conditioned</li>
                  <li>• WiFi and power outlets</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Create Something Amazing Together</h2>
          <p className="text-xl text-gray-400 mb-10">
            Whether you need a quick consultation or a comprehensive project quote, 
            we're here to help bring your creative vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 text-lg rounded-full">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
              Get Project Quote
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
