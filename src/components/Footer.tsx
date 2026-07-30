import LucideIcon from "./LucideIcon";
import heroImage from "../assets/images/Hero_Nala.png";
import stickersImage from "../assets/images/nala_stickers_labels_1784167983123.jpg";
import acrylicImage from "../assets/images/nala_acrylic_sign_1784167996129.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const mapDirectionsUrl = "https://maps.app.goo.gl/KfAzzaKbonuJsxMT9";
  const waLink = "https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20ingin%20bertanya%20mengenai%20layanan%20cetak.%20Bisa%20dibantu%3F";

  const socialLinks = [
    { name: "Instagram", icon: "Send", url: "https://www.instagram.com/nalamedia.kra" },
    { name: "TikTok", icon: "Tv", url: "https://www.tiktok.com/@nalamedia.kra" },
    { name: "Facebook", icon: "Users", url: "https://www.facebook.com/share/1H6WnsCHE4/" },
    { name: "Google Maps", icon: "MapPin", url: mapDirectionsUrl }
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 relative">
      {/* Portfolio & Contact Strip (Geometric Balance Design) */}
      <div className="border-b border-slate-800 bg-slate-950 flex flex-col md:flex-row text-xs">
        <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-slate-800 p-8 flex flex-col justify-center">
          <div className="text-[10px] uppercase font-black text-cmyk-magenta tracking-widest mb-1 font-mono">Portofolio Terkini</div>
          <div className="text-slate-400">Lihat hasil produksi mesin terbaru kami setiap hari di workshop.</div>
        </div>
        <div className="flex-1 flex flex-col sm:flex-row overflow-hidden min-h-[140px]">
          <div className="flex-1 min-h-[120px] bg-slate-800 border-b sm:border-b-0 sm:border-r border-slate-800 relative group overflow-hidden">
            {/* Real placeholder or styled background with graphic overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <img src={heroImage} alt="Event Banner" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-end p-4 z-20">
              <span className="text-white font-bold text-xs uppercase tracking-wider">Event Banner</span>
            </div>
          </div>
          <div className="flex-1 min-h-[120px] bg-slate-800 border-b sm:border-b-0 sm:border-r border-slate-800 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <img src={stickersImage} alt="Food Label" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-end p-4 z-20">
              <span className="text-white font-bold text-xs uppercase tracking-wider">Food Label</span>
            </div>
          </div>
          <div className="flex-1 min-h-[120px] bg-slate-800 border-b sm:border-b-0 sm:border-r border-slate-800 relative group overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
            <img src={acrylicImage} alt="Corporate ID" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 flex items-end p-4 z-20">
              <span className="text-white font-bold text-xs uppercase tracking-wider">Corporate ID</span>
            </div>
          </div>
          <div className="w-full sm:w-1/4 bg-slate-900 flex items-center justify-center p-6 text-center border-b sm:border-b-0 border-slate-800">
            <div>
              <div className="text-2xl font-black text-white">+120</div>
              <div className="text-[9px] uppercase font-bold text-slate-500 tracking-widest">Kategori Lainnya</div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/5 bg-slate-950 text-white p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-800">
          <div className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-wider font-mono">Ready to Order?</div>
          <div className="flex items-center gap-2.5 text-xs font-bold text-white">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            Open: 08:00 - 01:00
          </div>
          <div className="mt-2 text-[11px] text-slate-500">Karanganyar, Jawa Tengah</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex flex-col">
              <span className="font-display font-black text-2xl tracking-tight text-white leading-none">
                NALA<span className="text-cmyk-magenta">MEDIA</span>
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase font-bold leading-none mt-1">
                DIGITAL PRINTING
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              You Imagine it, We Make it Fast. Kami melayani cetak banner, stiker label kemasan, neon box, acrylic, sablon, dan berbagai macam perlengkapan promosi dengan pengerjaan cepat dan kualitas warna tajam CMYK premium.
            </p>

            {/* Social Media Link Grid */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 bg-slate-800 hover:bg-cmyk-magenta hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 shadow-md text-slate-300"
                  title={social.name}
                  id={`footer-social-${social.name.toLowerCase()}`}
                >
                  <LucideIcon name={social.icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Fast Nav Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#portofolio" className="hover:text-cmyk-magenta transition-colors" id="footer-link-portfolio">Portofolio Hasil Cetak</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-cmyk-magenta transition-colors" id="footer-link-services">Layanan & Produk</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-cmyk-magenta transition-colors" id="footer-link-benefits">Mengapa Memilih Kami</a>
              </li>
              <li>
                <a href="#cara-pesan" className="hover:text-cmyk-magenta transition-colors" id="footer-link-howto">Cara Pemesanan Kilat</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-cmyk-magenta transition-colors" id="footer-link-location">Lokasi & Jam Kerja</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Kontak Customer Service
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <LucideIcon name="MapPin" size={16} className="text-cmyk-cyan shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  Jl. Prof. Moh. Yamin, Cerbonan, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57711
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <LucideIcon name="Phone" size={16} className="text-emerald-500 shrink-0" />
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +62 813-9872-7722 (WA Chat)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <LucideIcon name="Mail" size={16} className="text-cmyk-magenta shrink-0" />
                <a href="mailto:nalamedia.kra@gmail.com" className="hover:text-white transition-colors">
                  nalamedia.kra@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <LucideIcon name="Clock" size={16} className="text-cmyk-yellow shrink-0" />
                <span>Senin - Sabtu: 08:00 - 01:00 WIB | (Minggu dan Tanggal Merah Tutup)</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom copyright details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {currentYear} Nala Media Digital Printing. All Rights Reserved.</p>
          <div className="flex gap-4">
            <span>Designed in CMYK Slate</span>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-white transition-colors" id="footer-back-to-top">Back to Top ↑</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
