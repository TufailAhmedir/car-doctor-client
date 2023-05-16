import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import AuthProvider from './Providers/AuthProvider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-5xl mx-auto my-8'>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
    </React.StrictMode>,
  </div>
)
