import { configureStore } from "@reduxjs/toolkit";
import workSlice from "../features/work/workSlice";
import blogSlice from "../features/blog/blogSlice";
import toggleSlice from "../features/toggle/toggleSlice";

export const store = configureStore({
    reducer: {
        work: workSlice,
        blog: blogSlice,
        toggle: toggleSlice,
    },
});
