
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Save, Plus, Trash2, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminServiceEditor = () => {
  const { toast } = useToast();
  const [activeService, setActiveService] = useState("photography");

  const services = {
    photography: {
      title: "Professional Photography Studio",
      subtitle: "Capturing moments that last forever",
      description: "At KGMI Digital Studio, we specialize in creating stunning visual content that tells your story. Our professional photography services cover everything from corporate headshots to product photography.",
      features: ["Product Photography", "Corporate Portraits", "Event Photography", "Fashion Photography"],
      pricing: "Starting from $200"
    },
    video: {
      title: "Video Production Services",
      subtitle: "Bringing your vision to life",
      description: "Our video production team creates compelling visual stories that engage and inspire. From concept to final cut, we handle every aspect of video production.",
      features: ["Corporate Videos", "Commercial Ads", "Social Media Content", "Documentary Style"],
      pricing: "Starting from $800"
    },
    branding: {
      title: "Graphics & Branding",
      subtitle: "Design that speaks your language",
      description: "We create powerful brand identities that resonate with your audience. Our design team crafts unique visual solutions for your business needs.",
      features: ["Logo Design", "Brand Identity", "Print Design", "Digital Graphics"],
      pricing: "Starting from $500"
    }
  };

  const [editingService, setEditingService] = useState<any>(services[activeService as keyof typeof services]);

  const handleSave = () => {
    // TODO: Implement Supabase save functionality
    console.log("Saving service:", editingService);
    toast({
      title: "Service Updated",
      description: "Your changes have been saved successfully.",
    });
  };

  const addFeature = () => {
    setEditingService({
      ...editingService,
      features: [...editingService.features, "New Feature"]
    });
  };

  const removeFeature = (index: number) => {
    setEditingService({
      ...editingService,
      features: editingService.features.filter((_: any, i: number) => i !== index)
    });
  };

  const updateFeature = (index: number, value: string) => {
    const newFeatures = [...editingService.features];
    newFeatures[index] = value;
    setEditingService({
      ...editingService,
      features: newFeatures
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Service Editor</h2>
        <Button onClick={handleSave} className="bg-gradient-to-r from-purple-600 to-blue-600">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>

      <Tabs value={activeService} onValueChange={setActiveService}>
        <TabsList className="grid grid-cols-3 bg-slate-800/50 border-white/10">
          <TabsTrigger value="photography" className="text-white data-[state=active]:bg-purple-600">
            Photography
          </TabsTrigger>
          <TabsTrigger value="video" className="text-white data-[state=active]:bg-purple-600">
            Video Production
          </TabsTrigger>
          <TabsTrigger value="branding" className="text-white data-[state=active]:bg-purple-600">
            Graphics & Branding
          </TabsTrigger>
        </TabsList>

        {Object.entries(services).map(([key, service]) => (
          <TabsContent key={key} value={key}>
            <Card className="bg-slate-800/50 border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Edit {service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-white">Service Title</Label>
                      <Input
                        id="title"
                        value={editingService.title}
                        onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                        className="bg-slate-700/50 border-white/20 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subtitle" className="text-white">Subtitle</Label>
                      <Input
                        id="subtitle"
                        value={editingService.subtitle}
                        onChange={(e) => setEditingService({...editingService, subtitle: e.target.value})}
                        className="bg-slate-700/50 border-white/20 text-white"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="pricing" className="text-white">Pricing</Label>
                      <Input
                        id="pricing"
                        value={editingService.pricing}
                        onChange={(e) => setEditingService({...editingService, pricing: e.target.value})}
                        className="bg-slate-700/50 border-white/20 text-white"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="text-white">Description</Label>
                    <Textarea
                      id="description"
                      value={editingService.description}
                      onChange={(e) => setEditingService({...editingService, description: e.target.value})}
                      className="bg-slate-700/50 border-white/20 text-white min-h-32"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Label className="text-white">Service Features</Label>
                    <Button onClick={addFeature} size="sm" variant="outline" className="border-white/20 text-white">
                      <Plus className="w-4 h-4 mr-2" />
                      Add Feature
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {editingService.features.map((feature: string, index: number) => (
                      <div key={index} className="flex items-center gap-2">
                        <Input
                          value={feature}
                          onChange={(e) => updateFeature(index, e.target.value)}
                          className="bg-slate-700/50 border-white/20 text-white"
                        />
                        <Button
                          onClick={() => removeFeature(index)}
                          size="icon"
                          variant="outline"
                          className="border-red-400 text-red-400 hover:bg-red-400/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default AdminServiceEditor;
