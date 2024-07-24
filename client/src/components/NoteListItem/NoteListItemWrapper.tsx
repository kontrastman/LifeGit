import React from 'react';

interface NoteListItemWrapperProps {
  onClick: () => void;
  children: React.ReactNode;
}

const NoteListItemWrapper: React.FC<NoteListItemWrapperProps> = ({ onClick, children }) => (
  <label
    htmlFor="my-drawer-2"
    aria-label="close sidebar"
    className="drawer-overlay"
  >
    <a className="cursor-pointer" onClick={onClick}>
      {children}
    </a>
  </label>
);

export default NoteListItemWrapper;