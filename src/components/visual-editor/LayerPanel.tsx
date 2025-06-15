
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, EyeOff, Trash2, Layers, Type, Square, Image, MousePointer } from "lucide-react";
import { PageElement } from "@/hooks/useVisualEditor";

interface LayerPanelProps {
  elements: PageElement[];
  selectedElement: string | null;
  onSelectElement: (id: string | null) => void;
  onDeleteElement: (id: string) => void;
}

const LayerPanel = ({ 
  elements, 
  selectedElement, 
  onSelectElement, 
  onDeleteElement 
}: LayerPanelProps) => {
  const getElementIcon = (type: string) => {
    switch (type) {
      case 'heading':
      case 'text':
        return Type;
      case 'button':
        return MousePointer;
      case 'image':
        return Image;
      case 'container':
      case 'columns':
      case 'grid':
        return Square;
      default:
        return Square;
    }
  };

  const getElementName = (element: PageElement) => {
    const name = element.type.charAt(0).toUpperCase() + element.type.slice(1);
    if (element.content && element.type !== 'image') {
      const truncated = element.content.length > 20 
        ? element.content.substring(0, 20) + '...' 
        : element.content;
      return `${name}: ${truncated}`;
    }
    return name;
  };

  return (
    <Card className="bg-slate-700/30 border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-sm flex items-center gap-2">
          <Layers className="w-4 h-4" />
          Layers
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {elements.length === 0 ? (
          <div className="text-center py-8">
            <Layers className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-gray-400 text-sm">No elements yet</p>
            <p className="text-gray-500 text-xs">Add components to see them here</p>
          </div>
        ) : (
          elements.map((element) => {
            const Icon = getElementIcon(element.type);
            const isSelected = selectedElement === element.id;
            
            return (
              <div
                key={element.id}
                className={`
                  flex items-center gap-2 p-2 rounded cursor-pointer transition-colors
                  ${isSelected 
                    ? 'bg-purple-600/50 border border-purple-400' 
                    : 'bg-slate-600/30 hover:bg-slate-600/50'
                  }
                `}
                onClick={() => onSelectElement(element.id)}
              >
                <Icon className="w-4 h-4 text-gray-300" />
                <span className="text-white text-sm flex-1 truncate">
                  {getElementName(element)}
                </span>
                <div className="flex gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-gray-400 hover:text-white"
                  >
                    <Eye className="w-3 h-3" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-6 w-6 text-gray-400 hover:text-red-400"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteElement(element.id);
                    }}
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
};

export default LayerPanel;
