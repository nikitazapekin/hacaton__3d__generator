import logo from './logo.svg';
import './App.css';
//import Image from "./static/images.jpg"
import { BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
//import { Component } from 'react';
import ContentPage from './pages/3dpage';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const HOMEPAGE_ROUTE = "/"
const MODEL_ROUTE="/3D"
const publicRoutes = [
  {
     path: HOMEPAGE_ROUTE,
     Component: Homepage
  },
  {
    path: MODEL_ROUTE,
    Component: ContentPage
  }
  

]
 function App() {
  return (
    <div  >
      <BrowserRouter>
   

      <Routes>
            {publicRoutes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component  />} />)
            )}


            <Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} />

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
