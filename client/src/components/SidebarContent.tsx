import React from "react";
import NoteListItem from "./NoteListItem/NoteListItem";
import AddNoteButton from "./AddNoteButton";
import { checkIfIsToday } from "../utils/dateHelper";
import { dates } from "../records";
import { uuidv7 } from "uuidv7";

interface SidebarProps {
  setSelectedItem: (item: string) => void;
}


const SidebarContent: React.FC<SidebarProps> = ({ setSelectedItem }) => {
  const todayDate = dates.find((date) => checkIfIsToday(date));
  const otherDates = dates.filter((date) => !checkIfIsToday(date));

  return (
    <>
      <div className="p-4 h-[100px] w-full bg-base-100 flex flex-col items-center justify-center sticky overflow-hidden">
        {todayDate ? (
          <a className="cursor-pointer" key={uuidv7()} onClick={() => setSelectedItem(todayDate)}>
            <NoteListItem date={todayDate} isToday={true} />
          </a>
        ) : (
          <>
          <AddNoteButton onClick={() => setSelectedItem("add-note")}/>
          </>
        )}
      </div>

      <div className=" w-full pt-4 bg-neutral gap-4 flex flex-col items-center lg:h-[calc(100vh-160px)] overflow-y-auto">
        {otherDates.map((date) => (
          <a
            className="cursor-pointer"
            key={uuidv7()}
            onClick={() => setSelectedItem(date)}
          >
            <NoteListItem date={date} isToday={false} />
          </a>
        ))}
         <div className="h-16"></div>
      </div>
    </>
  );
};

export default SidebarContent;
