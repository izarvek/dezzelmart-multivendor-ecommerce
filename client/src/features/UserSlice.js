import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    profileMenuOpen : false ,
    profileNotificationsOpen : false ,
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

    }
}); 
export const { toggleProfileMenu , toggleProfileNotifications } = userSlice.actions ;
export default userSlice.reducer ;