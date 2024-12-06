import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    workInfo: null,
};

export const workSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        addWorkInfo: (state, { payload }) => {
            state.workInfo = payload;
        },
    },
});

export const { addWorkInfo } = workSlice.actions;

export default workSlice.reducer;
