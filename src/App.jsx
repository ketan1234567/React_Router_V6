import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";



function App() {

  const Router= createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },
        {
      path:'/about',
      element:<About/>
    },
        {
      path:'/contact',
      element:<Contact/>
    }
  ]);

  // const Router = createBrowserRouter(
  //   createRoutesFromElements(
  //    <Route>
  //     <Route path="/"element={<Home/>}/>
  //     <Route path="/about"element={<About/>}/>
  //     <Route path="/contact"element={<Contact/>}/>
  //    </Route>

  //   )
  // )
  


  return <RouterProvider router={Router}/>
}

export default App
