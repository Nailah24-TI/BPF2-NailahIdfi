import { Outlet } from "react-router-dom";
import './../assets/tailwind.css';

export default function GuestLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Outlet />
    </div>
  );
}
