import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import ArtisansList from "../pages/ArtisansList";
import Artisan from "../pages/Artisan";
import WorkInProgress from "../pages/WorkInProgress";
import NotFound from "../pages/404NotFound";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    childrent: [
      { path: "/accueil", element: <Home /> },
      { path: "/artisans", element: <ArtisansList /> },
      { path: "/artisans/:slug", element: <Artisan /> },
      { path: "/mentions-legales", element: <WorkInProgress /> },
      { path: "/donnees-personnelles", element: <WorkInProgress /> },
      { path: "/accessibilite", element: <WorkInProgress /> },
      { path: "/contacts", element: <WorkInProgress /> },
      { path: "/politique-cookies", element: <WorkInProgress /> },
      { path: "/gestion-cookies", element: <WorkInProgress /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
