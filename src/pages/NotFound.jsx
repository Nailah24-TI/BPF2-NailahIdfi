import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Mouse move (desktop)
  useEffect(() => {
    const handleMove = (e) => {
      setPos({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Touch (mobile)
  const handleTouch = (e) => {
    const touch = e.touches[0];
    setPos({
      x: (touch.clientX / window.innerWidth - 0.5) * 40,
      y: (touch.clientY / window.innerHeight - 0.5) * 40,
    });
  };

  return (
    <div
      onTouchMove={handleTouch}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 overflow-hidden"
    >
      <div className="text-center relative">
        
        {/* 404 with movement */}
        <h1
          className="text-[120px] md:text-[160px] font-black text-gray-800 transition-transform duration-200"
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px)`,
          }}
        >
          404
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-6">
          Halaman ini tidak ditemukan
        </p>

        {/* Button */}
        <Link
          to="/"
          className="px-6 py-3 bg-black text-white rounded-lg hover:scale-105 transition"
        >
          Kembali ke Home
        </Link>

        {/* Soft shadow circle */}
        <div className="absolute inset-0 flex items-center justify-center -z-10">
          <div className="w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-40"></div>
        </div>
      </div>
    </div>
  );
}