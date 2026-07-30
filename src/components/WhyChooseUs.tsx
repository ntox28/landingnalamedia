import { BENEFITS } from "../data";
import LucideIcon from "./LucideIcon";

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background grid representing printing alignments */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-cmyk-magenta tracking-[0.2em] uppercase font-mono mb-3">
            Keunggulan Kami
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Mengapa NALA MEDIA Selalu Jadi Pilihan Utama?
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-500">
            Kami mengutamakan kesempurnaan di setiap hasil cetakan. Inilah alasan mengapa ratusan pelaku bisnis, korporat, hingga EO mempercayakan promosi mereka kepada kami.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white/65 backdrop-blur-sm rounded-2xl p-7 sm:p-8 border border-slate-200/80 hover:border-cmyk-magenta/20 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300"
              id={`benefit-card-${index}`}
            >
              {/* Decorative Corner Align Marks representing print register marks */}
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-slate-200 group-hover:border-cmyk-magenta transition-colors rounded-tr-xl"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-slate-200 group-hover:border-cmyk-cyan transition-colors rounded-bl-xl"></div>

              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-700 group-hover:bg-rose-50 group-hover:text-cmyk-magenta transition-colors flex items-center justify-center mb-6">
                <LucideIcon name={benefit.iconName} size={24} />
              </div>

              {/* Title & Desc */}
              <h3 className="font-display font-bold text-lg text-slate-900 mb-3 group-hover:text-cmyk-magenta transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Big Trust Highlight Banner */}
        <div className="mt-20 relative rounded-3xl bg-cmyk-key text-white p-8 sm:p-12 overflow-hidden shadow-2xl">
          {/* Cyan/Magenta accent background circles */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-cmyk-magenta/20 rounded-full filter blur-2xl"></div>
          <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-cmyk-cyan/25 rounded-full filter blur-2xl"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 text-center lg:text-left">
              <span className="font-mono text-xs text-cmyk-cyan font-bold tracking-widest uppercase bg-white/5 px-3.5 py-1.5 rounded-full border border-white/10">
                100% GARANSI KUALITAS & KEPUASAN
              </span>
              <h3 className="font-display font-black text-2xl sm:text-4xl tracking-tight mt-6 leading-tight">
                Cetakan Kurang Tajam, Salah Ukuran, atau Cacat Produksi? Kami Ganti Baru!
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                Bagi kami, kepercayaan pelanggan adalah nomor satu. Setiap pesanan melewati kontrol kualitas yang ketat sebelum dikemas. Jika terjadi kesalahan produksi dari pihak kami, kami siap cetak ulang sepenuhnya secara gratis.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end shrink-0">
              <a
                href="https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20ingin%20konsultasi%20mengenai%20garansi%20cetak%20dan%20memesan%20produk%20digital%20printing."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-cmyk-key hover:bg-cmyk-cyan hover:text-cmyk-key font-bold text-sm rounded-2xl shadow-xl transition-all duration-300 hover:scale-105"
                id="benefit-banner-cta"
              >
                <LucideIcon name="ShieldCheck" size={20} className="text-emerald-500" />
                <span>Konsultasi Bebas Risiko</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
