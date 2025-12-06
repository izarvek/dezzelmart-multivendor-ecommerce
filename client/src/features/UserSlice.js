import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileMenuOpen : false ,
    profileNotificationsOpen : false ,
    viewOrderOpen : false,
    userDetail : null,
};

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {    
        toggleProfileMenu : (state) => {
            state.profileMenuOpen = !state.profileMenuOpen;
        },
        toggleProfileNotifications : (state) => {
            state.profileNotificationsOpen = !state.profileNotificationsOpen;
        },
        toggleViewOrder : (state) => {
            state.viewOrderOpen = !state.viewOrderOpen;
        },
        setUserDetail : (state , action) => {
            state.userDetail = action.payload ;
        }
    }
}); 
export const { toggleProfileMenu , toggleProfileNotifications , toggleViewOrder , toggleEditProfile , setUserDetail} = userSlice.actions ;
export default userSlice.reducer ;