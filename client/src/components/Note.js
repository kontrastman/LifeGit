import React, { useState, useEffect, useRef } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import Typography from '@mui/material/Typography';
import { updateNote, loadNotes } from '../noteService';

const Note = ({ noteId }) => {
  const [note, setNote] = useState(null); 
  const [textBlocks, setTextBlocks] = useState([]); 
  const [newText, setNewText] = useState(''); 

  const contentRef = useRef(null); // Ref for scrolling to bottom of content

  useEffect(() => {
    const notes = loadNotes(); // Load notes from localStorage
    const currentNote = notes.find(note => note.id === noteId); 
    if (currentNote) {
      setNote(currentNote); 
      setTextBlocks(currentNote.textBlocks || []); 
    }
  }, [noteId]); 

  // Function to handle save button click
  const handleSaveClick = () => {
    if (newText.trim() === '') return; // Don't save empty blocks

    const timestamp = new Date().toISOString(); 
    const updatedTextBlocks = [...textBlocks, { content: newText, timestamp }];
    updateNote(noteId, updatedTextBlocks);

    const updatedNote = { ...note, textBlocks: updatedTextBlocks };
    setNote(updatedNote);
    setTextBlocks(updatedTextBlocks); 
    setNewText(''); 

    contentRef.current.scrollTop = contentRef.current.scrollHeight;
  };

  // Function to handle text input change
  const handleTextChange = (e) => {
    setNewText(e.target.value); 
  };

  // Function to format date in Ukrainian
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('uk-UA', options);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: '1 1 auto', overflowY: 'auto', padding: '16px' }} ref={contentRef}>
        {/* Note content */}
        <Typography variant="h6">{note && formatDate(note.createdAt)}</Typography>
        {textBlocks.map((block, index) => (
          <div key={index} style={{ marginTop: '8px' }}>
            <Typography variant="body1">
              {block.content} <span style={{ color: 'gray', fontSize: '0.8em' }}>({new Date(block.timestamp).toLocaleString()})</span>
            </Typography>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', borderTop: '1px solid #ccc', background: '#f9f9f9' }}>
        <TextField
          value={newText}
          onChange={handleTextChange}
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          placeholder="Що нового?"
          style={{ flex: '1', marginRight: '8px' }}
        />
        <IconButton onClick={handleSaveClick} color="primary">
          <SaveIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Note;
