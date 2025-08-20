import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import RegionPage from "./pages/RegionPage";
import PlaceDetailsPage from "./pages/PlaceDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/ProfilePage";
import UserListPage from "./pages/UserListPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminDashboardLayout from "./pages/AdminDashboardLayout";
import AdminRoute from "./components/AdminRoute";
import VehicleCreatePage from "./pages/VehicleCreatePage";
import VehicleListPage from "./pages/VehicleListPage";
import VehicleListPageUser from './pages/VehicleListPageUser';
import HotelListPage from './pages/HotelListPage';
import HotelCreatePage from './pages/HotelCreatePage';
import HotelListPageAdmin from './pages/HotelListPageAdmin';
import PackageCreatePage from './pages/PackageCreatePage';
import PackageListPage from './pages/PackageListPage';

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Navbar />
      <main style={{ padding: "1rem 5%" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/region/:regionName" element={<RegionPage />} />
          <Route path="/place/:id" element={<PlaceDetailsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/vehicles" element={<VehicleListPageUser />} />
          <Route path="/hotels" element={<HotelListPage />} />
          <Route path="/packages" element={<PackageListPage />} />

          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route path="/admin" element={<AdminRoute />}>
            <Route element={<AdminDashboardLayout />}>
              <Route path="userlist" element={<UserListPage />} />
              <Route path="vehicles">
                <Route index element={<VehicleListPage />} />
                <Route path="create" element={<VehicleCreatePage />} />
              </Route>
              <Route path="hotels">
                <Route index element={<HotelListPageAdmin />} />
                <Route path="create" element={<HotelCreatePage />} />
              </Route>
              <Route path="packages">
                <Route path="create" element={<PackageCreatePage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
