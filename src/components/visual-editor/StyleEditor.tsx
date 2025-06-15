
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Palette, Type, Box, Spacing } from "lucide-react";
import { PageElement } from "@/hooks/useVisualEditor";

interface StyleEditorProps {
  selectedElement: string | null;
  onUpdateElement: (id: string, updates: Partial<PageElement>) => void;
}

const StyleEditor = ({ selectedElement, onUpdateElement }: StyleEditorProps) => {
  const [activeTab, setActiveTab] = useState("style");

  if (!selectedElement) {
    return (
      <Card className="bg-slate-700/30 border-white/20">
        <CardContent className="p-6 text-center">
          <Box className="w-12 h-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-400">Select an element to edit its styles</p>
        </CardContent>
      </Card>
    );
  }

  const handleStyleChange = (property: string, value: string) => {
    onUpdateElement(selectedElement, {
      styles: { [property]: value }
    });
  };

  return (
    <Card className="bg-slate-700/30 border-white/20">
      <CardHeader>
        <CardTitle className="text-white text-sm flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Style Editor
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div>
            <Label className="text-gray-300 text-xs">Background Color</Label>
            <Input
              type="color"
              className="h-8 bg-slate-600 border-white/10 text-white"
              onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
            />
          </div>
          
          <div>
            <Label className="text-gray-300 text-xs">Text Color</Label>
            <Input
              type="color"
              className="h-8 bg-slate-600 border-white/10 text-white"
              onChange={(e) => handleStyleChange('color', e.target.value)}
            />
          </div>
          
          <div>
            <Label className="text-gray-300 text-xs">Font Size</Label>
            <Input
              type="text"
              placeholder="1rem"
              className="h-8 bg-slate-600 border-white/10 text-white"
              onChange={(e) => handleStyleChange('fontSize', e.target.value)}
            />
          </div>
          
          <div>
            <Label className="text-gray-300 text-xs">Padding</Label>
            <Input
              type="text"
              placeholder="1rem"
              className="h-8 bg-slate-600 border-white/10 text-white"
              onChange={(e) => handleStyleChange('padding', e.target.value)}
            />
          </div>
          
          <div>
            <Label className="text-gray-300 text-xs">Border Radius</Label>
            <Input
              type="text"
              placeholder="0.5rem"
              className="h-8 bg-slate-600 border-white/10 text-white"
              onChange={(e) => handleStyleChange('borderRadius', e.target.value)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StyleEditor;
