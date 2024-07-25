import React, { createContext, useContext, useRef, useState } from "react";
import { MDXEditorMethods } from "@mdxeditor/editor";


interface EditorContextType {
    editorRef: React.RefObject<MDXEditorMethods>;
    getEditorMarkdown: () => string;
    updateMarkdownContent: (value: string) => void;
    markdownContent: string;
}

const EditorContext = createContext<EditorContextType | undefined>(undefined);

export const EditorProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [markdownContent, setMarkdownContent] = useState("Start writing here...");
    const editorRef = useRef<MDXEditorMethods>(null);

    const getEditorMarkdown = () => {
        if (editorRef.current) {
            return editorRef.current.getMarkdown();
        }
        return "";
    }

    return (
        <EditorContext.Provider value={{markdownContent, updateMarkdownContent: setMarkdownContent, editorRef, getEditorMarkdown}}>
            {children}
        </EditorContext.Provider>
    );
};

export const useEditorContext = () => {
    const context = useContext(EditorContext);
    if (!context) {
        throw new Error ("useEditorContext must be used within an EditorProvider");
    }
    return context;
}