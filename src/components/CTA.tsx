import LucideIcon from "./LucideIcon";

export default function CTA() {
  const waLink = "https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20sudah%20melihat%20website%20Anda%20dan%20siap%20untuk%20memesan%20produk%20cetak.%20Bisa%20dibantu%20prosesnya%3F";

  return (
    <section className="relative py-28 overflow-hidden bg-cmyk-key text-white">
      {/* Decorative Cyan, Magenta and Yellow glowing blur blobs representing print inks */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cmyk-magenta/15 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-cmyk-cyan/15 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-cmyk-yellow/10 rounded-full filter blur-2xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Visual indicator crown */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-cmyk-cyan font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 bg-cmyk-cyan rounded-full animate-ping"></span>
          <span>You Imagine it, We Make it Fast</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-none max-w-4xl mx-auto">
          Siap Mencetak Kebutuhan Media Promosi Anda?
        </h2>

        {/* Supporting description */}
        <p className="mt-6 text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Diskusikan konsep Anda dengan desainer kami secara gratis! Kirim file Anda lewat WhatsApp, konfirmasi pesanan, dan kami akan memproduksi produk Anda dengan hasil cetak terbaik secepat kilat.
        </p>

        {/* Massive Conversion-optimized CTA WhatsApp Button */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 sm:px-10 py-5 rounded-2xl text-sm sm:text-base font-extrabold text-white bg-emerald-500 hover:bg-emerald-600 transition-all duration-300 shadow-[0_8px_30px_rgba(16,185,129,0.4)] hover:shadow-[0_10px_35px_rgba(16,185,129,0.5)] hover:-translate-y-1 active:translate-y-0 group"
            id="cta-wa-giant-btn"
          >
            <svg className="w-6 h-6 fill-current transition-transform duration-300 group-hover:rotate-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            <span>Hubungi WhatsApp CS (Fast Respon)</span>
          </a>
        </div>

        {/* Small trust rows underneath buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-8 text-xs text-slate-400 font-medium">
          <div className="flex items-center gap-2">
            <LucideIcon name="ShieldCheck" size={16} className="text-cmyk-cyan" />
            <span>Garansi Cetak Ulang Gratis</span>
          </div>
          <div className="flex items-center gap-2">
            <LucideIcon name="Clock" size={16} className="text-cmyk-magenta" />
            <span>Respon Cepat Kurang dari 5 Menit</span>
          </div>
          <div className="flex items-center gap-2">
            <LucideIcon name="CheckCircle" size={16} className="text-cmyk-yellow" />
            <span>Bisa Bayar via Bank Transfer / QRIS</span>
          </div>
        </div>

      </div>
    </section>
  );
}
