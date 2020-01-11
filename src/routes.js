import LandingPage from "./views/LandingPage";
import Events from "./views/Events";
import Moments from "./views/Moments";

const routes = [
    {
        path: '/',
        name: 'LandingPage',
        component: LandingPage,
    },
    {
        path: '/moments',
        name: 'moments',
        component: Moments,
    },
    {
        path: '/events',
        name: 'Contact',
        component: Events,
    }
];

export default routes