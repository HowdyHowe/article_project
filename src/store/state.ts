import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface stateData{
    // popup widget
    adminPage: string;
    adminLogout: boolean;
    adminDeleteArticle: boolean;
    adminAddCategory: boolean;
    adminEditCategory: boolean;
    adminDeleteCategory: boolean;
    dashboardLogout: boolean;
    dashboardProfile: boolean
    // extra widget
    alertAnimation: boolean;
    loadingAnimation: boolean;
    // category admin callout
    callCategoryValue: boolean;
};

const initialState: stateData = {
    adminPage: "article",
    adminLogout: false,
    adminDeleteArticle: false,
    adminAddCategory: false,
    adminEditCategory: false,
    adminDeleteCategory: false,
    dashboardLogout: false,
    dashboardProfile: false,
    alertAnimation: false,
    loadingAnimation: false,
    callCategoryValue: false,
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
        setDashboardLogout: (state) => {
            state.dashboardLogout = !state.dashboardLogout;
        },
        setDashboardProfile: (state) => {
            state.dashboardProfile = !state.dashboardProfile;
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
        setAdminCallCategoryValue: (state) => {
            state.callCategoryValue = !state.callCategoryValue
        },
        reset: () => initialState,
    }
});

export const { setAdminPage, setAdminLogout, setAdminDeleteArticle, setAdminAddCategory, setAdminEditCategory, setAdminDeleteCategory, setDashboardLogout, setDashboardProfile, showAlertAnimation, hideAlertAnimation, showLoadingAnimation, hideLoadingAnimation, setAdminCallCategoryValue, reset } = stateDataSlice.actions;
export default stateDataSlice.reducer;