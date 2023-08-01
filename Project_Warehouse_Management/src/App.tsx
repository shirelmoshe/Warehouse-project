import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import './App.css';
import NavigationBar from './assets/layout/RootLayout'; 


import { routes } from './assets/layout/routes';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavigationBar />}>
    {Object.keys(routes).map((routeName) => (
      <Route key={routeName} path={routes[routeName].path} element={routes[routeName].element} />
    ))}
  </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}>
        <NavigationBar /> 
       
      </RouterProvider>
    </>
  );
}

export default App;
