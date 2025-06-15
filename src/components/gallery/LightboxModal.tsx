
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxModalProps {
  selectedImage: string | null;
  onClose: () => void;
}

const LightboxModal = ({ selectedImage, onClose }: LightboxModalProps) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <div className="relative max-w-4xl max-h-full">
        <Button
          onClick={onClose}
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
  );
};

export default LightboxModal;
