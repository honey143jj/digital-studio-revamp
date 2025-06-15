
import { useState } from "react";
import { ArrowLeft, Camera, Video, Palette, Globe, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Work", icon: Camera },
    { id: "studio", name: "Studio", icon: Camera },
    { id: "family", name: "Family Photography", icon: Camera },
    { id: "fashion", name: "Fashion Photography", icon: Camera },
    { id: "kids", name: "Kids Photography", icon: Camera },
    { id: "wedding", name: "Wedding Photography", icon: Camera },
    { id: "product", name: "Product Photography", icon: Camera },
    { id: "traditional", name: "Traditional Photography", icon: Camera },
    { id: "creative", name: "Creative Photography", icon: Camera },
    { id: "video", name: "Video Production", icon: Video },
    { id: "branding", name: "Branding", icon: Palette },
    { id: "web", name: "Web Design", icon: Globe },
  ];

  const galleryItems = [
    // Studio Images (Original KGMI studio images)
    {
      id: 1,
      image: "/lovable-uploads/ba1c2ab9-a23c-4f2d-8d44-2b3a8cddb82d.png",
      title: "KGMI Studio - Main Area",
      category: "studio",
      description: "Professional studio space with green screen and professional lighting setup"
    },
    {
      id: 2,
      image: "/lovable-uploads/198574a8-eb11-47b9-8c3b-263efbecf2f7.png",
      title: "KGMI Studio - Recording Setup",
      category: "studio",
      description: "Studio recording area with branded backdrop and professional equipment"
    },
    {
      id: 3,
      image: "/lovable-uploads/0eaf578d-58fe-4add-a7a4-46080ee7dce8.png",
      title: "KGMI Digital Studio Reception",
      category: "studio",
      description: "Studio reception area with KGMI branding and client displays"
    },
    {
      id: 4,
      image: "/lovable-uploads/4262f254-f9fb-40bf-86cc-27b0808ff238.png",
      title: "KGMI Studio - Production Area",
      category: "studio",
      description: "Professional production space with branded displays and equipment"
    },
    {
      id: 5,
      image: "/lovable-uploads/aa4e3c8f-1d1e-4941-8b77-6b64a60640c8.png",
      title: "KGMI Studio - Green Screen Setup",
      category: "studio",
      description: "Advanced green screen studio with Godox professional lighting equipment"
    },
    {
      id: 6,
      image: "/lovable-uploads/bbaac003-12b7-44b8-a848-1ef8d609d724.png",
      title: "KGMI Studio - Client Area",
      category: "studio",
      description: "Comfortable client viewing area with studio workspace"
    },
    // New uploaded photography samples
    {
      id: 7,
      image: "/lovable-uploads/a671f0e3-f7e4-4969-8175-bdac75ce1958.png",
      title: "Beautiful Family Moments",
      category: "family",
      description: "Heartwarming family photography capturing love and togetherness"
    },
    {
      id: 8,
      image: "/lovable-uploads/74f1d783-5fc2-4dda-aa4c-99f724cbf40f.png",
      title: "Fashion & Portrait Excellence",
      category: "fashion",
      description: "Professional fashion photography with stunning lighting and composition"
    },
    {
      id: 9,
      image: "/lovable-uploads/bfc6ad72-6095-42e0-8ecf-397399ddfb15.png",
      title: "Creative Kids Photography",
      category: "kids",
      description: "Fun and creative children photography with colorful backdrops"
    },
    {
      id: 10,
      image: "/lovable-uploads/4ed5767b-7d1b-4431-ab25-eaf92509c011.png",
      title: "Artistic Portrait with Natural Light",
      category: "creative",
      description: "Beautiful portrait photography using natural lighting techniques"
    },
    {
      id: 11,
      image: "/lovable-uploads/6fc71aee-bbc7-41ee-86e3-5dd6b37ad67f.png",
      title: "Traditional Dance Photography",
      category: "traditional",
      description: "Capturing the grace and beauty of traditional dance performances"
    },
    {
      id: 12,
      image: "/lovable-uploads/9a9b9252-78b7-43f1-8851-9560324c9b48.png",
      title: "Premium Product Photography",
      category: "product",
      description: "High-end jewelry and product photography with professional lighting"
    },
    {
      id: 13,
      image: "/lovable-uploads/fbc6ad72-6095-42e0-8ecf-397399ddfb15.png",
      title: "Creative Visual Effects",
      category: "creative",
      description: "Innovative photography with special effects and creative lighting"
    },
    {
      id: 14,
      image: "/lovable-uploads/f83f37fd-a872-4d9c-8795-2f3b59498396.png",
      title: "Elegant Wedding Photography",
      category: "wedding",
      description: "Beautiful wedding photography capturing special moments and traditions"
    },
    // Additional sample work
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Product Showcase",
      category: "product",
      description: "Professional product showcase for luxury brand"
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Video Production",
      category: "video",
      description: "Brand story video for tech startup"
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Brand Identity Design",
      category: "branding",
      description: "Complete brand package for restaurant chain"
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "E-commerce Website",
      category: "web",
      description: "Modern online store with seamless UX"
    },
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <Layout>
      <div className="pt-20 pb-20">
        {/* Header */}
        <section className="py-16 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-5xl font-bold text-white mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of creative work across photography, video production, 
              branding, and digital experiences. Take a look inside our professional studio.
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                        : "border-white/30 text-white hover:bg-white/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="bg-slate-800/50 backdrop-blur-sm border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                onClick={() => setSelectedImage(null)}
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              >
                <X className="w-6 h-6" />
              </Button>
              <img
                src={selectedImage}
                alt="Gallery item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;
