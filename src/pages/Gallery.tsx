
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import LightboxModal from "@/components/gallery/LightboxModal";
import { categories, galleryItems } from "@/data/galleryData";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Gallery Grid */}
        <GalleryGrid 
          items={filteredItems}
          onImageClick={setSelectedImage}
        />

        {/* Lightbox Modal */}
        <LightboxModal 
          selectedImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      </div>
    </Layout>
  );
};

export default Gallery;
