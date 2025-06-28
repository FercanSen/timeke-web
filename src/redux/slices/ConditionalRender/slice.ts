import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isMobile: false,
};

const conditionalRenderSlice = createSlice({
  name: "conditionalRender",
  initialState,
  reducers: {
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = conditionalRenderSlice.actions;
export default conditionalRenderSlice.reducer;
