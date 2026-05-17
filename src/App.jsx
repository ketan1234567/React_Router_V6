import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact, contactData } from "./Pages/Contact";
import { AppLayout } from "./Component/Layout/UI/AppLayout";
import './index.css'
import { ErrorPage } from "./Pages/ErrorPage";
import { Movie } from "./Pages/Movie";
import { GetMovieData } from "./Component/Layout/Api/GetMovieData";
import {MovieDetails} from "./Component/Layout/UI/MovieDetails"
import { GetMovieDetails } from "./Component/Layout/Api/GetMovieDetails";

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
          action:contactData
        },
                {
          path: "movie",
          element: <Movie />,
          loader:GetMovieData,
        },
                      {
          path: "/movie/:movieID",
          element: <MovieDetails />,
          loader:GetMovieDetails

        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;