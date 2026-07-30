import { useState } from "react";
import { SERVICES } from "../data";
import LucideIcon from "./LucideIcon";

export default function Services() {
  const [searchQuery, setSearchQuery] = useState("");

  const otherServices = [
    "X Banner",
    "Roll Up Banner",
    "Spanduk Kain",
    "Stiker Die-Cut",
    "Stiker Transparan",
    "Stempel Flash",
    "Kartu Nama Premium",
    "Brosur Lipat",
    "Undangan Pernikahan",
    "Kalender Meja & Dinding",
    "ID Card PVC",
    "Tali Lanyard",
    "Tumbler Grafir Laser",
    "Mug Custom",
    "Pin & Gantungan Kunci",
    "Buku Agenda",
    "Laminasi Doff/Glossy",
    "Cutting Sticker",
    "Print Flatbed UV Acrylic"
  ];

  const filteredServices = SERVICES.filter(
    (service) =>
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getWaLinkForService = (title: string) => {
    const text = `Halo Nala Media, saya ingin bertanya mengenai estimasi harga, bahan, dan lama pengerjaan untuk produk cetak "${title}". Bisa diinfokan?`;
    return `https://wa.me/6281398727722?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="layanan" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Interactive Search Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl text-left">
            <h2 className="text-xs font-bold text-cmyk-magenta tracking-[0.2em] uppercase font-mono mb-3">
              Layanan & Produk Percetakan
            </h2>
            <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Layanan Digital Printing & Percetakan Karanganyar
            </p>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              Pusat jasa <strong>percetakan Karanganyar</strong> terlengkap. Melayani <strong>cetak banner Karanganyar</strong>, <strong>cetak stiker Karanganyar</strong>, <strong>cetak spanduk Karanganyar</strong>, neon box acrylic, huruf timbul, stiker vinyl waterproof, roll banner, x-banner, branding toko, cetak foto, cetak brosur, merchandise, hingga sablon kaos DTF.
            </p>
          </div>
          
          {/* Real-time search filter */}
          <div className="w-full md:w-80 relative shrink-0">
            <input
              type="text"
              placeholder="Cari produk cetak (cth: Stiker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white text-slate-800 text-xs font-bold px-4 py-3.5 pl-10 rounded-xl border border-slate-200/80 shadow-inner focus:outline-none focus:border-cmyk-magenta focus:ring-1 focus:ring-cmyk-magenta"
              id="services-search-input"
            />
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
              <LucideIcon name="Printer" size={16} />
            </div>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                aria-label="Bersihkan pencarian"
                id="services-search-clear"
              >
                <LucideIcon name="X" size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Dynamic Services Cards Grid */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100">
            <LucideIcon name="Printer" className="mx-auto text-slate-300 mb-4" size={48} />
            <p className="text-slate-500 font-medium">Layanan yang Anda cari tidak ditemukan. Silakan hubungi WA untuk konsultasi custom!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredServices.map((service) => {
              // Custom styles mapping (Geometric Balance Theme)
              let cardBg = "bg-white border border-slate-100 shadow-sm";
              let iconBg = "bg-slate-50 text-slate-700";
              let titleColor = "text-slate-900";
              let descColor = "text-slate-500";
              let btnClass = "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900";
              let checkIconColor = "text-cmyk-magenta";

              if (service.id === "s1") {
                cardBg = "bg-white border-t-4 border-t-cmyk-cyan border-x border-b border-slate-100 shadow-sm";
                iconBg = "bg-cyan-50 text-cmyk-cyan";
              } else if (service.id === "s2") {
                cardBg = "bg-cmyk-magenta text-white border-none shadow-xl";
                iconBg = "bg-white/20 text-white";
                titleColor = "text-white";
                descColor = "text-rose-100";
                btnClass = "bg-white text-cmyk-magenta hover:bg-slate-900 hover:text-white";
                checkIconColor = "text-white";
              } else if (service.id === "s3") {
                cardBg = "bg-white border-t-4 border-t-cmyk-yellow border-x border-b border-slate-100 shadow-sm";
                iconBg = "bg-yellow-50 text-amber-500";
              } else if (service.id === "s4") {
                cardBg = "bg-slate-900 text-white border-none shadow-lg";
                iconBg = "bg-white/10 text-white";
                titleColor = "text-white";
                descColor = "text-slate-300";
                btnClass = "bg-cmyk-cyan text-slate-900 hover:bg-white hover:text-slate-900";
                checkIconColor = "text-cmyk-cyan";
              }

              return (
                <div
                  key={service.id}
                  className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between ${cardBg}`}
                  id={`service-card-${service.id}`}
                >
                  {/* Popular highlight tag */}
                  {service.popular && service.id !== "s2" && (
                    <span className="absolute -top-3 right-6 bg-cmyk-magenta text-white font-mono font-bold text-[9px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md shadow-rose-100">
                      Sangat Laris
                    </span>
                  )}

                  {/* Content top */}
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${iconBg}`}>
                      <LucideIcon name={service.iconName} size={24} />
                    </div>
                    
                    <h3 className={`font-display font-bold text-lg tracking-tight mb-3 ${titleColor}`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${descColor}`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Features checklists and action buttons */}
                  <div>
                    <ul className={`space-y-2 mb-6 border-t pt-4 ${service.id === "s2" || service.id === "s4" ? "border-white/10" : "border-slate-100"}`}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-medium">
                          <span className={checkIconColor}>
                            <LucideIcon name="Check" size={14} />
                          </span>
                          <span className={service.id === "s2" || service.id === "s4" ? "text-slate-200" : "text-slate-600"}>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={getWaLinkForService(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold transition-all duration-300 ${btnClass}`}
                      id={`service-card-cta-${service.id}`}
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                      </svg>
                      <span>Cek Harga & Bahan</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* SEO-Friendly Minor Services Grid */}
        <div className="mt-20 pt-16 border-t border-slate-200/60 text-center">
          <h4 className="font-display font-bold text-lg text-slate-800 mb-8 tracking-tight">
            Produk Cetak & Finishing Lainnya yang Kami Sediakan:
          </h4>
          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {otherServices.map((service, index) => (
              <a
                key={index}
                href={`https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20apakah%20bisa%20cetak%20dan%20memesan%20"${service}"%3F%20Berapa%20minimal%20order%20dan%20harganya%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 bg-white hover:bg-rose-50 text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-cmyk-magenta rounded-xl border border-slate-200/50 hover:border-cmyk-magenta/30 transition-all duration-300 flex items-center gap-1.5 shadow-sm"
                id={`other-service-tag-${index}`}
              >
                <span className="w-1.5 h-1.5 bg-cmyk-cyan rounded-full"></span>
                <span>{service}</span>
                <LucideIcon name="ExternalLink" size={10} className="opacity-40" />
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
