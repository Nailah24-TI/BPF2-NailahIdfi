import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import VisitorLayout from "./layouts/VisitorLayout";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Notes from "./pages/Notes";
const Loading = () => <div className="p-5">Loading</div>;

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="*" element={<NotFound />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
          <Route path="notes" element={<Notes />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        <Route element={<VisitorLayout />}>
          <Route path="/" element={<LandingPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
