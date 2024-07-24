import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TimeBadge from "./RecordItem/TimeBadge";
import { records } from "../records";
import RecordHeader from "./RecordItem/RecordHeader";


const RecordContent: React.FC = () => {
  const selectedNote = useSelector((state: RootState) => state.selectedNote.selectedNote);
  const data = selectedNote ? records[selectedNote] : [];

  return (
  // {/*
  //   if typeof selectedItem === string (this might be as a state on redux)
  //   than <RecordHeader>
  //   <TimeBadge>
  //   ...
  //   else
  //   Empty page (pages/EmptyPage.tsx) (with some text like "You don't note anything today" )
  // */}
    <div className="px-[30px]">
      <RecordHeader/>
      <div className="pt-5">
        {data.map((record, index) => (
          <div key={index} className="flex flex-column w-content pb-[15px]">
            <TimeBadge time={record.time} />
            <p className="pl-2.5 leading-1.5">{record.text}</p>
          </div>
        ))}
        <h1></h1>
      </div>
    </div>
  );
};

export default RecordContent;
