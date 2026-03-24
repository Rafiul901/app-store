import React, { createContext, useState, useContext, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  // Load installed apps from localStorage on initial load
  const [installedApps, setInstalledApps] = useState(() => {
    const saved = localStorage.getItem('installedApps');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever installedApps changes
  useEffect(() => {
    localStorage.setItem('installedApps', JSON.stringify(installedApps));
  }, [installedApps]);

  const installApp = (app) => {
    // Check if app is already installed
    if (!installedApps.some(installed => installed.id === app.id)) {
      setInstalledApps([...installedApps, app]);
      return true;
    }
    return false;
  };

  const uninstallApp = (appId) => {
    setInstalledApps(installedApps.filter(app => app.id !== appId));
  };

  const isAppInstalled = (appId) => {
    return installedApps.some(app => app.id === appId);
  };

  return (
    <AppContext.Provider value={{
      installedApps,
      installApp,
      uninstallApp,
      isAppInstalled
    }}>
      {children}
    </AppContext.Provider>
  );
};