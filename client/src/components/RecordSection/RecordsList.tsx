import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import TimeBadge from "./TimeBadge";
import { records } from "../../records";

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
          <p className="pl-2.5 leading-1.5">{record.text}</p>
        </div>
      ))}
    </div>
  );
};

export default RecordsList;
