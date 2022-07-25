import { Routes, Route } from "react-router-dom";
import { BrandsPage } from "../brands/BrandsPage";

import { Navbar } from "../components/Navbar";
import { SearchPage } from "../components/SearchPage";
import { DashboardPage } from "../dashboard/DashboardPage";
import { ProductsPage } from "../products/ProductsPage";
import { ProfilePage } from "../profile/ProfilePage";

export const PagesRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="dashboard" element={<DashboardPage />} />

          <Route path="products" element={<ProductsPage />} />
          <Route path="brands" element={<BrandsPage />} />

          <Route path="profile" element={<ProfilePage />} />

          <Route path="search" element={<SearchPage />} />
        </Routes>
      </div>
    </>
  );
};
