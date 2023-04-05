// import config from '../config';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Preferences from '../pages/Preferences';
import Fowllowing from '../pages/Fowllowing';

import HeaderOnly from '../layouts/home/HeaderOnly';

import Admin from '../pages/Admin';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

// Public routes
const publicRoutes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/*', component: Home, title: 'Home' },
    { path: '/login', component: Login, title: 'Login', layout: null },
    { path: '/register', component: Register, title: 'Register', layout: null },
    { path: '/preferences', component: Preferences, title: 'Preferences' },
    { path: '/fowllowing', component: Fowllowing, title: 'HeaderOnly', layout: HeaderOnly },
];

const privateRoutes = [
    {
        path: '/admin',
        component: Admin,
        listRoute: [
            { path: '*', component: Dashboard, title: 'Admin' },
            { path: '', component: Dashboard, title: 'Admin' },
            { path: 'dashboard', component: Dashboard, title: 'Dashboard' },
            { path: 'profile', component: Profile, title: 'Profile null', layout: null },
        ],
    },
];

export { publicRoutes, privateRoutes };
