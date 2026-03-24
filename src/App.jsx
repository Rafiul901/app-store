import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppProvider } from './context/AppContext.jsx';
import HomePage from './pages/HomePage.jsx';
import AllAppsPage from './pages/AllAppsPage.jsx';
import InstalledAppsPage from './pages/InstalledAppsPage.jsx';
import AppDetailsPage from './pages/AppDetailsPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import Layout from './components/Layout.jsx';

function App() {
  return (
    <AppProvider>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="apps" element={<AllAppsPage />} />
            <Route path="installation" element={<InstalledAppsPage />} />
            <Route path="app/:id" element={<AppDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;