import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setSelectedNote } from "../redux/selectedNoteSlice";
import { checkIfIsToday } from "../utils/dateHelper";
import { dates } from "../records";
import { uuidv7 } from "uuidv7";
import NoteListItem from "./NoteListItem/NoteListItem";
import AddNoteButton from "./AddNoteButton";



const SidebarContent: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const todayDate = dates.find((date) => checkIfIsToday(date));
  const otherDates = dates.filter((date) => !checkIfIsToday(date));

  const handleItemClick = (item:string) => {
    dispatch(setSelectedNote(item));
  }

  return (
    <>
      <div className="p-4 h-[100px] w-full bg-base-100 flex flex-col items-center justify-center sticky overflow-hidden">
        {todayDate ? (
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <a
              className="cursor-pointer"
              key={uuidv7()}
              onClick={() => handleItemClick(todayDate)}
            >
              <NoteListItem date={todayDate} isToday={true} />
            </a>
          </label>
        ) : (
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <AddNoteButton onClick={() => handleItemClick("add-note")} />
          </label>
        )}
      </div>

      <div className=" w-full pt-4 bg-neutral gap-4 flex flex-col items-center lg:h-[calc(100vh-160px)] overflow-y-auto">
        {otherDates.map((date) => (
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          >
            <a
              className="cursor-pointer"
              key={uuidv7()}
              onClick={() => handleItemClick(date)}
            >
              <NoteListItem date={date} isToday={false} />
            </a>
          </label>
        ))}
        <div className="h-16"></div>
      </div>
    </>
  );
};

export default SidebarContent;
