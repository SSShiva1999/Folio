import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './mainpages/homepage/homepage';
import AboutPage from './mainpages/aboutpage/aboutpage';
import Resumes from './mainpages/resumespage/resumes/resumes'; 
import Experience from './mainpages/experiencepage/experience';
import Project from './mainpages/projectpage/project';

function App() {
  return (
    <Router basename="/Folio"> {/* Add basename here */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<Project/>} />
        <Route path="/resumes" element={<Resumes />} /> 
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </Router>
  );
}

export default App;
