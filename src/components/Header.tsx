import { useState, useEffect } from "react";
import LucideIcon from "./LucideIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Portofolio", href: "#portofolio" },
    { label: "Layanan", href: "#layanan" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Cara Pesan", href: "#cara-pesan" },
    { label: "Lokasi", href: "#lokasi" }
  ];

  const waLink = "https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20ingin%20konsultasi%20mengenai%20produk%20cetak%20digital.%20Bisa%20dibantu%3F";

  return (
    <>
      {/* Decorative CMYK Top Border Bar */}
      <div className="fixed top-0 left-0 right-0 h-[4px] z-50 flex">
        <div className="h-full w-1/4 bg-cmyk-cyan"></div>
        <div className="h-full w-1/4 bg-cmyk-magenta"></div>
        <div className="h-full w-1/4 bg-cmyk-yellow"></div>
        <div className="h-full w-1/4 bg-cmyk-key"></div>
      </div>

      <header
        className={`fixed top-[4px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3.5 border-b border-slate-100"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Brand */}
            <a href="#" className="flex items-center gap-3 group" id="nav-logo">
              {/* Geometric Balance Color Bars */}
              <div className="flex gap-0.5 shrink-0">
                <div className="w-2 sm:w-2.5 h-7 sm:h-8 bg-cmyk-cyan"></div>
                <div className="w-2 sm:w-2.5 h-7 sm:h-8 bg-cmyk-magenta"></div>
                <div className="w-2 sm:w-2.5 h-7 sm:h-8 bg-cmyk-yellow"></div>
                <div className="w-2 sm:w-2.5 h-7 sm:h-8 bg-cmyk-key"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-lg sm:text-xl tracking-tighter text-slate-900 leading-none flex items-center">
                  NALA MEDIA
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase font-bold leading-none mt-1">
                  DIGITAL PRINTING
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="font-medium text-slate-600 hover:text-cmyk-magenta text-xs sm:text-sm transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-cmyk-magenta after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200"
                  id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4 sm:gap-6">
              {/* Production Center Info (Geometric Balance Detail) */}
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[9px] uppercase tracking-widest text-slate-400 font-bold">Pusat Produksi</span>
                <span className="text-xs font-semibold text-slate-800">Jl. M.Yamin Cerbonan, Karanganyar</span>
              </div>
              <div className="hidden sm:block h-6 w-px bg-slate-200"></div>

              {/* CTA Button */}
              <div className="hidden sm:flex items-center">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-cmyk-magenta hover:bg-cmyk-magenta-hover transition-all duration-300 shadow-md hover:shadow-lg shadow-rose-200/50 hover:-translate-y-0.5 active:translate-y-0"
                  id="header-cta"
                >
                  <span>WhatsApp Chat</span>
                  <LucideIcon name="Send" size={14} />
                </a>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-cmyk-magenta transition focus:outline-none"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle"
              >
                <LucideIcon name={mobileMenuOpen ? "X" : "Menu"} size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 absolute top-full left-0 right-0 py-4 shadow-xl animate-fade-in">
            <div className="px-4 space-y-3 flex flex-col">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-semibold text-slate-700 hover:text-cmyk-magenta text-base py-2 transition-colors border-b border-slate-50 last:border-none"
                  id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-cmyk-magenta hover:bg-cmyk-magenta-hover transition-colors shadow-md"
                  id="mobile-header-cta"
                >
                  <LucideIcon name="MessageSquare" size={16} />
                  <span>Cetak via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
