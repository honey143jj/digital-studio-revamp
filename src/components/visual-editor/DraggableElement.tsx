
import { useRef } from "react";
import { useDrag } from "react-dnd";
import { Trash2, Move } from "lucide-react";
import { PageElement } from "@/hooks/useVisualEditor";
import { Button } from "@/components/ui/button";

interface DraggableElementProps {
  element: PageElement;
  isSelected: boolean;
  onSelect: (id: string | null) => void;
  onUpdate: (id: string, updates: Partial<PageElement>) => void;
  previewMode: boolean;
}

const DraggableElement = ({
  element,
  isSelected,
  onSelect,
  onUpdate,
  previewMode
}: DraggableElementProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type: 'element',
    item: { id: element.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!previewMode) {
      onSelect(element.id);
    }
  };

  const renderContent = () => {
    switch (element.type) {
      case 'heading':
        return <h1 style={element.styles}>{element.content}</h1>;
      case 'text':
        return <p style={element.styles}>{element.content}</p>;
      case 'button':
        return (
          <button style={element.styles} className="inline-block">
            {element.content}
          </button>
        );
      case 'image':
        return (
          <img 
            src={element.content} 
            alt="Content" 
            style={element.styles}
            className="max-w-full h-auto"
          />
        );
      case 'container':
        return (
          <div style={element.styles}>
            <div className="text-gray-400 text-center">
              Container - Drop components here
            </div>
          </div>
        );
      case 'columns':
        return (
          <div style={element.styles}>
            <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300">
              Column 1
            </div>
            <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300">
              Column 2
            </div>
          </div>
        );
      case 'grid':
        return (
          <div style={element.styles}>
            <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300">
              Column 1
            </div>
            <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300">
              Column 2
            </div>
            <div className="bg-gray-100 p-4 rounded border-2 border-dashed border-gray-300">
              Column 3
            </div>
          </div>
        );
      default:
        return <div style={element.styles}>{element.content}</div>;
    }
  };

  return (
    <div
      ref={(node) => {
        elementRef.current = node;
        if (!previewMode) {
          drag(node);
        }
      }}
      className={`
        absolute cursor-pointer transition-all duration-200
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${isSelected && !previewMode ? 'ring-2 ring-purple-400' : ''}
        ${previewMode ? '' : 'hover:ring-1 hover:ring-gray-400'}
      `}
      style={{
        left: element.position.x,
        top: element.position.y,
        width: element.size.width,
        minHeight: element.size.height
      }}
      onClick={handleClick}
    >
      {renderContent()}
      
      {isSelected && !previewMode && (
        <div className="absolute -top-8 left-0 flex gap-1">
          <Button
            size="icon"
            variant="secondary"
            className="h-6 w-6 bg-purple-600 hover:bg-purple-700 text-white"
          >
            <Move className="w-3 h-3" />
          </Button>
          <Button
            size="icon"
            variant="destructive"
            className="h-6 w-6"
            onClick={(e) => {
              e.stopPropagation();
              // onDelete would be passed from parent
            }}
          >
            <Trash2 className="w-3 h-3" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default DraggableElement;
