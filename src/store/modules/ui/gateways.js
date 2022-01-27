import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "ui/gateways",
  initialState: {
    pageSize: 10,
    currentPage: 0,
    filterCount: "",
    sortBy: "",
    order: "desc",
  },
  reducers: {
    pageSizeChanged: (gateways, action) => {
      gateways.pageSize = action.payload.pageSize;
    },
    currentPageChanged: (gateways, action) => {
      gateways.currentPage = action.payload.currentPage;
    },
    filterCountChanged: (gateways, action) => {
      gateways.filterCount = action.payload.filterCount;
    },
    sortByChanged: (gateways, action) => {
      gateways.sortBy = action.payload.sortBy;
    },
    orderChanged: (gateways, action) => {
      gateways.order = action.payload.order;
    },
  },
});

export const {
  pageSizeChanged,
  currentPageChanged,
  filterCountChanged,
  sortByChanged,
  orderChanged,
} = slice.actions;
export default slice.reducer;

// Action Creators
