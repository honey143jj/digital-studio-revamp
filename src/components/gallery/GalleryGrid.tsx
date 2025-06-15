
import { Card, CardContent } from "@/components/ui/card";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
}

interface GalleryGridProps {
  items: GalleryItem[];
  onImageClick: (image: string) => void;
}

const GalleryGrid = ({ items, onImageClick }: GalleryGridProps) => {
  return (
    <section className="px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Card
              key={item.id}
              className="bg-slate-800/50 backdrop-blur-sm border border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 group cursor-pointer"
              onClick={() => onImageClick(item.image)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
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
  );
};

export default GalleryGrid;
