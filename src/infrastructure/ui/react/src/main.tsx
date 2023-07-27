import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, Routes, Route, BrowserRouter } from 'react-router-dom';
import { GlobalContext } from '@/context/globalContext';
import { createGlobalStore } from '@/store/globalStore';
import { share } from 'shared-zustand';
import { HomePage } from '@/pages/HomePage.tsx';
import { ReadingListPage } from './pages/ReadingListPage.tsx';
import { MainLayout } from './layouts/MainLayout.tsx';

const store = createGlobalStore();
share('booksToRead', store);
share('avaibleBooks', store);

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/reading-list',
        element: <ReadingListPage />
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalContext.Provider value={store}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route index element={<HomePage />} />
                        <Route path='*' element={<ReadingListPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalContext.Provider>
    </React.StrictMode>
);
