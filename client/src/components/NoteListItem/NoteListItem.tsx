import React from 'react';
import NoteListItemDate from './NoteListItemDate';
import NoteListItemSettings from './NoteListItemSettings';

interface NoteListItem{
  date: string;
}

const NoteListItem: React.FC<NoteListItem> = ({date}) => {
    return(
        <div className="card card-side h-[60px] bg-base-100 shadow-sm flex items-center p-[5px]">
          <NoteListItemDate date={date}/>
          <NoteListItemSettings/>
          </div>
    );
};

export default NoteListItem;