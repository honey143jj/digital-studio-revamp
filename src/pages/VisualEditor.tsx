
import { useState, useRef, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Save, Eye, Undo, Redo, Settings, Layout, Palette } from "lucide-react";
import ComponentLibrary from "@/components/visual-editor/ComponentLibrary";
import Canvas from "@/components/visual-editor/Canvas";
import StyleEditor from "@/components/visual-editor/StyleEditor";
import LayerPanel from "@/components/visual-editor/LayerPanel";
import { useVisualEditor } from "@/hooks/useVisualEditor";

const VisualEditor = () => {
  const {
    elements,
    selectedElement,
    history,
    historyIndex,
    addElement,
    updateElement,
    deleteElement,
    selectElement,
    undo,
    redo,
    saveLayout
  } = useVisualEditor();

  const [activeTab, setActiveTab] = useState("components");
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
        {/* Header */}
        <header className="bg-slate-800/50 backdrop-blur-sm border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Layout className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Visual Page Editor</h1>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={undo}
                disabled={historyIndex <= 0}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Undo className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={redo}
                disabled={historyIndex >= history.length - 1}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Redo className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPreviewMode(!previewMode)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </Button>
              <Button
                onClick={saveLayout}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
              >
                <Save className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </header>

        <div className="flex-1 flex">
          {/* Left Sidebar */}
          {!previewMode && (
            <div className="w-80 bg-slate-800/30 backdrop-blur-sm border-r border-white/10 p-4">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-3 bg-slate-700/50">
                  <TabsTrigger value="components" className="text-xs">Components</TabsTrigger>
                  <TabsTrigger value="layers" className="text-xs">Layers</TabsTrigger>
                  <TabsTrigger value="styles" className="text-xs">Styles</TabsTrigger>
                </TabsList>
                
                <TabsContent value="components" className="mt-4">
                  <ComponentLibrary onAddComponent={addElement} />
                </TabsContent>
                
                <TabsContent value="layers" className="mt-4">
                  <LayerPanel
                    elements={elements}
                    selectedElement={selectedElement}
                    onSelectElement={selectElement}
                    onDeleteElement={deleteElement}
                  />
                </TabsContent>
                
                <TabsContent value="styles" className="mt-4">
                  <StyleEditor
                    selectedElement={selectedElement}
                    onUpdateElement={updateElement}
                  />
                </TabsContent>
              </Tabs>
            </div>
          )}

          {/* Main Canvas Area */}
          <div className="flex-1 p-4">
            <Canvas
              elements={elements}
              selectedElement={selectedElement}
              onSelectElement={selectElement}
              onUpdateElement={updateElement}
              onAddElement={addElement}
              previewMode={previewMode}
            />
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default VisualEditor;
