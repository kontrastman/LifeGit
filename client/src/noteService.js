// noteService.js

const NOTES_KEY = 'notes';

// Load notes from localStorage
export const loadNotes = () => {
    const notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
    return notes;
  };

// Save notes to localStorage
export const saveNotes = (notes) => {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
};

// Create a new note and add it to notes array, checking if a note was already added today
export const createNote = () => {
  const notes = loadNotes();
  
  const today = new Date().toLocaleDateString();
  const noteAddedToday = notes.some(note => note.createdAt === today);

  if (noteAddedToday) {
    throw new Error('Note already added today. Only one note per day is allowed.');
  }

  const newNote = {
    id: Date.now(),
    text: '',
    createdAt: today,
    history: [],
  };

  notes.push(newNote);
  saveNotes(notes);

  return newNote;
};

// Delete a note by its ID
export const deleteNote = (id) => {
  let notes = loadNotes();
  notes = notes.filter(note => note.id !== id);
  saveNotes(notes);
};


// Update a note by its ID with new text, preserving existing text and adding new blocks
export const updateNote = (noteId, textBlocks) => {
    const notes = JSON.parse(localStorage.getItem(NOTES_KEY)) || [];
  
    const existingNoteIndex = notes.findIndex(note => note.id === noteId);
    if (existingNoteIndex !== -1) {
      notes[existingNoteIndex].textBlocks = textBlocks;
    } else {
      notes.push({ id: noteId, textBlocks });
    }
    localStorage.setItem(NOTES_KEY, JSON.stringify(notes));  
};
