import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TimeBadge from "./TimeBadge";
import { records } from "../../records";
import { MDXEditor} from '@mdxeditor/editor';


const RecordsList: React.FC = () => {
  const selectedNote = useSelector(
    (state: RootState) => state.selectedNote.selectedNote
  );
  const data = selectedNote ? records[selectedNote] : [];

  return (
    <div className="pt-5">
      {data.map((record, index) => (
        <div key={index} className="flex flex-column w-content pb-[15px]">
          <TimeBadge time={record.time} />
          <p className="pl-4 leading-1.5">{record.text}</p>
        </div>
      ))}
      <MDXEditor
      key = {selectedNote}
      markdown={"Start writing here..."} 
      contentEditableClassName="outline-none min-h-[50vh] max-w-none text-1 pl-20 prose"/>
    </div>
  );
};

export default RecordsList;
