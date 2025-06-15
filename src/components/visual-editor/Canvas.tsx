
import { useRef } from "react";
import { useDrop } from "react-dnd";
import DraggableElement from "./DraggableElement";
import { PageElement } from "@/hooks/useVisualEditor";

interface CanvasProps {
  elements: PageElement[];
  selectedElement: string | null;
  onSelectElement: (id: string | null) => void;
  onUpdateElement: (id: string, updates: Partial<PageElement>) => void;
  onAddElement: (element: Omit<PageElement, 'id'>) => void;
  previewMode: boolean;
}

const Canvas = ({
  elements,
  selectedElement,
  onSelectElement,
  onUpdateElement,
  onAddElement,
  previewMode
}: CanvasProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop({
    accept: 'component',
    drop: (item: any, monitor) => {
      const offset = monitor.getClientOffset();
      const canvasRect = canvasRef.current?.getBoundingClientRect();
      
      if (offset && canvasRect) {
        onAddElement({
          type: item.type,
          content: item.content,
          styles: item.styles,
          position: {
            x: offset.x - canvasRect.left,
            y: offset.y - canvasRect.top
          },
          size: { width: 300, height: 100 }
        });
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    })
  });

  const handleCanvasClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onSelectElement(null);
    }
  };

  return (
    <div
      ref={(node) => {
        canvasRef.current = node;
        drop(node);
      }}
      className={`
        relative w-full min-h-[600px] bg-white rounded-lg shadow-lg overflow-hidden
        ${isOver ? 'ring-2 ring-purple-400' : ''}
        ${previewMode ? 'cursor-default' : 'cursor-crosshair'}
      `}
      onClick={handleCanvasClick}
      style={{
        backgroundImage: previewMode 
          ? 'none' 
          : 'radial-gradient(circle, #e5e7eb 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}
    >
      {elements.map((element) => (
        <DraggableElement
          key={element.id}
          element={element}
          isSelected={selectedElement === element.id}
          onSelect={onSelectElement}
          onUpdate={onUpdateElement}
          previewMode={previewMode}
        />
      ))}
      
      {!previewMode && elements.length === 0 && (
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <div className="text-center">
            <div className="text-6xl mb-4">📝</div>
            <p className="text-lg">Drop components here to start building</p>
            <p className="text-sm">or select from the component library</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Canvas;
