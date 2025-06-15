
import { useState, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ElementStyle {
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
  height?: string;
  textAlign?: 'left' | 'center' | 'right';
}

export interface PageElement {
  id: string;
  type: string;
  content: string;
  styles: ElementStyle;
  position: { x: number; y: number };
  size: { width: number; height: number };
  children?: PageElement[];
}

export const useVisualEditor = () => {
  const [elements, setElements] = useState<PageElement[]>([]);
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [history, setHistory] = useState<PageElement[][]>([[]]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const saveToHistory = useCallback((newElements: PageElement[]) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push([...newElements]);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  }, [history, historyIndex]);

  const addElement = useCallback((elementData: Omit<PageElement, 'id'>) => {
    const newElement: PageElement = {
      ...elementData,
      id: uuidv4(),
    };
    
    const newElements = [...elements, newElement];
    setElements(newElements);
    saveToHistory(newElements);
    setSelectedElement(newElement.id);
  }, [elements, saveToHistory]);

  const updateElement = useCallback((id: string, updates: Partial<PageElement>) => {
    const newElements = elements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    );
    setElements(newElements);
    saveToHistory(newElements);
  }, [elements, saveToHistory]);

  const deleteElement = useCallback((id: string) => {
    const newElements = elements.filter(el => el.id !== id);
    setElements(newElements);
    saveToHistory(newElements);
    if (selectedElement === id) {
      setSelectedElement(null);
    }
  }, [elements, selectedElement, saveToHistory]);

  const selectElement = useCallback((id: string | null) => {
    setSelectedElement(id);
  }, []);

  const undo = useCallback(() => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setElements([...history[newIndex]]);
    }
  }, [history, historyIndex]);

  const redo = useCallback(() => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setElements([...history[newIndex]]);
    }
  }, [history, historyIndex]);

  const saveLayout = useCallback(() => {
    // TODO: Implement save to database/localStorage
    console.log("Saving layout:", elements);
    localStorage.setItem("visualEditor_layout", JSON.stringify(elements));
  }, [elements]);

  return {
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
  };
};
