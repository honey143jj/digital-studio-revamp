
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminContactEditor = () => {
  const { toast } = useToast();
  
  const [contactInfo, setContactInfo] = useState({
    address: "81, shiv colony, Habib Marg, Gandhi Path W, Vaishali Nagar, Jaipur, Rajasthan 302021",
    phone: "+91-9867226595",
    email: "info@kgmi.net",
    hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
    description: "Get in touch with KGMI Digital Studio for all your creative needs. We're here to help bring your vision to life."
  });

  const [socialMedia, setSocialMedia] = useState({
    facebook: "https://facebook.com/kgmi",
    instagram: "https://instagram.com/kgmi",
    twitter: "https://twitter.com/kgmi",
    linkedin: "https://linkedin.com/company/kgmi",
    youtube: "https://youtube.com/kgmi"
  });

  const handleSaveContact = () => {
    // TODO: Implement Supabase save functionality
    console.log("Saving contact info:", contactInfo);
    toast({
      title: "Contact Information Updated",
      description: "Your contact details have been saved successfully.",
    });
  };

  const handleSaveSocial = () => {
    // TODO: Implement Supabase save functionality
    console.log("Saving social media:", socialMedia);
    toast({
      title: "Social Media Links Updated",
      description: "Your social media links have been saved successfully.",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Contact Information Editor</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Details */}
        <Card className="bg-slate-800/50 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Contact Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="address" className="text-white">Address</Label>
              <Textarea
                id="address"
                value={contactInfo.address}
                onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                rows={3}
              />
            </div>
            
            <div>
              <Label htmlFor="phone" className="text-white">Phone Number</Label>
              <Input
                id="phone"
                value={contactInfo.phone}
                onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="text-white">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={contactInfo.email}
                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="hours" className="text-white">Business Hours</Label>
              <Input
                id="hours"
                value={contactInfo.hours}
                onChange={(e) => setContactInfo({...contactInfo, hours: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
              />
            </div>
            
            <div>
              <Label htmlFor="description" className="text-white">Contact Description</Label>
              <Textarea
                id="description"
                value={contactInfo.description}
                onChange={(e) => setContactInfo({...contactInfo, description: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                rows={3}
              />
            </div>
            
            <Button onClick={handleSaveContact} className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
              <Save className="w-4 h-4 mr-2" />
              Save Contact Details
            </Button>
          </CardContent>
        </Card>

        {/* Social Media Links */}
        <Card className="bg-slate-800/50 border-white/10">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Social Media Links
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="facebook" className="text-white">Facebook</Label>
              <Input
                id="facebook"
                value={socialMedia.facebook}
                onChange={(e) => setSocialMedia({...socialMedia, facebook: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                placeholder="https://facebook.com/yourpage"
              />
            </div>
            
            <div>
              <Label htmlFor="instagram" className="text-white">Instagram</Label>
              <Input
                id="instagram"
                value={socialMedia.instagram}
                onChange={(e) => setSocialMedia({...socialMedia, instagram: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                placeholder="https://instagram.com/yourpage"
              />
            </div>
            
            <div>
              <Label htmlFor="twitter" className="text-white">Twitter</Label>
              <Input
                id="twitter"
                value={socialMedia.twitter}
                onChange={(e) => setSocialMedia({...socialMedia, twitter: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                placeholder="https://twitter.com/yourpage"
              />
            </div>
            
            <div>
              <Label htmlFor="linkedin" className="text-white">LinkedIn</Label>
              <Input
                id="linkedin"
                value={socialMedia.linkedin}
                onChange={(e) => setSocialMedia({...socialMedia, linkedin: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                placeholder="https://linkedin.com/company/yourcompany"
              />
            </div>
            
            <div>
              <Label htmlFor="youtube" className="text-white">YouTube</Label>
              <Input
                id="youtube"
                value={socialMedia.youtube}
                onChange={(e) => setSocialMedia({...socialMedia, youtube: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                placeholder="https://youtube.com/yourchannel"
              />
            </div>
            
            <Button onClick={handleSaveSocial} className="w-full bg-gradient-to-r from-purple-600 to-blue-600">
              <Save className="w-4 h-4 mr-2" />
              Save Social Media Links
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Preview Section */}
      <Card className="bg-slate-800/50 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Contact Information Preview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Address</h3>
                <p className="text-gray-400 text-sm">{contactInfo.address}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Phone</h3>
                <p className="text-gray-400 text-sm">{contactInfo.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Email</h3>
                <p className="text-gray-400 text-sm">{contactInfo.email}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Hours</h3>
                <p className="text-gray-400 text-sm">{contactInfo.hours}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminContactEditor;
