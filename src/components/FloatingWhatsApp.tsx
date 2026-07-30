import { useState, useEffect } from "react";
import LucideIcon from "./LucideIcon";

export default function FloatingWhatsApp() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    // Show attention-grabbing chat bubble after 3 seconds
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const waLink = "https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20tertarik%20untuk%20tanya%20dan%20memesan%20produk%20cetak.%20Bisa%20dibantu%3F";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Attention-grabbing Chat Bubble */}
      {showBubble && (
        <div className="mb-3 max-w-xs bg-white text-slate-800 p-3.5 rounded-2xl shadow-2xl border border-slate-100 flex items-start gap-2.5 animate-float pointer-events-auto relative">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute top-1.5 right-1.5 text-slate-400 hover:text-slate-600 p-0.5 rounded-full hover:bg-slate-50 transition"
            aria-label="Tutup pesan"
            id="wa-bubble-close"
          >
            <LucideIcon name="X" size={14} />
          </button>
          
          <div className="bg-emerald-100 p-2 rounded-full text-emerald-600 shrink-0 mt-0.5">
            <LucideIcon name="MessageSquare" size={16} />
          </div>
          
          <div className="pr-4">
            <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1">
              Admin Nala Media <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping inline-block"></span>
            </h4>
            <p className="text-[11px] text-slate-500 leading-relaxed mt-1">
              Halo! Kirim konsep Anda atau tanya-tanya harga & bahan gratis lewat WA kami. 💬
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1.5 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 hover:text-emerald-700 transition"
              id="wa-bubble-cta"
            >
              Hubungi Sekarang <LucideIcon name="ArrowRight" size={10} />
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(16,185,129,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group pointer-events-auto relative"
        aria-label="Hubungi kami lewat WhatsApp"
        id="wa-sticky-floating"
      >
        <div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-25 group-hover:opacity-0 transition-opacity"></div>
        {/* Customized Elegant SVG for WhatsApp icon, since we want a realistic brand look */}
        <svg 
          className="w-8 h-8 fill-current transition-transform duration-300 group-hover:rotate-6" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
        </svg>
      </a>
    </div>
  );
}
