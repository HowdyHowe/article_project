import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface stateData{
    adminPage: string,
};

const initialState: stateData = {
    adminPage: "article"
};

const stateDataSlice = createSlice({
    name: "StateData",
    initialState,
    reducers: {
        setAdminPage: (state, action: PayloadAction<string>) => {
            state.adminPage = action.payload
        },
        reset: () => initialState,
    }
});

export const { setAdminPage, reset } = stateDataSlice.actions;
export default stateDataSlice.reducer;