import React from "react";
import NoteHeader from "./RecordSection/NoteHeader";
import RecordsList from "./RecordSection/RecordsList";

const NoteContent: React.FC = () => {
  return (
    <div className="px-8">
      <NoteHeader/>
      <RecordsList/>
    </div>
  );
};

export default NoteContent;
