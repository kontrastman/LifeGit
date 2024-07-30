import React, { useState } from "react";
import { formatDate } from "../../utils/dateHelper";

interface DateProps {
  date: string;
  isToday: boolean;
}

const NoteListItemDate: React.FC<DateProps> = ({ date, isToday}) => {
  return (
    <>
      <div className=" h-[50px] w-[50px] bg-base-200 flex flex-col items-center justify-center overflow-hidden rounded-[10px]">
        <div className={`stat-value font-bold text-[24px] leading-[90%] ${isToday ? "text-accent" : "text-text"}`}>
          {formatDate(date, "dd/MM/yyyy", "dd")}
        </div>
        <div className={`stat-desc font-semibold pt-[3px] text-[10px] leading-[90%] ${isToday ? "text-accent" : "text-text"}`}>
          {formatDate(date, "dd/MM/yyyy", "MMM").toUpperCase()}
        </div>
      </div>

      <p className={`font-semibold text-[10px] pl-[5px] flex-1 ${isToday ? "text-accent" : "text-text"}`}>
        {formatDate(date, "dd/MM/yyyy", "EEEE")}
      </p>
    </>
  );
};

export default NoteListItemDate;
