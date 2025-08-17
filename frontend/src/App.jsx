import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import PlaceDetailsPage from './pages/PlaceDetailsPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { Toaster } from 'react-hot-toast';
import ProfilePage from './pages/ProfilePage';
import UserListPage from './pages/UserListPage';
import AdminLoginPage from './pages/AdminLoginPage';

function App() {
  return (
    <BrowserRouter>
    <Toaster />
      <Navbar />
      <main style={{ padding: '1rem 5%' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/region/:regionName" element={<RegionPage />} />
          <Route path="/place/:id" element={<PlaceDetailsPage />} />
          <Route path="/register" element={<RegisterPage />} /> 
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/userlist" element={<UserListPage />} />
          <Route path="/admin/login" element={<AdminLoginPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;