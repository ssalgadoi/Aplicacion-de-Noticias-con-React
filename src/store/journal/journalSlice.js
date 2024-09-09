import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    active: null,
    // active: {
    //   id:'ABEC123',
    //   title: '',
    //   body: '',
    //   date: 12122024,
    //   imageUrls: []
    // }
  },
  reducers: {
    addNewEmptyNote: (state, action) => {

    },
    setActiveNote: (state, action) => {

    },
    setNotes: (state, action) => {

    },
    setSaving: (state) => {

    },
    updateNotes: (state, action) => {

    },
    deleteNoteById: (state, action) => {

    },

  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNotes,
  deleteNoteById
} = journalSlice.actions;