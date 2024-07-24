import React from "react";

const NoteHeaderEmptyNote: React.FC = () => {
  return (
    <div className="flex items-center bg-base-100 sticky top-0 pt-[30px] pb-[15px]">
      <h1 className="flex-1 font-bold text-xl text-ghost">
        You haven't made any notes today yet
      </h1>
    </div>
  );
};

export default NoteHeaderEmptyNote;
