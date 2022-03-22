import { configureStore } from "@reduxjs/toolkit";

import scrollSlice from "./slices/ScrollSlice";

export const Store = configureStore({
  reducer: {
    scroll: scrollSlice,
  },
});
