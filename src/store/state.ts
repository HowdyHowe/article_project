import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface stateData{
    adminPage: string;
    adminLogout: boolean;
    adminDeleteArticle: boolean;
    adminAddCategory: boolean;
    adminEditCategory: boolean;
    adminDeleteCategory: boolean;
    alertAnimation: boolean,
    loadingAnimation: boolean
};

const initialState: stateData = {
    adminPage: "article",
    adminLogout: false,
    adminDeleteArticle: false,
    adminAddCategory: false,
    adminEditCategory: false,
    adminDeleteCategory: false,
    alertAnimation: false,
    loadingAnimation: false

};

const stateDataSlice = createSlice({
    name: "StateData",
    initialState,
    reducers: {
        setAdminPage: (state, action: PayloadAction<string>) => {
            state.adminPage = action.payload;
        },
        setAdminLogout: (state) => {
            state.adminLogout = !state.adminLogout;
        },
        setAdminDeleteArticle: (state) => {
            state.adminDeleteArticle = !state.adminDeleteArticle;
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
        showAlertAnimation: (state) => {
            state.alertAnimation = true;
        },
        hideAlertAnimation: (state) => {
            state.alertAnimation = false;
        },
        showLoadingAnimation: (state) => {
            state.loadingAnimation = true;
        },
        hideLoadingAnimation: (state) => {
            state.loadingAnimation = false;
        },
        reset: () => initialState,
    }
});

export const { setAdminPage, setAdminLogout, setAdminDeleteArticle, setAdminAddCategory, setAdminEditCategory, setAdminDeleteCategory, showAlertAnimation, hideAlertAnimation, showLoadingAnimation, hideLoadingAnimation, reset } = stateDataSlice.actions;
export default stateDataSlice.reducer;