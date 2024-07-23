import React from 'react';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

interface AddNoteButtonProps{
    onClick: () => void;
}

const AddNoteButton: React.FC<AddNoteButtonProps> = ({onClick}) => {
    return(
        <div className="card card-side h-[60px] w-[220px] bg-base-100 drop-shadow-card flex gap-2.5 items-center justify-center text-accent text-sm font-semibold items-center p-[5px]" onClick={onClick}>
          <NoteAddIcon/>
          <button className="">Add note for today</button>
         </div>
    );
};

export default AddNoteButton;