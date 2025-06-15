
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Type, 
  Square, 
  Image, 
  AlignLeft, 
  MousePointer, 
  Layout,
  Columns,
  Grid3X3
} from "lucide-react";
import { PageElement } from "@/hooks/useVisualEditor";

interface ComponentLibraryProps {
  onAddComponent: (component: Omit<PageElement, 'id'>) => void;
}

const ComponentLibrary = ({ onAddComponent }: ComponentLibraryProps) => {
  const components = [
    {
      name: "Heading",
      icon: Type,
      type: "heading",
      content: "New Heading",
      styles: {
        fontSize: "2rem",
        fontWeight: "bold",
        color: "#ffffff",
        padding: "1rem"
      }
    },
    {
      name: "Text",
      icon: AlignLeft,
      type: "text",
      content: "Your text here...",
      styles: {
        fontSize: "1rem",
        color: "#ffffff",
        padding: "1rem"
      }
    },
    {
      name: "Button",
      icon: MousePointer,
      type: "button",
      content: "Click Me",
      styles: {
        backgroundColor: "#8b5cf6",
        color: "#ffffff",
        padding: "0.75rem 1.5rem",
        borderRadius: "0.5rem",
        fontSize: "1rem"
      }
    },
    {
      name: "Image",
      icon: Image,
      type: "image",
      content: "https://via.placeholder.com/300x200",
      styles: {
        borderRadius: "0.5rem",
        width: "300px",
        height: "200px"
      }
    },
    {
      name: "Container",
      icon: Square,
      type: "container",
      content: "",
      styles: {
        backgroundColor: "rgba(255,255,255,0.1)",
        border: "2px dashed rgba(255,255,255,0.3)",
        padding: "2rem",
        borderRadius: "0.5rem",
        minHeight: "200px"
      }
    },
    {
      name: "Two Columns",
      icon: Columns,
      type: "columns",
      content: "",
      styles: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        padding: "1rem"
      }
    },
    {
      name: "Three Columns",
      icon: Grid3X3,
      type: "grid",
      content: "",
      styles: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "1rem",
        padding: "1rem"
      }
    }
  ];

  const handleAddComponent = (component: typeof components[0]) => {
    onAddComponent({
      type: component.type,
      content: component.content,
      styles: component.styles,
      position: { x: 50, y: 50 },
      size: { width: 300, height: 100 }
    });
  };

  return (
    <Card className="bg-slate-700/30 border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-sm">Add Components</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {components.map((component) => {
          const Icon = component.icon;
          return (
            <Button
              key={component.name}
              variant="ghost"
              className="w-full justify-start text-white hover:bg-white/10"
              onClick={() => handleAddComponent(component)}
            >
              <Icon className="w-4 h-4 mr-2" />
              {component.name}
            </Button>
          );
        })}
      </CardContent>
    </Card>
  );
};

export default ComponentLibrary;
