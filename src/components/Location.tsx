import LucideIcon from "./LucideIcon";

export default function Location() {
  const mapEmbedUrl = "https://maps.google.com/maps?q=Jl.%20Prof.%20Moh.%20Yamin,%20Cerbonan,%20Karanganyar&t=&z=16&ie=UTF8&iwloc=&output=embed";
  const mapDirectionsUrl = "https://maps.app.goo.gl/KfAzzaKbonuJsxMT9";
  const waNumber = "+62 813-9872-7722";
  const waLink = "https://wa.me/6281398727722?text=Halo%20Nala%20Media%2C%20saya%20ingin%20tahu%20rute%20lokasi%20atau%20alamat%20lengkap%20workshop.%20Bisa%20diinfokan%3F";

  const contactInfo = [
    {
      icon: "MapPin",
      title: "Alamat Workshop",
      details: "Jl. Prof. Moh. Yamin, Cerbonan, Tegalgede, Kec. Karanganyar, Kabupaten Karanganyar, Jawa Tengah 57711",
      ctaLabel: "Petunjuk Rute Google Maps",
      ctaLink: mapDirectionsUrl
    },
    {
      icon: "Clock",
      title: "Jam Operasional",
      details: "Senin - Sabtu: 08.00 - 01.00 WIB | (Minggu dan Tanggal Merah Tutup)",
      ctaLabel: "Tanya Status Antrean",
      ctaLink: waLink
    },
    {
      icon: "Phone",
      title: "WhatsApp Customer Service",
      details: waNumber,
      ctaLabel: "Chat Admin WA Sekarang",
      ctaLink: waLink
    }
  ];

  return (
    <section id="lokasi" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-cmyk-magenta tracking-[0.2em] uppercase font-mono mb-3">
            Lokasi Percetakan Terdekat
          </h2>
          <p className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
            Digital Printing Terdekat di Karanganyar
          </p>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Workshop <strong>Nala Media Digital Printing Karanganyar</strong> melayani cetak banner kilat bisa ditunggu &amp; konsultasi sampel bahan cetak fisik secara langsung. Siap kirim pesanan ke Karanganyar, Solo, Surakarta, Sukoharjo, Boyolali, Wonogiri &amp; area Jawa Tengah.
          </p>
        </div>

        {/* Info & Map Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex gap-4 hover:shadow-md transition-shadow"
                  id={`contact-card-${idx}`}
                >
                  <div className="bg-rose-50 text-cmyk-magenta p-3 rounded-xl shrink-0 h-12 w-12 flex items-center justify-center">
                    <LucideIcon name={info.icon} size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-sm sm:text-base text-slate-900">
                      {info.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
                      {info.details}
                    </p>
                    <a
                      href={info.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-cmyk-magenta hover:text-cmyk-magenta-hover transition-colors"
                      id={`contact-card-cta-${idx}`}
                    >
                      <span>{info.ctaLabel}</span>
                      <LucideIcon name="ChevronRight" size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Email & Social Fast Box */}
            <div className="bg-cmyk-key text-white p-6 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2.5 rounded-full text-cmyk-cyan">
                  <LucideIcon name="Mail" size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-300">Email Marketing / Order</h4>
                  <p className="text-xs sm:text-sm font-bold mt-0.5">nalamedia.kra@gmail.com</p>
                </div>
              </div>
              <a
                href="mailto:nalamedia.kra@gmail.com"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-xl text-white transition-colors"
                aria-label="Kirim email"
                id="contact-email-btn"
              >
                <LucideIcon name="ExternalLink" size={16} />
              </a>
            </div>
          </div>

          {/* Right Map Embed Column */}
          <div className="lg:col-span-7">
            <div className="bg-white p-3 rounded-3xl border border-slate-100 shadow-xl h-full min-h-[350px] lg:min-h-[450px] relative overflow-hidden group">
              
              {/* Embed Iframe */}
              <iframe
                title="Google Maps Location of Nala Media"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl grayscale contrast-125 focus:outline-none transition-all duration-700 group-hover:grayscale-0"
                id="maps-iframe"
              ></iframe>

              {/* Floating Maps CTA Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-100 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <LucideIcon name="MapPin" className="text-cmyk-magenta" size={20} />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Nala Media Printing Workshop</h4>
                    <p className="text-[10px] text-slate-500">Cerbonan, Karanganyar, Jawa Tengah</p>
                  </div>
                </div>
                <a
                  href={mapDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 bg-cmyk-key hover:bg-cmyk-magenta text-white font-bold text-xs rounded-lg transition-colors shadow-md"
                  id="maps-directions-cta"
                >
                  <span>Mulai Navigasi</span>
                  <LucideIcon name="ExternalLink" size={12} />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
