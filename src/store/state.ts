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
        }
    }
});

export const { setAdminPage } = stateDataSlice.actions;
export default stateDataSlice.reducer;