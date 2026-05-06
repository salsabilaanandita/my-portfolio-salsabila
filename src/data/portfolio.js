// // data/portfolio.js
// import inventarisImg from '../assets/project/inventaris.png';
import perpusImg from '../assets/project/perpus.png';
import weatherImg from '../assets/project/weather.png';
import ticketingImg from '../assets/project/ticketing.png';
import inventariesImg from '../assets/project/inventaries.png';
import webshopImg from '../assets/project/webshop.png';

export const about = {
  name: "Salsabila Anandita Putri",
  title: "Front-End Developer",
  tagline: "I build clean, fast & beautiful web experiences.",
  bio: "Passionate about creating innovative web solutions with modern technologies. I bring ideas to life through clean code and stunning user experiences.",
  location: "Bogor, Indonesia",
  email: "salsabilaananditaputri@gmail.com",
  available: true,
};

export const socials = [
  { label: "GitHub", url: "https://github.com/salsabilaanandita", icon: "Github" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/salsabilaananditaputri/", icon: "Linkedin" },
  { label: "Instagram", url: "https://www.instagram.com/_ssalsabiill/", icon: "Instagram" },
];

export const skills = [
  {
    category: "Frontend",
    items: ["React.js", "JavaScript", "Bootstrap", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    items: ["Express", "Laravel", "PHP Codeinteger", "PostgreSQL", "Lumen", "REST APIs", "MySql", "MongoDB"],
  },
  {
    category: "Tools & Others",
    items: ["Git", "Figma", "Vercel", "Laragon", "VsCode"],
  },
];

export const projects = [
{
  id: "inventaris-app",
  title: "Inventaris App",
  shortDesc: "Aplikasi manajemen inventaris untuk mengelola data barang, stok, dan transaksi.",
  description: "Aplikasi manajemen inventaris yang dibuat menggunakan Laravel untuk membantu pengelolaan data barang, stok, serta transaksi masuk dan keluar. Dibangun dengan konsep CRUD yang terstruktur serta tampilan yang sederhana dan user-friendly.",
  role: "Fullstack Developer",
  year: "2024",
  tags: ["Web App", "Inventory", "CRUD"],
  stack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
  // image: inventarisImg,
  liveUrl: "#",
  githubUrl: "https://github.com/salsabilaanandita/inventaris-ukk.git",
  featured: true,
  highlights: [
    "Membangun sistem CRUD untuk data barang",
    "Manajemen stok barang masuk dan keluar",
    "Fitur tambah, edit, hapus, dan detail data",
    "Tampilan sederhana dan mudah digunakan",
  ],
},
  {
    id: "aplikasi-perpustakaan",
    title: "Aplikasi Perpustakaan",
    shortDesc: "Manajemen perpustakaan digital untuk pencatatan buku, peminjaman, dan pengembalian.",
    description: "Aplikasi manajemen perpustakaan digital berbasis web yang memudahkan pencatatan buku, peminjaman, pengembalian, dan pelacakan stok buku secara real-time.",
    role: "Full Stack Developer",
    year: "2024",
    tags: ["Library", "Management", "Education"],
    stack: ["ReactJS", "JavaScript", "REST API", "Bootstrap", "MySQL"],
    image: perpusImg,
    liveUrl: "#",
    githubUrl: "https://github.com/salsabilaanandita/perpustakaan-react.git",
    featured: true,
    highlights: [
      "Sistem pencatatan buku dan anggota perpustakaan",
      "Fitur peminjaman dan pengembalian dengan due date",
      "Laporan buku terpopuler dan statistik peminjaman",
      "Dashboard admin untuk manajemen data",
    ],
  },
  {
    id: "weather-app",
    title: "Weather App",
    shortDesc: "Aplikasi cuaca real-time dengan prakiraan cuaca, suhu, dan lokasi pengguna.",
    description: "Aplikasi cuaca real-time yang menampilkan informasi cuaca terkini, prakiraan 5 hari kedepan, suhu, kelembaban, kecepatan angin, dan deteksi lokasi otomatis.",
    role: "Frontend Developer",
    year: "2024",
    tags: ["Weather", "API", "Mobile"],
    stack: ["ReactJS", "JavaScript", "Weather API", "CSS3", "Axios"],
    image: weatherImg,
    liveUrl: "#",
    githubUrl: "https://github.com/salsabilaanandita/pendeteksi-cuaca.git",
    featured: true,
    highlights: [
      "Integrasi API cuaca real-time (OpenWeather)",
      "Deteksi lokasi otomatis dengan geolocation",
      "Tampilan interaktif dengan animasi cuaca",
      "Responsive design untuk mobile & desktop",
    ],
  },
  {
    id: "ticketing-flutter",
    title: "Ticketing Flutter",
    shortDesc: "Aplikasi mobile pemesanan tiket event dengan QR code dan notifikasi real-time.",
    description: "Aplikasi mobile untuk pemesanan tiket event, dilengkapi dengan fitur QR code untuk validasi tiket, seat selection interaktif, dan notifikasi real-time untuk update event.",
    role: "Mobile Developer",
    year: "2024",
    tags: ["Mobile", "Event", "Ticketing"],
    stack: ["Flutter", "Dart", "Firebase", "QR Code Generator", "Firebase Cloud Messaging"],
    image: ticketingImg,
    liveUrl: "https://app-ticketing-salsabila.vercel.app/",
    githubUrl: "https://github.com/salsabilaanandita/ticketing-flutter.git",
    featured: false,
    highlights: [
      "Pemesanan tiket dengan seat selection",
      "Validasi tiket menggunakan QR code scanner",
      "Notifikasi push real-time untuk pembelian tiket",
      "Firebase authentication dan realtime database",
    ],
  },
  {
    id: "aplikasi-inventaris",
    title: "Aplikasi Inventaris",
    shortDesc: "Aplikasi inventaris barang untuk pencatatan stok, mutasi, dan laporan barang.",
    description: "Aplikasi inventaris barang berbasis web untuk pencatatan stok barang, mutasi barang masuk/keluar, serta generate laporan periodik untuk monitoring inventaris.",
    role: "Full Stack Developer",
    year: "2024",
    tags: ["Inventory", "Management", "Business"],
    stack: ["ReactJS", "JavaScript", "REST API", "Bootstrap", "Node.js"],
    image: inventariesImg,
    liveUrl: "#",
    githubUrl: "https://github.com/salsabilaanandita/inventaries-project-react.git",
    featured: false,
    highlights: [
      "CRUD data barang, kategori, dan supplier",
      "Tracking mutasi barang masuk dan keluar",
      "Generate laporan stok dan mutasi per periode",
      "Low stock alert system",
    ],
  },
  {
    id: "webshop",
    title: "Webshop",
    shortDesc: "Website e-commerce modern dengan katalog produk, keranjang, dan checkout.",
    description: "Website e-commerce modern yang menampilkan katalog produk, fitur keranjang belanja, proses checkout, dan integrasi pembayaran online untuk pengalaman belanja yang seamless.",
    role: "Frontend Developer",
    year: "2023",
    tags: ["E-Commerce", "Shopping", "Web"],
    stack: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "FontAwesome"],
    image: webshopImg,
    liveUrl: "#",
    githubUrl: "https://github.com/salsabilaanandita/webshop-app.git",
    featured: false,
    highlights: [
      "Katalog produk dengan filter dan search",
      "Fitur keranjang belanja dengan LocalStorage",
      "Proses checkout dan ringkasan pesanan",
      "Responsive design untuk semua device",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);