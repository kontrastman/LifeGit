// Note.js

import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { updateNote, loadNotes } from '../noteService';

const Note = ({ noteId }) => {
  const [note, setNote] = useState(null); // State to hold current note data
  const [textBlocks, setTextBlocks] = useState([]); // State to hold text blocks of the note
  const [newText, setNewText] = useState(''); // State to hold new text block to add

  useEffect(() => {
    const notes = loadNotes(); // Load notes from localStorage
    const currentNote = notes.find(note => note.id === noteId); // Find the note with the specified ID
    if (currentNote) {
      setNote(currentNote); // Set current note state
      setTextBlocks(currentNote.textBlocks || []); // Set text blocks state with note text blocks or empty array
    }
  }, [noteId]); // Update effect when noteId changes

  // Function to handle save button click
  const handleSaveClick = () => {
    if (newText.trim() === '') return; // Don't save empty blocks

    const timestamp = new Date().toISOString(); // Generate timestamp for new text block
    const updatedTextBlocks = [...textBlocks, { content: newText, timestamp }]; // Append new text block with timestamp
    updateNote(noteId, updatedTextBlocks); // Update note text blocks using noteService updateNote function

    const updatedNote = { ...note, textBlocks: updatedTextBlocks }; // Create updatedNote object with updated text blocks
    setNote(updatedNote); // Update note state with updatedNote
    setTextBlocks(updatedTextBlocks); // Update text blocks state with updated text blocks
    setNewText(''); // Clear new text block after saving
  };

  // Function to handle text input change
  const handleTextChange = (e) => {
    setNewText(e.target.value); // Update newText state with input value
  };

  return (
    <Box sx={{ my: 2, p: 2, border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography variant="h6">Note Content</Typography>
      {textBlocks.map((block, index) => (
        <Box key={index} sx={{ my: 2 }}>
          <Typography variant="body1">
            {block.content} <span style={{ color: 'gray', fontSize: '0.8em' }}>({new Date(block.timestamp).toLocaleString()})</span>
          </Typography>
        </Box>
      ))}

      <TextField
        value={newText}
        onChange={handleTextChange} // Handle text input change
        variant="outlined"
        fullWidth
        multiline
        rows={3}
        placeholder="Add new text block..."
      />

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <IconButton onClick={handleSaveClick} color="primary">
          <SaveIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Note;
