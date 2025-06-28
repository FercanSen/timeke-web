import { configureStore } from "@reduxjs/toolkit";
import conditionalRenderReducer from "./slices/ConditionalRender/slice";

export const store = configureStore({
  reducer: {
    conditionalRender: conditionalRenderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
