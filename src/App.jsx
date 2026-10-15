import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './components/layout/RootLayout';
import HomePage from "./pages/HomePage" ;
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';


const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage},
      { path: "about", Component: AboutPage },
      { path: "service", Component: ServicesPage },
      
    ],
  },
]);
  
  return <RouterProvider router={router} />;
};

export default App
