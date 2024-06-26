import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import BrowseInventory from './BrowseInventory';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // This is the relative URL path which users can bookmark and navigate to
    element: <App /> // This is the React Component to load when navigating to the associated path URL
  },
  {
    path: "/browse", // This is the relative URL path which users can bookmark and navigate to
    element: <BrowseInventory /> // This is the React Component to load when navigating to the associated path URL
  }
  // More routes...
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
