import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Home from '../pages/Home';

/**
 * AppRouter Component
 * Iterates over the routes configuration and renders the appropriate components.
 */
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
