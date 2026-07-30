import { useState } from "react";
import { TESTIMONIALS } from "../data";
import LucideIcon from "./LucideIcon";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section id="testimoni" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-cmyk-magenta tracking-[0.2em] uppercase font-mono mb-3">
            Testimoni Pelanggan
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Apa Kata Mereka Tentang Nala Media?
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-500">
            Dengarkan langsung pengalaman dari ratusan pelanggan setia yang telah memesan berbagai macam produk cetak digital di tempat kami.
          </p>
        </div>

        {/* Testimonial Active Display Card Container */}
        <div className="max-w-4xl mx-auto relative px-4 sm:px-12">
          
          {/* Main Card with Shadow */}
          <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl relative overflow-hidden transition-all duration-500">
            {/* Massive Quote Background Accent */}
            <span className="absolute -top-6 -left-4 text-[120px] font-serif text-cmyk-magenta/5 leading-none pointer-events-none">
              “
            </span>
            
            <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-8">
              
              {/* Profile Avatar Frame */}
              <div className="shrink-0 relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-cmyk-magenta bg-slate-200">
                  <img
                    src={TESTIMONIALS[activeIndex].avatar}
                    alt={TESTIMONIALS[activeIndex].name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Visual register crosshair under avatar */}
                <div className="absolute -bottom-2 -right-2 bg-cmyk-cyan text-slate-900 p-1.5 rounded-full shadow-md">
                  <LucideIcon name="CheckCircle" size={14} className="text-emerald-600" />
                </div>
              </div>

              {/* Review Text */}
              <div className="flex-1 text-center sm:text-left">
                {/* Rating Stars */}
                <div className="flex justify-center sm:justify-start gap-1 mb-4 text-amber-400">
                  {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                    <span key={i}>
                      <LucideIcon name="Star" size={16} className="fill-current" />
                    </span>
                  ))}
                </div>

                {/* Review Text Body */}
                <blockquote className="text-sm sm:text-base md:text-lg text-slate-700 font-medium leading-relaxed italic">
                  "{TESTIMONIALS[activeIndex].text}"
                </blockquote>

                {/* Author Info */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/60">
                  <div>
                    <h4 className="font-display font-black text-slate-900 text-base">
                      {TESTIMONIALS[activeIndex].name}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {TESTIMONIALS[activeIndex].role}
                    </p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-slate-400 bg-slate-200/50 px-2.5 py-1 rounded-md shrink-0">
                    {TESTIMONIALS[activeIndex].date}
                  </span>
                </div>

              </div>
            </div>
          </div>

          {/* Carousel Left/Right navigation buttons outside card */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 hidden sm:flex justify-between px-2 pointer-events-none z-25">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-2xl bg-white border border-slate-100 hover:border-cmyk-magenta text-slate-500 hover:text-cmyk-magenta shadow-md hover:shadow-lg transition-all duration-300 pointer-events-auto active:scale-95"
              aria-label="Testimoni sebelumnya"
              id="testimonial-prev-btn"
            >
              <LucideIcon name="ChevronLeft" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-2xl bg-white border border-slate-100 hover:border-cmyk-magenta text-slate-500 hover:text-cmyk-magenta shadow-md hover:shadow-lg transition-all duration-300 pointer-events-auto active:scale-95"
              aria-label="Testimoni berikutnya"
              id="testimonial-next-btn"
            >
              <LucideIcon name="ChevronRight" size={20} />
            </button>
          </div>

          {/* Carousel navigation controls for mobile (below card) */}
          <div className="flex sm:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs"
              id="testimonial-mobile-prev"
            >
              Sebelumnya
            </button>
            <button
              onClick={nextTestimonial}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs"
              id="testimonial-mobile-next"
            >
              Berikutnya
            </button>
          </div>

          {/* Indicator dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-cmyk-magenta"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Lihat slide ${index + 1}`}
                id={`testimonial-dot-${index}`}
              ></button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
