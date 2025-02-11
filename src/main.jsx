import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import About from "./components/about/About.jsx";
import Clients from "./components/clients/Clients.jsx";
import Contacts from "./components/contacts/Contacts.jsx";
import HomePage from "./components/home_page/HomePage.jsx";
import Services from "./components/services/Services.jsx";
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/services",
        element: <Services />,
      },

      {
        path: "/clients",
        element: <Clients />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
    errorElement: <div>Error Page</div>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
