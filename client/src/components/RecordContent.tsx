import React from "react";
import TimeBadge from "./RecordItem/TimeBadge";
import { records } from "../records";
import RecordHeader from "./RecordItem/RecordHeader";

interface RecordProps {
  selectedItem: string | null;
}

const RecordContent: React.FC<RecordProps> = ({ selectedItem }) => {
  const data = selectedItem ? records[selectedItem] : [];
  return (
    <div className="pt-[30px] px-[30px]">
      <RecordHeader />
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
