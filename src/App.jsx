import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './mainpages/homepage/homepage';
import AboutPage from './mainpages/aboutpage/aboutpage';
import Resumes from './mainpages/resumespage/resumes/resumes'; // Import the Resumes component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resumes" element={<Resumes />} /> {/* Add route for Resumes page */}
      </Routes>
    </Router>
  );
}

export default App;
