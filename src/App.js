import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AnalyticsPage from './pages/AnalyticsPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './styles/App.css';
import './styles/App.css';
import reportWebVitals from './reportWebVitals';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
reportWebVitals();