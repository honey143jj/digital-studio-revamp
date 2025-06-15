
import { useState } from "react";
import { Camera, Clock, Users, Wifi, Coffee, Car, Shield, CheckCircle, Star, Calendar, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
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
      id: "studio-only",
      name: "Studio Setup Only",
      price: "₹5,900",
      duration: "Session",
      features: [
        "4 Elinchrom Strob Lights",
        "4 LED Continuous Lights",
        "10 Paper Backdrop (Different Colors Including White, Black, and Grey)",
        "Octagon, Strip and Squire Soft Boxes",
        "Changing Room",
        "Makeup Mirror",
        "Wind Blower",
        "Iron and Iron Table"
      ]
    },
    {
      id: "studio-with-camera",
      name: "Studio Setup with Camera",
      price: "₹7,080",
      duration: "Session",
      popular: true,
      features: [
        "Canon R6 M2 with 24-105 Lens",
        "3 AI Podcast Camera",
        "Pod Cast Mic",
        "Edit Machine with Licensed Adobe CC",
        "4 Elinchrom Strob Lights",
        "4 LED Continuous Lights",
        "10 Paper Backdrop (Different Colors Including White, Black, and Grey)",
        "Octagon, Strip and Squire Soft Boxes",
        "Changing Room",
        "Makeup Mirror",
        "Wind Blower",
        "Iron and Iron Table"
      ]
    },
    {
      id: "studio-with-photographer",
      name: "Studio with Photographer",
      price: "₹9,440",
      duration: "Session",
      features: [
        "Photographer with Camera setup",
        "4 Elinchrom Strob Lights",
        "4 LED Continuous Lights",
        "10 Paper Backdrop (Different Colors Including White, Black, and Grey)",
        "Octagon, Strip and Squire Soft Boxes",
        "Changing Room",
        "Makeup Mirror",
        "Wind Blower",
        "Iron and Iron Table"
      ]
    }
  ];

  const equipment = [
    "Canon R6 M2 with 24-105 Lens",
    "Elinchrom Strob Lights",
    "LED Continuous Lights",
    "Paper Backdrops (Multiple Colors)",
    "Octagon & Strip Soft Boxes",
    "AI Podcast Cameras",
    "Licensed Adobe CC Suite",
    "Professional Audio Equipment"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/lovable-uploads/69dae017-282a-46ce-b273-39814d9a73ea.png"
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
            <Link to="/gallery">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg">
                View Gallery
              </Button>
            </Link>
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
                  <div className="text-gray-400">Per {pkg.duration}</div>
                  <div className="text-sm text-gray-500 mt-2">SESSION PARAMETERS:</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
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
                src="/lovable-uploads/8978e710-1374-4f42-a9d0-bd76b2930310.png"
                alt="Professional Photography Equipment"
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
              "/lovable-uploads/ba1c2ab9-a23c-4f2d-8d44-2b3a8cddb82d.png",
              "/lovable-uploads/198574a8-eb11-47b9-8c3b-263efbecf2f7.png",
              "/lovable-uploads/0eaf578d-58fe-4add-a7a4-46080ee7dce8.png",
              "/lovable-uploads/4262f254-f9fb-40bf-86cc-27b0808ff238.png",
              "/lovable-uploads/aa4e3c8f-1d1e-4941-8b77-6b64a60640c8.png",
              "/lovable-uploads/bbaac003-12b7-44b8-a848-1ef8d609d724.png"
            ].map((src, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img 
                  src={src}
                  alt={`KGMI Studio view ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-20 px-4 bg-gradient-to-r from-slate-800/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">Terms and Conditions</h2>
            <p className="text-xl text-gray-400">
              Please read our studio rental terms carefully
            </p>
          </div>

          <Card className="bg-slate-800/50 border-white/10">
            <CardContent className="p-8">
              <div className="space-y-6 text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Booking and Payment</h3>
                  <div className="space-y-3 text-sm">
                    <p>• For booking, you need to pay 100% advance transfer to company account.</p>
                    <p>• <strong>ONLY 5 PERSONS ALLOWED IN THE STUDIO</strong> with prior details of every individual with name, number and role in the shoot.</p>
                    <div className="bg-purple-900/30 p-3 rounded border border-purple-500/30">
                      <p className="font-semibold text-purple-200">Bank Details:</p>
                      <p>Account name: Khammaa Ghani Moving Images</p>
                      <p>A/No. 912020041566736</p>
                      <p>IFSC: UTIB0000311</p>
                    </div>
                    <p>• After payment confirmation, booking confirmation will be texted on WhatsApp.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Cancellation Policy</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• In case of booking cancellation, only 50% will be refundable IF BOOKING CANCELLED BEFORE 48 HOURS OF TIME SLOT</li>
                    <li>• AFTER 48 HOURS THERE IS NO REFUND POLICY</li>
                    <li>• Any damage in booked premises has to be covered by the person who booked it</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Session Parameters</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Your booking time shall start as your booked time slot</li>
                    <li>• Reaching late at premises will not add up extra time</li>
                    <li>• Reaching early at premises and starting to shoot before time slot will automatically shift time slot to the time you had started using premises</li>
                    <li>• Your session time starts from the BOOKED time and ends when the last person of your crew leaves the studio</li>
                    <li>• Company has introduced Two Hybrid LED lights Godox FV200 which can be used as VIDEO and PHOTO for both</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Studio Rules</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• PETS NOT allowed inside the studio</li>
                    <li>• Eatables & Drinks NOT allowed near backdrop</li>
                    <li>• Smoking & Alcohol NOT allowed inside the studio</li>
                    <li>• Only INDIVIDUALS related to photoshoot allowed inside the studio</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Damage Policy</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Backdrop damage or any damage to any other thing will be payable by the client who booked the studio</li>
                    <li>• Paper Backdrop damage – INR 1,500</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Additional Information</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Customised package also available as per requirement</li>
                    <li>• Monthly package for regular shoots available</li>
                    <li>• In case of electricity failure or any other delay from studio side during the shoot, studio shall compensate accordingly by providing extra time without any extra charges</li>
                    <li>• Any dispute needs to be dealt under Jaipur jurisdiction</li>
                  </ul>
                </div>

                <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30">
                  <p className="text-sm text-purple-200">
                    <strong>Note:</strong> By booking our studio, you agree to abide by these terms and conditions. 
                    KGMI reserves the right to modify these terms at any time. For any questions or clarifications, 
                    please contact us before your booking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
                <p className="text-gray-400">+91-9867226595</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-white/10">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-400">info@kgmi.net</p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-white/10">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-400">81, Shiv Colony, Vaishali Nagar, Jaipur</p>
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
