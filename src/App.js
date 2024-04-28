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
import SelectFormPage from './pages/SelectFormPage';
import { Component } from 'react';
import SelectTexturePage from './pages/SelectTexture';
import SignUp from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

const HOMEPAGE_ROUTE = "/"
const MODEL_ROUTE="/3D"

const SELECT_ROUTE="/SelectFigure"


const SELECT_TEXTURE_ROUTE="/SelectTexture"

const SIGN_UP_ROUTE = "/SignUp"

const SIGN_IN_ROUTE = "/SignIn"
const publicRoutes = [
  {
     path: HOMEPAGE_ROUTE,
     Component: Homepage
  },
  {
    path: MODEL_ROUTE,
    Component: ContentPage
  },
  {
    path: SELECT_ROUTE,
    Component: SelectFormPage
  },
  {
    path: SELECT_TEXTURE_ROUTE,
    Component: SelectTexturePage
  },

  {
    path: SIGN_UP_ROUTE,
    Component: SignUp 
  },
  

  {
    path: SIGN_IN_ROUTE,
    Component: SignInPage
  }
  

]
 function App() {
  return (
    <div  >
      <BrowserRouter>
   

      <Routes>
            {publicRoutes.map(({ path, Component }) => (<Route key={path} path={path} element={<Component  />} />)
            )}

{/*
            <Route path="*" element={<Navigate replace to={HOMEPAGE_ROUTE} />} />
          */}

         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
