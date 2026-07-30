import LucideIcon from "./LucideIcon";
import heroImage from "../assets/images/Hero_Nala.png";

export default function Hero() {
  const waLink = "https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20tertarik%20untuk%20memesan%20produk%20cetak.%20Bisa%20minta%20info%20pricelist%3F";

  const trustBadges = [
    { icon: "CheckCircle", label: "Ribuan Pesanan Selesai" },
    { icon: "Cpu", label: "Mesin Produksi Lengkap" },
    { icon: "Zap", label: "Pengerjaan Cepat / Kilat" },
    { icon: "ShieldCheck", label: "Garansi Hasil Berkualitas" },
  ];

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background Decorative Abstract CMYK Blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cmyk-cyan/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-cmyk-magenta/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-cmyk-yellow/5 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="relative pl-6 mb-4 self-center lg:self-start text-left">
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-4 h-[4px] bg-cmyk-magenta"></div>
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-slate-500">
                Pusat Digital Printing & Percetakan Karanganyar
              </h2>
            </div>

            {/* Headline */}
            <h1 className="font-display font-black text-3xl sm:text-5xl lg:text-5xl text-slate-900 tracking-tight leading-[1.1] text-center lg:text-left">
              Digital Printing Karanganyar<br className="hidden sm:inline" />
              <span className="text-cmyk-magenta"> Cetak Banner & Stiker Kilat</span>
            </h1>

            {/* Catchphrase & Subheadline */}
            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-cmyk-cyan text-center lg:text-left">
              "You Imagine It, We Make It Fast"
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Jasa percetakan &amp; <strong>cetak banner kilat bisa ditunggu terdekat di Karanganyar</strong>. Melayani cetak spanduk flexi, stiker vinyl, neon box, huruf timbul, sablon kaos DTF hingga merchandise di Karanganyar, Solo, Surakarta, Sukoharjo, Boyolali &amp; Wonogiri.
            </p>

            {/* Stats (Geometric Balance Grid) */}
            <div className="grid grid-cols-2 gap-6 mt-8 mb-8 max-w-sm mx-auto lg:mx-0">
              <div className="border-l-4 border-cmyk-cyan pl-4 py-1 text-left">
                <div className="text-2xl font-bold text-slate-900">5,000+</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Order Selesai</div>
              </div>
              <div className="border-l-4 border-cmyk-yellow pl-4 py-1 text-left">
                <div className="text-2xl font-bold text-slate-900 font-mono">INSTANT</div>
                <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Pengerjaan</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-cmyk-magenta transition-all duration-300 shadow-lg hover:-translate-y-0.5 active:translate-y-0 group"
                id="hero-cta-wa"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
                <span>WhatsApp Chat</span>
              </a>
              
              <a
                href="#portofolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300"
                id="hero-cta-portfolio"
              >
                <span>Lihat Hasil Cetak</span>
                <LucideIcon name="ChevronRight" size={16} />
              </a>
            </div>

            {/* Trust Indicator Grid */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200/60 max-w-xl mx-auto lg:mx-0">
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-1.5">
                  <div className="text-cmyk-magenta bg-rose-50 p-2 rounded-xl">
                    <LucideIcon name={badge.icon} size={20} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-slate-700 leading-tight">
                    {badge.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Image/Mockup Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* CMYK Accent Rings Behind the Mockup */}
            <div className="absolute -inset-4 border-[3px] border-dashed border-cmyk-cyan/30 rounded-3xl animate-spin-slow pointer-events-none"></div>
            <div className="absolute -inset-1 border border-cmyk-magenta/20 rounded-3xl pointer-events-none"></div>
            
            {/* Real Showcase Image Container */}
            <div className="relative bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 max-w-md overflow-hidden group">
              <div className="absolute top-3 left-3 bg-cmyk-key/85 backdrop-blur-md text-white text-[10px] font-mono py-1 px-2.5 rounded-lg font-bold uppercase tracking-wider z-10 flex items-center gap-1.5 shadow-md">
                <span className="w-1.5 h-1.5 bg-cmyk-cyan rounded-full animate-pulse"></span>
                <span>Active Workshop</span>
              </div>
              
              <img
                src={heroImage}
                alt="Nala Media Digital Printing Workshop"
                referrerPolicy="no-referrer"
                className="w-full h-[320px] sm:h-[400px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
              />

              {/* Decorative Corner Tabs reminiscent of print markers */}
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-cmyk-magenta rounded-tr-xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-cmyk-cyan rounded-bl-xl pointer-events-none"></div>
              
              {/* Trust Badge overlay */}
              <div className="absolute bottom-6 right-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-xl flex items-center gap-3">
                <div className="bg-cmyk-magenta p-2.5 rounded-full text-white">
                  <LucideIcon name="Award" size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Hasil Cetakan Tajam & Pekat</h4>
                  <p className="text-[10px] text-slate-500">Kalibrasi CMYK Professional</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
