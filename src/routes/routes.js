// import config from '../config';
import Dashboard from '../pages/Dashboard';
import Preferences from '../pages/Preferences';
import Profile from '../pages/Profile';
import Fowllowing from '../pages/Fowllowing';
import Home from '../pages/Home';
import HeaderOnly from '../layouts/HeaderOnly';
import Login from '../pages/Login';
import Register from '../pages/Register';

// Public routes
const publicRoutes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/login', component: Login, title: 'Login', layout: null },
    { path: '/register', component: Register, title: 'Register', layout: null },
    { path: '/preferences', component: Preferences, title: 'Preferences' },
    { path: '/fowllowing', component: Fowllowing, title: 'HeaderOnly', layout: HeaderOnly },
];

// Private routes
// const privateRoutes = [
//     { path: '/dashboard', component: Dashboard, title: 'Dashboard' },
//     { path: '/profile', component: Profile, title: 'Profile null', layout: null },
// ];

const privateRoutes = [
    {
        path: '/admin',
        component: Login,
        listRoute: [
            { path: '/dashboard', component: Dashboard, title: 'Dashboard' },
            { path: '/profile', component: Profile, title: 'Profile null', layout: null },
        ],
    },
];

export { publicRoutes, privateRoutes };
