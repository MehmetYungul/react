import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategories: [],
  storeSelectedItems: [],
  storeSelectedItems2: [],
  filterData: [],
  rating_count: 0,
  selectedBrands: [],
};

export const categoryIdsSlice = createSlice({
  name: "categoryid",
  initialState,
  reducers: {
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },
    setStoreSelectedItems: (state, action) => {
      state.storeSelectedItems = action.payload;
    },
    setStoreSelectedItems2: (state, action) => {
      state.storeSelectedItems2 = action.payload;
    },
    setFilterData: (state, action) => {
      state.filterData = action.payload;
    },
    setSelectedBrands: (state, action) =>{
      state.selectedBrands = action.payload;
    },
    setRating_Count: (state, action) => {
      console.log("payload", action.payload);
      state.rating_count = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {   setRating_Count,setSelectedCategories, setStoreSelectedItems, setFilterData, setSelectedBrands, setStoreSelectedItems2 } =
  categoryIdsSlice.actions;
export default categoryIdsSlice.reducer;
