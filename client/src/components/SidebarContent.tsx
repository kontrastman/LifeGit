import React from "react";
import NoteListItem from "./NoteListItem/NoteListItem";
import { dates } from "../records";
import { uuidv7 } from "uuidv7";

interface SidebarProps {
  setSelectedItem: (item: string) => void;
}

const SidebarContent: React.FC<SidebarProps> = ({ setSelectedItem }) => {
  return (
    <ul className="menu bg-neutral text-base-content min-h-full w-80 p-4">
      {dates.map((date) => (
        <a className="cursor-pointer">
          <li key={uuidv7()} onClick={() => setSelectedItem(date)} className="m-2">
            <NoteListItem date={date}/>
          </li>
        </a>
      ))}
    </ul>
  );
};

export default SidebarContent;
