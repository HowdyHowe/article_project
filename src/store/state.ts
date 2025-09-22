import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface stateData{
    adminPage: string;
    adminAddCategory: boolean;
    adminEditCategory: boolean;
    adminDeleteCategory: boolean;
};

const initialState: stateData = {
    adminPage: "article",
    adminAddCategory: false,
    adminEditCategory: false,
    adminDeleteCategory: false,
};

const stateDataSlice = createSlice({
    name: "StateData",
    initialState,
    reducers: {
        setAdminPage: (state, action: PayloadAction<string>) => {
            state.adminPage = action.payload;
        },
        setAdminAddCategory: (state) => {
            state.adminAddCategory = !state.adminAddCategory;
        },
        setAdminEditCategory: (state) => {
            state.adminEditCategory = !state.adminEditCategory;
        },
        setAdminDeleteCategory: (state) => {
            state.adminDeleteCategory = !state.adminDeleteCategory;
        },
        reset: () => initialState,
    }
});

export const { setAdminPage, setAdminAddCategory, setAdminEditCategory, setAdminDeleteCategory, reset } = stateDataSlice.actions;
export default stateDataSlice.reducer;