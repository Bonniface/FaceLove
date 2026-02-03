import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import ArticlePage from './pages/ArticlePage';
import SalesPage from './pages/SalesPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ArticlePage />} />
        <Route path="/offer" element={<SalesPage />} />
      </Routes>
    </HashRouter>
  );
};

export default App;