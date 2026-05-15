import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { AppLayout } from "./Component/Layout/UI/AppLayout";
import './index.css'
import { ErrorPage } from "./Pages/ErrorPage";
import { Movie } from "./Pages/Movie";
import { GetMovieData } from "./Component/Layout/Api/GetMovieData";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement:<ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
                {
          path: "movie",
          element: <Movie />,
          loader:GetMovieData,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;