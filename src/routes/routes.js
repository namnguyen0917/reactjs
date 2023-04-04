import config from '../config';

// Public routes
const publicRoutes = [{ path: config.routes.home, component: Home }];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
