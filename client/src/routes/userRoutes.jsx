import Login from '../pages/user.pages/UserLogin.jsx';
import Register from '../pages/user.pages/UseRegister.jsx';
import Account from '../pages/user.pages/UserAccount.jsx'
import Wishlist from '../pages/user.pages/UserWishlist.jsx'
import Orders from '../pages/user.pages/UserOrders.jsx'
import Activity from '../pages/user.pages/UserActivity.jsx'
import Settings from '../pages/user.pages/UserSettings.jsx'
import Help from '../pages/user.pages/UserHelp.jsx'
import SignOut from '../pages/user.pages/UserSignOut.jsx'
import UserToVendor from '../pages/user.pages/UserToVendor.jsx'


export const authRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register/> },
];

export const userProfileRoutes = [
  { path: '/user-account' , element : <Account/>},
  { path: '/user-wishlist' , element : <Wishlist/>},
  { path: '/user-orders' , element : <Orders/>},
  { path: '/user-activity' , element : <Activity/>},
  { path: '/user-settings' , element : <Settings/>},
  { path: '/user-help' , element : <Help/>},
  { path: '/user-sign-out' , element : <SignOut/>},
  { path: '/user-to-vendor' , element : <UserToVendor/>},
]
