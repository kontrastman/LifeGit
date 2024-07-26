import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TimeBadge from "./TimeBadge";
import { records } from "../../records";
import { MDXEditor } from "@mdxeditor/editor";
import { useEditorContext } from "../../utils/EditorContext";
import { selectIsToday } from "../../redux/selectedNoteSlice";

const RecordsList: React.FC = () => {

  const selectedNote = useSelector(
    (state: RootState) => state.selectedNote.selectedNote
  );

  const isToday = useSelector(selectIsToday);
  const data = selectedNote ? records[selectedNote] : [];

  const { markdownContent, editorRef } = useEditorContext();

  return (
    <div className="pt-5">
      {data.map((record, index) => (
        <div key={index} className="flex flex-column w-content pb-[15px]">
          <TimeBadge time={record.time} />
          <p className="pl-4 leading-1.5">{record.text}</p>
        </div>
      ))}
      {isToday ? (
        <MDXEditor
          key={selectedNote}
          markdown={markdownContent}
          ref={editorRef}
          contentEditableClassName="outline-none min-h-[50vh] max-w-none text-1 pl-20"
        />
      ) : (
        []
      )}
    </div>
  );
};

export default RecordsList;
