import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { loaderReducer } from './redux/loaderReducer';

const store = configureStore({
  reducer: {
    loading: loaderReducer,    
  }
})



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
