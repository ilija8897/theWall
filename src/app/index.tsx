import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProfilePage } from '@/pages/ProfilePage/ProfilePage';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('app')
);
