import React from "react";
import '@mdxeditor/editor/style.css'
import { MDXEditor, headingsPlugin } from '@mdxeditor/editor'
import NoteHeader from "./RecordSection/NoteHeader";
import RecordsList from "./RecordSection/RecordsList";

const NoteContent: React.FC = () => {
  return (
    <div className="px-8">
      <NoteHeader/>
      <RecordsList/>
      <MDXEditor className="" markdown={'# new note'} />
    </div>
  );
};

export default NoteContent;
