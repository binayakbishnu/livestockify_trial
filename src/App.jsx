import { Link, Route, Routes } from 'react-router-dom';

import Alerts from './Pages/Farmer/Alerts';
import Dashboard from './Pages/Farmer/Dashboard';
import Devices from './Pages/Farmer/Devices';
import FAQ from './Pages/FAQ';
import History from './Pages/Farmer/History';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/Authentication/Login";
import OurProduct from './Pages/Products/OurProduct';
import PageNotFound from './Pages/PageNotFound';
import ProductListing from './Pages/Products/ProductListing';
import ProductMainPage from './Pages/Products/ProductMainPage';
import Profile from './Pages/Farmer/Profile';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductMainPage />} />
          <Route path="/products/OurProduct" element={<OurProduct />} />
          <Route path="/productlist" element={<ProductListing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/farmer/dashboard" element={<Dashboard />} />
          <Route path="/farmer/history" element={<History />} />
          <Route path="/farmer/profile" element={<Profile />} />
          <Route path="/farmer/devices" element={<Devices />} />
          <Route path="/farmer/alerts" element={<Alerts />} />

          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}