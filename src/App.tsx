
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./app/pages/Index";
import ErrorPage from "./app/pages/Other/ErrorPage";
import LoaderPage from "./app/pages/Other/LoaderPage";
import ConnectionPage from "./app/pages/Connections/ConnectionPage";
import DownloadsPage from "./app/pages/Downloads/DownloadsPage";
import SharedFilesPage from "./app/pages/Shared/SharedFilesPage";
import SettingsPage from "./app/pages/Settings/SettingsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      loader: LoaderPage,
      element: <Index />
    },
    {
      path: '/connections',
      errorElement: <ErrorPage />,
      loader: LoaderPage,
      element: <ConnectionPage />
    },
    {
      path: '/downloads',
      errorElement: <ErrorPage />,
      loader: LoaderPage,
      element: <DownloadsPage />
    },
    {
      path: '/shared-files',
      errorElement: <ErrorPage />,
      loader: LoaderPage,
      element: <SharedFilesPage />
    },
    {
      path: '/settings',
      errorElement: <ErrorPage />,
      loader: LoaderPage,
      element: <SettingsPage />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
