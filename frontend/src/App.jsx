import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import PlaceDetailsPage from './pages/PlaceDetailsPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: '1rem 5%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/region/:regionName" element={<RegionPage />} />
          <Route path="/place/:id" element={<PlaceDetailsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;