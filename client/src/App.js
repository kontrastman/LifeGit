// App.js

import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Box, Button, Typography, IconButton } from '@mui/material';
import Note from './components/Note';
import { createNote, loadNotes, deleteNote } from './noteService'; // Assuming these functions are correctly implemented in noteService
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

const drawerWidth = 240;

function App() {
  const [notes, setNotes] = useState([]); // State to hold notes array
  const [selectedNoteId, setSelectedNoteId] = useState(null); // State to hold ID of currently selected note

  useEffect(() => {
    const loadedNotes = loadNotes(); // Load notes from localStorage on component mount
    setNotes(loadedNotes); // Set notes state with loaded notes
    if (loadedNotes.length > 0) {
      setSelectedNoteId(loadedNotes[0].id); // Select the first note by default
    }
  }, []); // Empty dependency array ensures useEffect runs only on component mount

  // Function to handle creation of a new note
  const handleCreateNote = () => {
    try {
      const newNote = createNote(); // Create new note using noteService createNote function
      setNotes([...notes, newNote]); // Update notes state with new note
      setSelectedNoteId(newNote.id); // Select the newly created note
    } catch (error) {
      console.error('Error creating note:', error.message);
      // Optionally, notify the user or handle the error in some other way
    }
  };

  // Function to handle deletion of a note by ID
  const handleDeleteNote = (id) => {
    deleteNote(id); // Delete note using noteService deleteNote function
    const updatedNotes = notes.filter(note => note.id !== id); // Filter out the deleted note from notes state
    setNotes(updatedNotes); // Update notes state with filtered notes
    if (id === selectedNoteId) {
      setSelectedNoteId(null); // Deselect the note if it was selected and deleted
    }
  };

  // Function to check if a note exists for today
  const hasNoteForToday = () => {
    const today = new Date().toLocaleDateString();
    return notes.some(note => new Date(note.createdAt).toLocaleDateString() === today);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ p: 2 }}>
          {/* Conditionally render based on whether a note exists for today */}
          {hasNoteForToday() ? (
            <Typography variant="body1" sx={{ px: 2, py: 1 }}>
              Today you already did the note
            </Typography>
          ) : (
            <Button variant="contained" color="primary" onClick={handleCreateNote} fullWidth>
              Create New Note
            </Button>
          )}
        </Box>
        <List>
          {notes.map(note => (
            <ListItem key={note.id} disablePadding>
              <ListItemButton onClick={() => setSelectedNoteId(note.id)}>
                <ListItemText primary={note.createdAt} />
              </ListItemButton>
              <IconButton onClick={() => handleDeleteNote(note.id)} color="secondary">
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        {selectedNoteId ? (
          <Note
            noteId={selectedNoteId}
            onDeleteNote={handleDeleteNote} // Pass handleDeleteNote function to Note component
          />
        ) : (
          <Typography>Select a note or create a new one.</Typography>
        )}
      </Box>
    </Box>
  );
}

export default App;
