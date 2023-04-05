// import config from '../config';
import Dashboard from '../pages/Dashboard';
import Preferences from '../pages/Preferences';
import Profile from '../pages/Profile';
import Fowllowing from '../pages/Fowllowing';
import Home from '../pages/Home';
import HeaderOnly from '../layouts/HeaderOnly';

// Public routes
const publicRoutes = [
    { path: '/', component: Home, title: 'Home' },
    { path: '/dashboard', component: Dashboard, title: 'Dashboard' },
    { path: '/preferences', component: Preferences, title: 'Preferences' },
    { path: '/fowllowing', component: Fowllowing, title: 'HeaderOnly', layout: HeaderOnly },
    { path: '/profile', component: Profile, title: 'Profile null', layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
