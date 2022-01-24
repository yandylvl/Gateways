import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui/drawer",
  initialState: { isDrawerOpen: false },
  reducers: {
    drawerToggled: (drawer, action) => {
      drawer.isDrawerOpen = action.payload.isOpen;
    },
  },
});

export const { drawerToggled } = slice.actions;
export default slice.reducer;

// Action Creators
