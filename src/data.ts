import { PortfolioItem, ServiceItem, BenefitItem, OrderingStep, TestimonialItem } from "./types";
import stickerImg from "./assets/images/nala_stickers_labels_1784167983123.jpg";
import acrylicImg from "./assets/images/nala_acrylic_sign_1784167996129.jpg";

export const PORTFOLIO_CATEGORIES = [
  "Semua",
  "Banner",
  "Sticker",
  "Label",
  "Spanduk",
  "Neon Box",
  "Acrylic",
  "Sablon",
  "Merchandise",
  "Foto",
  "Indoor",
  "Outdoor"
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "p1",
    title: "Stiker Label Makanan Premium",
    category: "Label",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/Label.png",
    description: "Cetak stiker label produk makanan dengan bahan glossy tahan air dan cutting presisi tinggi untuk kemasan UMKM."
  },
  {
    id: "p2",
    title: "Neon Box Acrylic Toko Modern",
    category: "Neon Box",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/Neon%20Box.png",
    description: "Pembuatan Neon Box bulat dan letter acrylic 3D dengan lampu LED super terang, awet untuk branding outdoor malam hari."
  },
  {
    id: "p3",
    title: "Banner & Spanduk Outdoor High-Res",
    category: "Spanduk",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/banner%20&%20spanduk.png",
    description: "Cetak banner outdoor flexi korea 440gr tebal, hasil warna tajam tidak luntur terkena terik matahari dan hujan deras."
  },
  {
    id: "p4",
    title: "Custom Sablon Kaos Komunitas",
    category: "Sablon",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/sablon%20kaos.png",
    description: "Sablon kaos DTF berkualitas tinggi dengan tinta premium. Elastis, tidak mudah retak, dan warna sangat solid."
  },
  {
    id: "p5",
    title: "Merchandise & Gift Set Perusahaan",
    category: "Merchandise",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/marchindise.png",
    description: "Cetak mug, tumbler, id card lanyard, dan pulpen custom untuk merchandise event atau merchandise corporate."
  },
  {
    id: "p6",
    title: "Roll Up Banner Promosi Indoor",
    category: "Banner",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/roll%20banner.png",
    description: "Roll Up Banner aluminium dengan bahan Albatros halus dan laminasi doff/glossy untuk keperluan exhibition dalam ruangan."
  },
  {
    id: "p7",
    title: "Signage Acrylic Huruf Timbul",
    category: "Acrylic",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/sign.png",
    description: "Display acrylic custom potong laser presisi tinggi dengan stand-off stainless untuk resepsionis kantor."
  },
  {
    id: "p8",
    title: "Stiker Vinyl Meteran Die-Cut",
    category: "Sticker",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/Sticker%20Vinyl.png",
    description: "Stiker die-cut vinyl waterproof meteran sangat cocok untuk stiker motor, laptop, maupun label botol minuman kekinian."
  },
  {
    id: "p9",
    title: "Cetak Foto Frame Canvas Premium",
    category: "Foto",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/Photo%20Frame.png",
    description: "Cetak foto resolusi tinggi di bahan canvas dengan frame kayu minimalis untuk pajangan ruang tamu elegan."
  },
  {
    id: "p10",
    title: "Spanduk Promosi Toko Kelontong",
    category: "Spanduk",
    image: "https://wqgbkwujfxdwlywxrjup.supabase.co/storage/v1/object/public/publik/banner%20toko.png",
    description: "Spanduk murah pengerjaan kilat 1 jam jadi, bahan flexi standard dengan ring mata ayam di setiap sudut."
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "s1",
    title: "Banner & Spanduk",
    description: "Cetak spanduk, baliho, X-Banner, Roll-Up Banner, dan Tripod Banner dengan bahan Flexi berkualitas tinggi (Cina, Korea, Jerman) maupun Albatros halus.",
    iconName: "FileImage",
    features: ["Bahan Tebal 280g - 440g", "Finishing Mata Ayam / Kolong", "Pengerjaan Kilat 1 Hari Jadi"],
    popular: true
  },
  {
    id: "s2",
    title: "Sticker & Label Kemasan",
    description: "Cetak stiker label makanan, kosmetik, sticker cutting, stiker transparan, stiker vinyl anti air, dan stiker chromo berperekat kuat dengan kiss-cut atau die-cut.",
    iconName: "Sparkles",
    features: ["Potong Laser Presisi", "Tahan Air & Sinar UV", "Pilihan Laminasi Doff/Glossy"]
  },
  {
    id: "s3",
    title: "Neon Box & Huruf Timbul",
    description: "Solusi branding luar ruang premium. Pembuatan Neon Box acrylic bulat/kotak, Huruf Timbul stainless, galvanis, LED backlite, dan reklame toko.",
    iconName: "Tv",
    features: ["Lampu LED Hemat Energi", "Rangka Besi Kokoh", "Tahan Cuaca Ekstrem"]
  },
  {
    id: "s4",
    title: "Acrylic Custom & Signage",
    description: "Pembuatan nomor rumah, gantungan kunci, plakat penghargaan, podium, sekat meja, serta signage petunjuk arah kantor berbahan acrylic laser cut.",
    iconName: "Layers",
    features: ["Potongan Laser Rapih", "Ketebalan 2mm - 10mm", "Print Flatbed UV Langsung"]
  },
  {
    id: "s5",
    title: "Stempel Otomatis / Flash",
    description: "Pembuatan stempel otomatis tanpa bantalan tinta, tersedia berbagai ukuran, bentuk (bulat, persegi, oval), dan warna tinta berkualitas tinggi.",
    iconName: "Stamp",
    features: ["Siap Pakai Tanpa Bantalan", "Bisa Custom Banyak Warna", "Cepat Jadi 30 Menit"]
  },
  {
    id: "s6",
    title: "Promosi & Alat Kantor",
    description: "Cetak Brosur lipat, Kartu Nama premium, Kalender meja/dinding, Buku agenda, Undangan pernikahan, Map perusahaan, ID Card PVC, dan Lanyard.",
    iconName: "Briefcase",
    features: ["Kertas Art Paper / Fancy", "Desain Custom Elegan", "Min. Order Sangat Terjangkau"]
  },
  {
    id: "s7",
    title: "Sablon Kaos & Merchandise",
    description: "Sablon kaos satuan atau partai besar dengan teknologi DTF/Plastisol, cetak tumbler termos grafir, mug keramik, pin, ganci, payung promosi.",
    iconName: "Shirt",
    features: ["Kaos Premium Cotton 30s", "Grafir Laser Presisi", "Hasil Cetak Awet & Tajam"]
  },
  {
    id: "s8",
    title: "Laminasi & Finishing",
    description: "Pelapisan hasil cetak dengan plastik tipis doff (matte) atau glossy untuk menambah daya tahan, kemewahan, dan anti gores pada kertas atau stiker Anda.",
    iconName: "Award",
    features: ["Laminasi Panas & Dingin", "Anti Air & Anti Luntur", "Menambah Kesan Mewah"]
  }
];

export const BENEFITS: BenefitItem[] = [
  {
    title: "Produksi Super Cepat",
    description: "Didukung mesin mutakhir berkecepatan tinggi, kami siap menyelesaikan pesanan banner Anda dalam hitungan jam tanpa mengorbankan kualitas.",
    iconName: "Zap"
  },
  {
    title: "Mesin Produksi Lengkap",
    description: "Kami memiliki mesin digital printing indoor, outdoor, flatbed UV, laser cutting, sablon DTF, hingga mesin cetak offset lengkap di workshop sendiri.",
    iconName: "Cpu"
  },
  {
    title: "Hasil Cetak Kualitas Tinggi",
    description: "Menggunakan tinta original dan kalibrasi warna CMYK profesional untuk hasil cetakan yang tajam, pekat, presisi, serta tahan lama.",
    iconName: "CheckCircle"
  },
  {
    title: "Harga Sangat Kompetitif",
    description: "Karena seluruh proses produksi dikerjakan di workshop sendiri tanpa perantara, kami bisa menawarkan harga terbaik untuk retail maupun partai.",
    iconName: "Percent"
  },
  {
    title: "Tim Desainer Profesional",
    description: "Belum punya desain? Jangan khawatir. Tim desainer kreatif kami siap membantu mewujudkan konsep promosi Anda menjadi layout siap cetak.",
    iconName: "Palette"
  },
  {
    title: "Pelayanan Ramah & Solutif",
    description: "Customer service kami berdedikasi tinggi untuk memberikan rekomendasi bahan, ukuran, dan jenis finishing terbaik sesuai kebutuhan anggaran Anda.",
    iconName: "HeartHandshake"
  }
];

export const ORDER_STEPS: OrderingStep[] = [
  {
    step: 1,
    title: "Hubungi Customer Service",
    description: "Klik tombol WhatsApp di website untuk langsung terhubung dengan admin cs Nala Media yang ramah dan responsif.",
    iconName: "MessageSquare"
  },
  {
    step: 2,
    title: "Konsultasi Bahan & Ukuran",
    description: "Diskusikan kebutuhan cetak Anda, jenis bahan (misal glossy/doff, ketebalan flexi), ukuran, jumlah pesanan, dan estimasi harga.",
    iconName: "Users"
  },
  {
    step: 3,
    title: "Kirim File Desain",
    description: "Kirimkan file desain Anda (PDF, CDR, PSD, AI, atau PNG resolusi tinggi) lewat WhatsApp atau email. Kami sediakan preview sebelum naik cetak.",
    iconName: "UploadCloud"
  },
  {
    step: 4,
    title: "Proses Produksi Kilat",
    description: "Setelah file disetujui dan pembayaran dikonfirmasi, pesanan langsung masuk antrean produksi menggunakan mesin berteknologi tinggi kami.",
    iconName: "Printer"
  },
  {
    step: 5,
    title: "Ambil di Toko / Pengiriman",
    description: "Pesanan yang sudah selesai dikemas rapi. Anda bisa mengambil langsung ke workshop kami atau kami kirim menggunakan kurir instan / ekspedisi.",
    iconName: "Truck"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Rian Prasetya",
    role: "Owner Kopi Khas Solo (Kuliner UMKM)",
    text: "Puas banget cetak stiker label botol di Nala Media! Hasil potongannya rapi banget, tintanya anti air, warnanya keluar banget pas ditempel di botol dingin. Pelayanan admin WA-nya juga ramah dan sabar bantuin sesuaikan ukuran stikernya.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    date: "Kemarin"
  },
  {
    id: "t2",
    name: "Siti Rahmawati",
    role: "Panitia Event Organizer",
    text: "Luar biasa cepat! Butuh spanduk panggung dadakan malam-malam karena spanduk lama robek. Hubungi Nala Media jam 9 malam, langsung diproses dan bisa diambil jam 11 malam. Penyelamat event kami! Mesinnya emang keren-keren.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    date: "3 hari yang lalu"
  },
  {
    id: "t3",
    name: "Hendrik Kusuma",
    role: "Manager Promosi PT Sinar Abadi",
    text: "Kami sudah langganan cetak neon box, merchandise tumbler, dan seragam kaos untuk promosi bulanan kantor. Harganya kompetitif banget dibanding tempat lain, pengerjaannya tepat waktu, dan ada garansi kalau hasil tidak sesuai mockup.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    date: "1 minggu yang lalu"
  },
  {
    id: "t4",
    name: "Aulia Amanda",
    role: "Desainer Grafis Freelance",
    text: "Sebagai desainer, saya cerewet soal kalibrasi warna. Di Nala Media, hasil cetaknya konsisten dan sesuai dengan file desain saya (CMYK profile-nya pas). Pilihan bahannya lengkap dari albatros sampai canvas premium. Recomended banget!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&h=150&q=80",
    date: "2 minggu yang lalu"
  }
];
