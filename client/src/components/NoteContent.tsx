import React from "react";
import NoteHeader from "./RecordSection/NoteHeader";
import RecordsList from "./RecordSection/RecordsList";
import { EditorProvider } from "../utils/EditorContext";

const NoteContent: React.FC = () => {
  return (
    <div className="px-8">
      <EditorProvider>
        <NoteHeader />
        <RecordsList />
      </EditorProvider>
    </div>
  );
};

export default NoteContent;
