import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BirthdayLanding from './pages/BirthdayLanding';
import Timeline from './pages/Timeline';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BirthdayLanding />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
