import React, { useEffect } from 'react';
import Layout from './components/layout';
import { initGA, trackPageView } from './utils/analytics';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    initGA();
    
    // Track initial page view
    trackPageView(window.location.pathname);
  }, []);

  return (
    <div className="app">
      <Layout />
    </div>
  );
};

export default App;