
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, Trash2, Upload, Edit } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const AdminGalleryEditor = () => {
  const { toast } = useToast();
  
  const [galleryItems, setGalleryItems] = useState([
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Product Photography",
      category: "photography",
      description: "Professional product showcase for luxury brand"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Video",
      category: "video",
      description: "Brand story video for tech startup"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Brand Identity",
      category: "branding",
      description: "Complete brand package for restaurant chain"
    }
  ]);

  const [editingItem, setEditingItem] = useState<any>(null);
  const [newItem, setNewItem] = useState({
    title: "",
    category: "photography",
    description: "",
    image: ""
  });

  const categories = [
    { id: "photography", name: "Photography", color: "bg-blue-500" },
    { id: "video", name: "Video Production", color: "bg-purple-500" },
    { id: "branding", name: "Branding", color: "bg-green-500" },
    { id: "web", name: "Web Design", color: "bg-orange-500" }
  ];

  const handleAddItem = () => {
    if (newItem.title && newItem.description) {
      const item = {
        ...newItem,
        id: Date.now(),
        image: newItem.image || "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      };
      setGalleryItems([...galleryItems, item]);
      setNewItem({ title: "", category: "photography", description: "", image: "" });
      toast({
        title: "Gallery Item Added",
        description: "New item has been added to the gallery.",
      });
    }
  };

  const handleDeleteItem = (id: number) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
    toast({
      title: "Gallery Item Deleted",
      description: "Item has been removed from the gallery.",
    });
  };

  const handleUpdateItem = () => {
    if (editingItem) {
      setGalleryItems(galleryItems.map(item => 
        item.id === editingItem.id ? editingItem : item
      ));
      setEditingItem(null);
      toast({
        title: "Gallery Item Updated",
        description: "Item has been updated successfully.",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Gallery Editor</h2>
        <Badge variant="secondary" className="bg-slate-700 text-white">
          {galleryItems.length} items
        </Badge>
      </div>

      {/* Add New Item */}
      <Card className="bg-slate-800/50 border-white/10">
        <CardHeader>
          <CardTitle className="text-white">Add New Gallery Item</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="new-title" className="text-white">Title</Label>
              <Input
                id="new-title"
                value={newItem.title}
                onChange={(e) => setNewItem({...newItem, title: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                placeholder="Enter item title"
              />
            </div>
            
            <div>
              <Label htmlFor="new-category" className="text-white">Category</Label>
              <select
                id="new-category"
                value={newItem.category}
                onChange={(e) => setNewItem({...newItem, category: e.target.value})}
                className="w-full h-10 px-3 rounded-md bg-slate-700/50 border border-white/20 text-white"
              >
                {categories.map(cat => (
                  <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div>
            <Label htmlFor="new-description" className="text-white">Description</Label>
            <Input
              id="new-description"
              value={newItem.description}
              onChange={(e) => setNewItem({...newItem, description: e.target.value})}
              className="bg-slate-700/50 border-white/20 text-white"
              placeholder="Enter item description"
            />
          </div>
          
          <div>
            <Label htmlFor="new-image" className="text-white">Image URL</Label>
            <div className="flex gap-2">
              <Input
                id="new-image"
                value={newItem.image}
                onChange={(e) => setNewItem({...newItem, image: e.target.value})}
                className="bg-slate-700/50 border-white/20 text-white"
                placeholder="Enter image URL or upload"
              />
              <Button variant="outline" className="border-white/20 text-white">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <Button onClick={handleAddItem} className="bg-gradient-to-r from-purple-600 to-blue-600">
            <Plus className="w-4 h-4 mr-2" />
            Add Item
          </Button>
        </CardContent>
      </Card>

      {/* Gallery Items List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <Card key={item.id} className="bg-slate-800/50 border-white/10 overflow-hidden">
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-2">
                <Button
                  onClick={() => setEditingItem(item)}
                  size="icon"
                  variant="secondary"
                  className="bg-black/50 hover:bg-black/70"
                >
                  <Edit className="w-4 h-4" />
                </Button>
                <Button
                  onClick={() => handleDeleteItem(item.id)}
                  size="icon"
                  variant="destructive"
                  className="bg-red-600/80 hover:bg-red-600"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">{item.title}</h3>
                <Badge 
                  className={`${categories.find(c => c.id === item.category)?.color} text-white`}
                >
                  {categories.find(c => c.id === item.category)?.name}
                </Badge>
              </div>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Modal (Simple version) */}
      {editingItem && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="bg-slate-800 border-white/20 w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-white">Edit Gallery Item</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-white">Title</Label>
                <Input
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({...editingItem, title: e.target.value})}
                  className="bg-slate-700/50 border-white/20 text-white"
                />
              </div>
              <div>
                <Label className="text-white">Description</Label>
                <Input
                  value={editingItem.description}
                  onChange={(e) => setEditingItem({...editingItem, description: e.target.value})}
                  className="bg-slate-700/50 border-white/20 text-white"
                />
              </div>
              <div className="flex gap-2">
                <Button onClick={handleUpdateItem} className="bg-gradient-to-r from-purple-600 to-blue-600">
                  Update
                </Button>
                <Button onClick={() => setEditingItem(null)} variant="outline" className="border-white/20 text-white">
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AdminGalleryEditor;
