export const products = [
  {
    _id: "1",
    name: "VINTAGE NIRVANA TEE 1993",
    slug: "vintage-nirvana-tee",
    // Link Gambar: Bisa ambil dari Instagram klien, atau upload ke Imgur/Google Drive
    images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=1000"],
    category: "Baju",
    price: 350000,
    originalPrice: 450000,
    stock: 1,
    description: "Kaos vintage holy grail. Single stitch. Tag Giant. Kondisi fading alami cakep banget. Size L boxy fit."
  },
  {
    _id: "2",
    name: "LEVIS 501 BIG E REDLINE",
    slug: "levis-501-big-e",
    images: ["https://images.unsplash.com/photo-1542272454315-4c01d7abdf4a?auto=format&fit=crop&q=80&w=1000"],
    category: "Celana",
    price: 2800000,
    originalPrice: 0,
    stock: 2,
    description: "Denim selvedge jepang. Whisker alami. Button fly lengkap. Size 32x30."
  },
  {
    _id: "3",
    name: "VARSITY JACKET GOLDEN BEAR",
    slug: "varsity-golden-bear",
    images: ["https://images.unsplash.com/photo-1551028919-ac66e62469d2?auto=format&fit=crop&q=80&w=1000"],
    category: "Jaket",
    price: 1500000,
    originalPrice: 2200000,
    stock: 0, // Kalo 0 otomatis jadi SOLD OUT
    description: "Kulit lengan asli (Cowhide). Wool body tebal. Bordiran chenille rapi."
  },
  {
    _id: "4",
    name: "DOC MARTENS 1461 ENGLAND",
    slug: "doc-martens-1461",
    images: ["https://images.unsplash.com/photo-1630132170364-750519965dc2?auto=format&fit=crop&q=80&w=1000"],
    category: "Sepatu",
    price: 1850000,
    originalPrice: 0,
    stock: 3,
    description: "Kulit badak. Sol masih tebal banget. Yellow stitch aman."
  }
];