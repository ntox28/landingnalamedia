import { ORDER_STEPS } from "../data";
import LucideIcon from "./LucideIcon";

export default function HowToOrder() {
  const waLink = "https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20ingin%20memesan%20cetakan%20lewat%20WhatsApp.%20Bagaimana%20prosedurnya%3F";

  return (
    <section id="cara-pesan" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-cmyk-magenta tracking-[0.2em] uppercase font-mono mb-3">
            Cara Pemesanan
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            5 Langkah Mudah Memesan Cetakan dari Rumah
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-500">
            Tidak perlu macet di jalan atau antre panjang. Semua proses pemesanan hingga pengiriman bisa dikoordinasikan secara praktis lewat chat WhatsApp.
          </p>
        </div>

        {/* Ordering Steps Timeline Layout */}
        <div className="relative mt-8">
          
          {/* Horizontal Connecting Bar (Desktop only) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[3px] bg-slate-200 -translate-y-[80px] z-0">
            {/* Animated colorful progress filler representing CMYK flow */}
            <div className="w-full h-full bg-gradient-to-r from-cmyk-cyan via-cmyk-magenta to-cmyk-yellow rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {ORDER_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
                id={`order-step-${step.step}`}
              >
                {/* Step badge overlay */}
                <div className="absolute top-4 right-4 w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-mono text-xs font-bold group-hover:bg-cmyk-magenta group-hover:text-white transition-all duration-300">
                  {step.step}
                </div>

                <div>
                  {/* Step icon with color variations based on step index */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:scale-105 ${
                    step.step === 1 ? "bg-emerald-50 text-emerald-500" :
                    step.step === 2 ? "bg-cyan-50 text-cmyk-cyan-dark" :
                    step.step === 3 ? "bg-rose-50 text-cmyk-magenta" :
                    step.step === 4 ? "bg-amber-50 text-amber-500" :
                    "bg-blue-50 text-blue-500"
                  }`}>
                    <LucideIcon name={step.iconName} size={28} />
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight mb-2.5">
                    {step.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Additional indicator footer */}
                <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold">
                  <span>STEP 0{step.step}</span>
                  <span className="text-cmyk-magenta opacity-0 group-hover:opacity-100 transition-opacity">
                    READY
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA underneath Stepper to prompt actions */}
        <div className="mt-16 text-center">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            id="order-steps-wa-cta"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.706 1.458h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            <span>Hubungi WhatsApp Sekarang</span>
          </a>
        </div>

      </div>
    </section>
  );
}
