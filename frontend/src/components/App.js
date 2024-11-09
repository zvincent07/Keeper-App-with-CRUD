import React, { Fragment } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from "./partials/Header";
import Footer from "./partials/Footer";
import CreateArea from './note/CreateArea';
import Note from './note/Note';

// Define routes
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment> 
        <Header />
        <CreateArea />
        <Note />
        <Footer />
      </Fragment>
    )
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;