// App.js

import React, { useState, useEffect } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemText, Box, Button, Typography, IconButton, Divider, Menu, MenuItem } from '@mui/material';
import Note from './components/Note';
import { createNote, loadNotes, deleteNote } from './noteService';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import './App.css';

const drawerWidth = 240;

function App() {
  const [notes, setNotes] = useState([]); 
  const [selectedNoteId, setSelectedNoteId] = useState(null); 
  const [anchorEl, setAnchorEl] = useState(null); 
  const [menuNoteId, setMenuNoteId] = useState(null); 

  useEffect(() => {
    const loadedNotes = loadNotes(); 
    setNotes(loadedNotes); 
    if (loadedNotes.length > 0) {
      setSelectedNoteId(loadedNotes[0].id); 
    }
  }, []); 

  // Function to handle creation of a new note
  const handleCreateNote = () => {
    try {
      const newNote = createNote(); 
      setNotes([...notes, newNote]); 
      setSelectedNoteId(newNote.id);
    } catch (error) {
      console.error('Error creating note:', error.message);
    }
  };

  // Function to handle deletion of a note by ID
  const handleDeleteNote = (id) => {
    deleteNote(id); 
    const updatedNotes = notes.filter(note => note.id !== id); 
    setNotes(updatedNotes); 
    if (id === selectedNoteId) {
      setSelectedNoteId(null); 
    }
    handleCloseMenu(); 
  };

  // Function to open the menu
  const handleOpenMenu = (event, id) => {
    setAnchorEl(event.currentTarget); // Set anchor element for the menu
    setMenuNoteId(id); // Set note ID associated with the menu
  };

  // Function to close the menu
  const handleCloseMenu = () => {
    setAnchorEl(null); 
    setMenuNoteId(null); 
  };

  // Function to check if a note exists for today
  const hasNoteForToday = () => {
    const today = new Date().toLocaleDateString('uk-UA');
    return notes.some(note => new Date(note.createdAt).toLocaleDateString('uk-UA') === today);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      {/* Drawer */}
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
          {hasNoteForToday() ? (
            <Typography align="center" variant="caption" sx={{ px: 2, py: 1 }}>
              Сьогодні ви вже зробили запис
            </Typography>
          ) : (
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={handleCreateNote}
              fullWidth
              sx={{ mb: 2 }}
            >
              Створити новий запис
            </Button>
          )}
        </Box>
        <Divider />
        <List>
          {notes.map(note => (
            <ListItem
              key={note.id}
              disablePadding
              selected={selectedNoteId === note.id}
              onClick={() => setSelectedNoteId(note.id)}
            >
              <ListItemButton>
                <ListItemText primary={new Date(note.createdAt).toLocaleDateString('uk-UA')} />
                <IconButton
                  onClick={(event) => handleOpenMenu(event, note.id)}
                  edge="end"
                  size="large"
                >
                  <MoreVertIcon />
                </IconButton>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      
      {/* Main content area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
      >
        {selectedNoteId ? (
          <Note
            noteId={selectedNoteId}
            onDeleteNote={handleDeleteNote} // Pass handleDeleteNote function to Note component
          />
        ) : (
          <Typography variant="h6" sx={{ p: 2 }}>Оберіть нотатку або створіть нову.</Typography>
        )}
      </Box>

      {/* Menu for delete option */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleDeleteNote(menuNoteId)}>Видалити нотатку</MenuItem>
      </Menu>
    </Box>
  );
}

export default App;
