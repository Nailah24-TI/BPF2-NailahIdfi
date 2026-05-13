import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const products = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    price: "Rp 25.000",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Mie Ayam Sedap",
    price: "Rp 18.000",
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Ayam Geprek",
    price: "Rp 22.000",
    image:
      "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Es Teh Manis",
    price: "Rp 8.000",
    image:
      "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Andi Saputra",
    review: "Makanannya enak banget dan pengiriman cepat!",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Salsa Putri",
    review: "Aplikasi mudah digunakan dan banyak promo menarik.",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Raka Wijaya",
    review: "Tampilan aplikasi modern dan responsif.",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Nabila",
    review: "Pilihan makanan lengkap dan harga terjangkau.",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Fahri",
    review: "Pelayanan sangat memuaskan, recommended!",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

function LandingPage() {
  return (
    <div className="bg-[#1f1f1f] min-h-screen text-white">

      {/* HEADER */}
      <header className="bg-[#111111] shadow-lg sticky top-0 z-50">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center gap-3">

            <img
              src={logo}
              alt="Sedap Logo"
              className="w-14 h-14 object-contain"
            />

            <h1 className="text-2xl font-bold tracking-wide text-lime-400">
              Sedap
            </h1>

          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex gap-8 text-gray-300 font-medium">

            <a href="#" className="hover:text-lime-400 transition">
              Home
            </a>

            <a href="#" className="hover:text-lime-400 transition">
              Produk
            </a>

            <a href="#" className="hover:text-lime-400 transition">
              Tentang
            </a>

            <a href="#" className="hover:text-lime-400 transition">
              Testimoni
            </a>

          </nav>

          {/* BUTTON */}
          <div className="flex gap-3">

            <Link to="/login">
              <button className="border border-lime-500 px-4 py-2 rounded-lg hover:bg-lime-500 hover:text-black transition">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="bg-lime-500 text-black px-4 py-2 rounded-lg hover:bg-lime-400 transition font-semibold">
                Register
              </button>
            </Link>

          </div>

        </div>

      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Nikmati Makanan
            <span className="text-lime-400"> Terbaik </span>
            Dengan Mudah
          </h1>

          <p className="text-gray-400 text-lg mb-8 leading-8">
            Sedap hadir memberikan pengalaman memesan makanan yang cepat,
            modern, dan penuh cita rasa.
          </p>

          <button className="bg-lime-500 text-black px-8 py-4 rounded-xl font-semibold hover:bg-lime-400 transition shadow-lg">
            Pesan Sekarang
          </button>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
            alt="Food"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </section>

      {/* ABOUT */}
      <section className="bg-[#2a2a2a] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-8">
            Tentang Kami
          </h2>

          <p className="text-gray-400 leading-8 max-w-3xl">
            Sedap merupakan aplikasi pemesanan makanan modern dengan tampilan
            elegan dan pengalaman pengguna yang nyaman. Kami menyediakan
            berbagai makanan favorit dengan harga terjangkau.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            <div className="bg-[#1f1f1f] p-8 rounded-2xl hover:scale-105 transition">

              <h3 className="text-2xl font-bold mb-3 text-lime-400">
                Cepat
              </h3>

              <p className="text-gray-400">
                Proses pemesanan dan pengiriman super cepat.
              </p>

            </div>

            <div className="bg-[#1f1f1f] p-8 rounded-2xl hover:scale-105 transition">

              <h3 className="text-2xl font-bold mb-3 text-lime-400">
                Modern
              </h3>

              <p className="text-gray-400">
                Tampilan aplikasi modern dan mudah digunakan.
              </p>

            </div>

            <div className="bg-[#1f1f1f] p-8 rounded-2xl hover:scale-105 transition">

              <h3 className="text-2xl font-bold mb-3 text-lime-400">
                Lezat
              </h3>

              <p className="text-gray-400">
                Menyediakan makanan terbaik dan berkualitas.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PRODUK */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Produk Unggulan
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-[#2a2a2a] rounded-2xl overflow-hidden hover:scale-105 transition duration-300 shadow-lg"
              >

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-60 object-cover"
                />

                <div className="p-6">

                  <h3 className="text-xl font-bold mb-2">
                    {product.name}
                  </h3>

                  <p className="text-lime-400 font-semibold mb-5">
                    {product.price}
                  </p>

                  <button className="w-full bg-lime-500 text-black py-3 rounded-xl hover:bg-lime-400 transition font-semibold">
                    Pesan
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONI */}
      <section className="bg-[#2a2a2a] py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-12">
            Testimoni Pengguna
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {testimonials.map((item) => (

              <div
                key={item.id}
                className="bg-[#1f1f1f] p-8 rounded-2xl shadow-lg hover:scale-105 transition"
              >

                <div className="flex items-center gap-4 mb-5">

                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-14 h-14 rounded-full border-2 border-lime-400"
                  />

                  <div>

                    <h3 className="font-bold text-lg">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 text-sm">
                      Customer Sedap
                    </p>

                  </div>

                </div>

                <p className="text-gray-400 leading-7">
                  "{item.review}"
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] py-12">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          {/* CONTACT */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <img
                src={logo}
                alt="Sedap Logo"
                className="w-12 h-12 object-contain"
              />

              <h2 className="text-3xl font-bold text-lime-400">
                Sedap
              </h2>

            </div>

            <p className="text-gray-400 leading-7">
              Jl. Kuliner No.10
              <br />
              sedap@gmail.com
              <br />
              0812-3456-7890
            </p>

          </div>

          {/* SOCIAL */}
          <div>

            <h3 className="text-2xl font-bold mb-4">
              Sosial Media
            </h3>

            <div className="flex gap-4 flex-wrap">

              <button className="bg-lime-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime-400 transition">
                Instagram
              </button>

              <button className="bg-lime-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime-400 transition">
                TikTok
              </button>

              <button className="bg-lime-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-lime-400 transition">
                Facebook
              </button>

            </div>

          </div>

          {/* PARTNER */}
          <div>

            <h3 className="text-2xl font-bold mb-4">
              Partner
            </h3>

            <div className="flex gap-4 flex-wrap">

              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968874.png"
                alt="Gojek"
                className="bg-white rounded-lg p-2 w-20 h-20 object-contain"
              />

              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                alt="Grab"
                className="bg-white rounded-lg p-2 w-20 h-20 object-contain"
              />

              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968841.png"
                alt="Shopee"
                className="bg-white rounded-lg p-2 w-20 h-20 object-contain"
              />

            </div>

          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500">
          © 2026 Sedap. All Rights Reserved.
        </div>

      </footer>

    </div>
  );
}

export default LandingPage ;