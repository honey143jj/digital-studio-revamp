
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
    { id: "photography", name: "Photography", icon: Camera },
    { id: "video", name: "Video Production", icon: Video },
    { id: "branding", name: "Branding", icon: Palette },
    { id: "web", name: "Web Design", icon: Globe },
  ];

  const galleryItems = [
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
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "E-commerce Website",
      category: "web",
      description: "Modern online store with seamless UX"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Corporate Portraits",
      category: "photography",
      description: "Executive headshots for Fortune 500 company"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Commercial Video",
      category: "video",
      description: "High-impact advertisement campaign"
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
              branding, and digital experiences.
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
