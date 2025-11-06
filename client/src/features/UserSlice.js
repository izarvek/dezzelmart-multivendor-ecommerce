import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    profileMenuOpen : false ,
    profileNotificationsOpen : false ,
    viewOrderOpen : false,
    editProfileOpen : false,
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
        toggleEditProfile : (state) => {
            state.editProfileOpen = !state.editProfileOpen;
        },
    }
}); 
export const { toggleProfileMenu , toggleProfileNotifications , toggleViewOrder , toggleEditProfile} = userSlice.actions ;
export default userSlice.reducer ;