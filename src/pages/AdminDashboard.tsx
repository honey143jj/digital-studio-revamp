
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Camera, 
  Video, 
  Palette, 
  Globe, 
  TrendingUp, 
  Share2, 
  Search,
  LogOut,
  Settings,
  BarChart3,
  Users,
  Edit
} from "lucide-react";
import AdminServiceEditor from "@/components/admin/AdminServiceEditor";
import AdminGalleryEditor from "@/components/admin/AdminGalleryEditor";
import AdminContactEditor from "@/components/admin/AdminContactEditor";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isAdminLoggedIn");
    if (!isLoggedIn) {
      navigate("/admin/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/admin/login");
  };

  const services = [
    { id: "photography", name: "Photography", icon: Camera, count: 24 },
    { id: "video", name: "Video Production", icon: Video, count: 18 },
    { id: "branding", name: "Graphics & Branding", icon: Palette, count: 32 },
    { id: "web", name: "Web Development", icon: Globe, count: 15 },
    { id: "digital", name: "Digital Marketing", icon: TrendingUp, count: 28 },
    { id: "social", name: "Social Media", icon: Share2, count: 45 },
    { id: "seo", name: "SEO Services", icon: Search, count: 12 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white">KGMI Admin Panel</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => navigate('/admin/visual-editor')}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium"
              size="default"
            >
              <Edit className="w-4 h-4 mr-2" />
              Visual Editor
            </Button>
            <Button onClick={handleLogout} variant="outline" className="border-white/20 text-white hover:bg-white/10">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border-white/10">
            <TabsTrigger value="overview" className="text-white data-[state=active]:bg-purple-600">
              Overview
            </TabsTrigger>
            <TabsTrigger value="services" className="text-white data-[state=active]:bg-purple-600">
              Services
            </TabsTrigger>
            <TabsTrigger value="gallery" className="text-white data-[state=active]:bg-purple-600">
              Gallery
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-white data-[state=active]:bg-purple-600">
              Contact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-slate-800/50 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Total Projects</p>
                      <p className="text-2xl font-bold text-white">174</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-purple-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Active Clients</p>
                      <p className="text-2xl font-bold text-white">89</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">This Month</p>
                      <p className="text-2xl font-bold text-white">23</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800/50 border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-400 text-sm">Gallery Items</p>
                      <p className="text-2xl font-bold text-white">156</p>
                    </div>
                    <Camera className="w-8 h-8 text-orange-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-slate-800/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Services Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <div key={service.id} className="flex items-center gap-3 p-3 rounded-lg bg-slate-700/30">
                        <Icon className="w-6 h-6 text-purple-400" />
                        <div>
                          <p className="text-white font-medium">{service.name}</p>
                          <p className="text-gray-400 text-sm">{service.count} projects</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services">
            <AdminServiceEditor />
          </TabsContent>

          <TabsContent value="gallery">
            <AdminGalleryEditor />
          </TabsContent>

          <TabsContent value="contact">
            <AdminContactEditor />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
