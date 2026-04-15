import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkListSearchFilter() {
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const _searchTerm = dataForm.searchTerm.toLowerCase();
  const filteredFrameworks = frameworkData.filter((f) => {
    const matchesSearch = f.name.toLowerCase().includes(_searchTerm) || f.description.toLowerCase().includes(_searchTerm);
    const matchesTag = dataForm.selectedTag ? f.tags.includes(dataForm.selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  const allTags = [...new Set(frameworkData.flatMap((f) => f.tags))];

  return (
    <div className="max-w-6xl mx-auto px-6 pt-16 pb-12">
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400 text-2xl">🌌</span>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Framework <span className="text-indigo-500">Explorer</span>
          </h1>
        </div>
        <p className="text-slate-400 font-medium">Temukan teknologi terbaik untuk membangun proyek impianmu.</p>
      </header>

      {/* Modern Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-12 p-2 bg-slate-800/30 border border-slate-700/50 rounded-2xl">
        <input
          type="text"
          name="searchTerm"
          placeholder="Cari framework..."
          className="flex-1 px-5 py-3 bg-transparent text-white outline-none placeholder-slate-500"
          value={dataForm.searchTerm}
          onChange={handleChange}
        />
        <select
          name="selectedTag"
          className="md:w-56 px-4 py-3 bg-slate-900/80 border border-slate-700/50 rounded-xl text-slate-300 outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
          value={dataForm.selectedTag}
          onChange={handleChange}
        >
          <option value="">Semua Kategori</option>
          {allTags.map((tag) => <option key={tag} value={tag} className="bg-slate-900">{tag}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredFrameworks.map((item) => (
          <div key={item.id} className="group bg-slate-800/20 border border-slate-700/50 p-8 rounded-[2.5rem] hover:bg-slate-800/40 hover:border-indigo-500/30 transition-all duration-500 flex flex-col">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold text-white tracking-tight group-hover:text-indigo-400 transition-colors">{item.name}</h2>
              <span className="text-[10px] font-black bg-slate-900 text-indigo-400 px-3 py-1 rounded-full border border-slate-700/50">{item.details.releaseYear}</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">{item.description}</p>
            <div className="flex flex-wrap gap-2 mb-10">
              {item.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-bold text-slate-300 bg-slate-700/30 px-3 py-1.5 rounded-lg border border-slate-600/30 italic">#{tag}</span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-700/50">
              <div className="text-xs">
                <span className="block text-slate-500 uppercase font-bold text-[9px] tracking-widest mb-1">Developer</span>
                <span className="text-slate-300 font-semibold">{item.details.developer}</span>
              </div>
              <a href={item.details.officialWebsite} target="_blank" rel="noreferrer" className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded-full transition-all shadow-lg shadow-indigo-900/40">Visit Site</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}