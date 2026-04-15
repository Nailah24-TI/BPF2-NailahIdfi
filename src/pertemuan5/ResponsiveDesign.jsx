function SectionTitle({ num, title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-black text-sm">
        {num}
      </span>
      <h3 className="text-xl font-bold text-white tracking-tight">
        {title}
      </h3>
    </div>
  );
}

function ResponsiveText() {
  return (
    <p className="text-sm md:text-lg lg:text-xl xl:text-2xl mb-4">
      Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.
      <br />
      Coba hapus class yang menggunakan prefix breakpoint (md:, lg:, xl:) dan lihat perbedaannya!
    </p>
  );
}

function ResponsiveWidth() {
  return (
    <div className="mb-4">
      <p>
        Coba lakukan zoom in/zoom out atau ubah ukuran layar. Perhatikan bagaimana posisi kolom akan menyesuaikan secara responsif:
        <br /><br />
      </p>

      <p>
        <strong>md:w-1/2</strong> → Saat layar ≥768px, setiap kolom jadi 50%.
      </p>

      <p>
        <strong>md:flex-row</strong> → Kolom sejajar horizontal di tablet ke atas, mobile tetap vertikal.
      </p>

      <div className="flex flex-col md:flex-row mb-4">
        <div className="bg-red-400 w-full md:w-1/2 p-4">Kolom 1</div>
        <div className="bg-blue-400 w-full md:w-1/2 p-4">Kolom 2</div>
      </div>
    </div>
  );
}

function ResponsiveLayout() {
  return (
    <div>
      <p className="mt-4">
        Kotak-kotak di bawah ini menggunakan <strong>Grid Layout</strong>.
      </p>

      <p>
        - <strong>grid-cols-1</strong> → 1 kolom (mobile)<br />
        - <strong>sm:grid-cols-2</strong> → 2 kolom (≥640px)<br />
        - <strong>md:grid-cols-3</strong> → 3 kolom (≥768px)<br />
        - <strong>lg:grid-cols-4</strong> → 4 kolom (≥1024px)<br />
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-blue-500 p-4">Box 1</div>
        <div className="bg-blue-500 p-4">Box 2</div>
        <div className="bg-blue-500 p-4">Box 3</div>
        <div className="bg-blue-500 p-4">Box 4</div>
      </div>
    </div>
  );
}

export default function ResponsiveDesign() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/50">
      
      <div className="text-center mb-16">
        <span className="text-indigo-400 font-bold tracking-[0.3em] uppercase text-[10px] mb-4 block">
          Materi Perkuliahan
        </span>
        <h2 className="text-4xl font-black text-white uppercase">
          Responsive & Grid <span className="text-indigo-500 italic">Lab</span>
        </h2>
      </div>

      {/* OPTIONAL (biar lebih rapi) */}
      <SectionTitle num="01" title="Responsive Text" />
      <ResponsiveText />

      <SectionTitle num="02" title="Responsive Width" />
      <ResponsiveWidth />

      <SectionTitle num="03" title="Responsive Grid" />
      <ResponsiveLayout />

    </div>
  );
}