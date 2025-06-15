
import { X, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxModalProps {
  selectedImage: string | null;
  onClose: () => void;
  currentCategory: string;
  galleryItems: Array<{
    id: number;
    image: string;
    title: string;
    category: string;
    description: string;
  }>;
  onImageChange: (image: string) => void;
}

const LightboxModal = ({ 
  selectedImage, 
  onClose, 
  currentCategory, 
  galleryItems, 
  onImageChange 
}: LightboxModalProps) => {
  if (!selectedImage) return null;

  // Filter items by current category or show all if "all" is selected
  const categoryItems = currentCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === currentCategory);

  // Find current image index
  const currentIndex = categoryItems.findIndex(item => item.image === selectedImage);
  const currentItem = categoryItems[currentIndex];

  const handlePrevious = () => {
    if (currentIndex > 0) {
      onImageChange(categoryItems[currentIndex - 1].image);
    }
  };

  const handleNext = () => {
    if (currentIndex < categoryItems.length - 1) {
      onImageChange(categoryItems[currentIndex + 1].image);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrevious();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="relative max-w-6xl max-h-full flex items-center justify-center">
        {/* Close Button */}
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
        >
          <X className="w-6 h-6" />
        </Button>

        {/* Previous Button */}
        {currentIndex > 0 && (
          <Button
            onClick={handlePrevious}
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
          >
            <ArrowLeft className="w-8 h-8" />
          </Button>
        )}

        {/* Next Button */}
        {currentIndex < categoryItems.length - 1 && (
          <Button
            onClick={handleNext}
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
          >
            <ArrowRight className="w-8 h-8" />
          </Button>
        )}

        {/* Main Image */}
        <div className="flex flex-col items-center">
          <img
            src={selectedImage}
            alt={currentItem?.title || "Gallery item"}
            className="max-w-full max-h-[80vh] object-contain rounded-lg"
          />
          
          {/* Image Info */}
          {currentItem && (
            <div className="mt-4 text-center text-white">
              <h3 className="text-xl font-semibold mb-2">{currentItem.title}</h3>
              <p className="text-gray-300 max-w-2xl">{currentItem.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {currentIndex + 1} of {categoryItems.length}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
