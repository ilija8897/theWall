import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { App } from './App';
import { store } from '@/store/index';
import { Provider } from 'react-redux';
import { AuthPage } from '../pages';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AuthPage />} />   
                <Route path='/app' element={<App />} />   
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);
