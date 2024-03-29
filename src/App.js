import React, { Component } from 'react';
import { RouterProvider, createHashRouter } from "react-router-dom";
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/Not Found/NotFound';


const router = createHashRouter([

  {
    path: "", element: <Layout />, children: [
      { index:true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }
    ]
  }
])


class App extends Component {
  render() {
    return <>

      <RouterProvider router={router} />

    </>
  }
}

export default App;