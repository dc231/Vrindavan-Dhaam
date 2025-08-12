import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import PlaceDetailsPage from './pages/PlaceDetailsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: '1rem 5%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/region/:regionName" element={<RegionPage />} />
          <Route path="/place/:id" element={<PlaceDetailsPage />} />
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;