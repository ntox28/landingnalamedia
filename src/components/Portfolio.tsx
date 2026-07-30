import React, { useState } from "react";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_ITEMS } from "../data";
import LucideIcon from "./LucideIcon";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  // Filter items based on selected category tab
  const filteredItems = activeCategory === "Semua"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => {
        // Handle special meta-categories like "Indoor" or "Outdoor"
        if (activeCategory === "Indoor") {
          return ["Label", "Sticker", "Banner", "Foto"].includes(item.category);
        }
        if (activeCategory === "Outdoor") {
          return ["Neon Box", "Spanduk", "Acrylic"].includes(item.category);
        }
        return item.category === activeCategory;
      });

  const openLightbox = (id: string) => {
    const index = PORTFOLIO_ITEMS.findIndex(item => item.id === id);
    if (index !== -1) {
      setSelectedItemIndex(index);
    }
  };

  const closeLightbox = () => {
    setSelectedItemIndex(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      const nextIndex = (selectedItemIndex + 1) % PORTFOLIO_ITEMS.length;
      setSelectedItemIndex(nextIndex);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedItemIndex !== null) {
      const prevIndex = (selectedItemIndex - 1 + PORTFOLIO_ITEMS.length) % PORTFOLIO_ITEMS.length;
      setSelectedItemIndex(prevIndex);
    }
  };

  const getWaLinkForItem = (title: string) => {
    const text = `Halo Nala Media, saya melihat portofolio "${title}" di website Anda dan ingin menanyakan estimasi harga serta bahan untuk produk sejenis. Bisa dibantu?`;
    return `https://wa.me/6281398727722?text=${encodeURIComponent(text)}`;
  };

  const selectedItem = selectedItemIndex !== null ? PORTFOLIO_ITEMS[selectedItemIndex] : null;

  return (
    <section id="portofolio" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-xs font-bold text-cmyk-magenta tracking-[0.2em] uppercase font-mono mb-3">
            Katalog Portofolio
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Bukti Kualitas Cetak Premium Nala Media
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-500">
            Kami bangga memperlihatkan hasil kerja nyata kami. Klik pada gambar untuk melihat spesifikasi detail bahan cetak dan konsultasi harga langsung via WhatsApp.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-start md:justify-center overflow-x-auto gap-2 pb-6 mb-10 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {PORTFOLIO_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-cmyk-magenta text-white border-cmyk-magenta shadow-md shadow-rose-100"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
              id={`portfolio-tab-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Masonry Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
            <LucideIcon name="Printer" className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-500 font-medium">Belum ada portofolio di kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item.id)}
                className="group cursor-pointer bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                id={`portfolio-card-${item.id}`}
              >
                {/* Image Container with Hover zoom */}
                <div className="relative overflow-hidden aspect-4/3 bg-slate-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slate-800 text-[10px] font-bold font-mono px-2.5 py-1 rounded-full shadow-sm">
                    {item.category}
                  </div>
                  
                  {/* Hover visual cue */}
                  <div className="absolute inset-0 bg-cmyk-key/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/95 backdrop-blur-sm p-3.5 rounded-full text-cmyk-magenta shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <LucideIcon name="Sparkles" size={20} />
                    </div>
                  </div>
                </div>

                {/* Info block */}
                <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-cmyk-magenta transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold font-mono text-slate-400">
                      NALA PRINT CO.
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-cmyk-magenta hover:text-cmyk-magenta-hover transition-colors">
                      Spesifikasi & Harga <LucideIcon name="ChevronRight" size={14} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CRO Floating Hint above Portfolio section footer */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="flex items-center gap-3.5 text-left">
            <div className="bg-cmyk-cyan/10 p-3 rounded-full text-cmyk-cyan-dark shrink-0">
              <LucideIcon name="ShieldCheck" size={24} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900">Butuh Contoh Cetak Fisik / Sample Bahan?</h4>
              <p className="text-xs text-slate-500 mt-1">Kami menyediakan katalog sample bahan (sticker, flexi, albatros) gratis untuk pemesanan instansi.</p>
            </div>
          </div>
          <a
            href="https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20ingin%20minta%20info%20mengenai%20sample%20bahan%20cetak%20dan%20pricelist%20terbaru."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-cmyk-key hover:bg-cmyk-magenta transition-all duration-300"
            id="portfolio-sample-cta"
          >
            <LucideIcon name="MessageSquare" size={14} />
            <span>Minta Katalog Bahan</span>
          </a>
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {selectedItemIndex !== null && selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-cmyk-key/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
          id="portfolio-lightbox"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all duration-200 z-55 cursor-pointer"
            aria-label="Tutup lightbox"
            id="lightbox-close"
          >
            <LucideIcon name="X" size={24} />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={showPrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-55 cursor-pointer"
            aria-label="Sebelumnya"
            id="lightbox-prev"
          >
            <LucideIcon name="ChevronLeft" size={24} />
          </button>
          <button
            onClick={showNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition z-55 cursor-pointer"
            aria-label="Berikutnya"
            id="lightbox-next"
          >
            <LucideIcon name="ChevronRight" size={24} />
          </button>

          {/* Lightbox Card Container */}
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-white/10 flex flex-col max-h-[90vh] md:max-h-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Main high-res Image */}
            <div className="relative aspect-16/10 bg-slate-900 max-h-[50vh] sm:max-h-[60vh] overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <span className="absolute top-4 left-4 bg-cmyk-magenta text-white text-[10px] font-bold font-mono px-3 py-1 rounded-full uppercase tracking-wider">
                {selectedItem.category}
              </span>
            </div>

            {/* Bottom Info Details */}
            <div className="p-6 sm:p-8 bg-white flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex-1">
                <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight">
                  {selectedItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-2.5 leading-relaxed">
                  {selectedItem.description}
                </p>
                <div className="flex gap-2.5 mt-4">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-100 py-1 px-2.5 rounded-md">
                    <LucideIcon name="Check" size={12} className="text-emerald-500" /> Hasil Real Produksi
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-100 py-1 px-2.5 rounded-md">
                    <LucideIcon name="Check" size={12} className="text-emerald-500" /> Warna Awet & Tajam
                  </span>
                </div>
              </div>

              {/* High prominence WhatsApp Button inside lightbox */}
              <a
                href={getWaLinkForItem(selectedItem.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-100 group"
                id="lightbox-wa-cta"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                <span>Tanya Cetak Desain Ini</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
