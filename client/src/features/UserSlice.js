import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    profileMenuOpen : false ,
    profileNotificationsOpen : false ,
    viewOrderOpen : false,
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
        }

    }
}); 
export const { toggleProfileMenu , toggleProfileNotifications , toggleViewOrder} = userSlice.actions ;
export default userSlice.reducer ;