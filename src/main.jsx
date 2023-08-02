import React from 'react'
import ReactDOM from 'react-dom/client'
import './stylesheets/index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import AppContextProvider from './components/context/appContext';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContextProvider>
      <App></App>
    </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)