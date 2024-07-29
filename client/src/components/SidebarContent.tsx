import React from "react";
import { uuidv4 } from "uuidv7";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { setSelectedNote } from "../redux/selectedNoteSlice";
import { checkIfIsToday } from "../utils/dateHelper";
import { dates } from "../records";
import NoteListItem from "./NoteListItem/NoteListItem";
import NoteListItemWrapper from "./NoteListItem/NoteListItemWrapper";
import AddNoteButton from "./AddNoteButton";
import { addNote } from "../updateRecords";




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
          <NoteListItemWrapper onClick={() => handleItemClick(todayDate)} >
            <NoteListItem date={todayDate} isToday={true}/>
          </NoteListItemWrapper>
        ) : (
          <NoteListItemWrapper onClick={() => addNote(todayDate!)}>
            <AddNoteButton />
          </NoteListItemWrapper>
        )}
      </div>
      <div className=" w-full pt-4 bg-neutral gap-4 flex flex-col items-center lg:h-[calc(100vh-160px)] overflow-y-auto">
        {otherDates.map((date) => (
          <NoteListItemWrapper key={uuidv4()} onClick={() => handleItemClick(date)}>
              <NoteListItem date={date} isToday={false} />
          </NoteListItemWrapper>
        ))}
      </div>
    </>
  );
};

export default SidebarContent;
