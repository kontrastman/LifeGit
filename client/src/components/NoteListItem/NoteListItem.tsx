import React from 'react';
import NoteListItemDate from './NoteListItemDate';
import NoteListItemSettings from './NoteListItemSettings';

interface NoteListItem{
  date: string;
  isToday: boolean;
}

const NoteListItem: React.FC<NoteListItem> = ({date,isToday}) => {
    return(
        <div className="card card-side h-[60px] w-[220px] bg-base-100 drop-shadow-card flex items-center p-[5px] z-10 ">
          <NoteListItemDate date={date} isToday={isToday}/>
          <NoteListItemSettings/>
          </div>
    );
};

export default NoteListItem;