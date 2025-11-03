import Login from '../pages/user.pages/Login.jsx';
import SignUp from '../pages/user.pages/SignUp.jsx';


const authRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/register', element: <SignUp/> },
];


export default authRoutes;