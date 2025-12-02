import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaWhatsapp, FaArrowLeft } from 'react-icons/fa';
import Layout from '../components/Layout';
// Import Data
import { products as allProducts } from '../data/Products';

const ProductDetailPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);

  // GANTI NOMOR KLIEN DI SINI
  const NOMOR_WA = "6281234567890"; 

  useEffect(() => {
    // Cari produk di array lokal (Instan, gak pake loading)
    const found = allProducts.find(p => p.slug === slug);
    setProduct(found);
  }, [slug]);

  const handleCheckout = () => {
    if (!product) return;
    const message = `Halo Min, saya minat produk ini:\n*${product.name}*\nHarga: Rp ${product.price.toLocaleString('id-ID')}\nLink: ${window.location.href}\n\nMasih ready gak?`;
    const url = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!product) return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center font-mono">
        <h1 className="text-4xl mb-4">404</h1>
        <p>BARANG HILANG DARI RADAR.</p>
        <Link to="/" className="mt-4 underline">KEMBALI KE BASE</Link>
      </div>
    </Layout>
  );

  return (
     // ... (ISI RETURN DI BAWAH SAMA PERSIS KAYAK KEMARIN, GAK ADA YG BERUBAH)
     // ... Copas aja bagian <Layout> sampe </Layout> dari file sebelumnya
     <Layout>
        {/* ... KODE TAMPILAN SAMA AJA ... */}
        {/* Cuma pastiin variable product.xxxx dipanggil dengan bener */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen font-sans text-black">
            {/* Bagian Kiri Foto */}
            <div className="border-b md:border-b-0 md:border-r-2 border-black bg-gray-50 relative">
                <div className="sticky top-[140px] h-auto p-8 flex items-center justify-center">
                    <img src={product.images[0]} alt={product.name} className="w-full max-w-xl object-contain drop-shadow-2xl mix-blend-multiply" />
                </div>
            </div>
            {/* Bagian Kanan Detail */}
            <div className="flex flex-col">
                <div className="p-6 border-b-2 border-black flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2 text-xs font-mono font-bold uppercase hover:underline"><FaArrowLeft /> Back to Catalog</Link>
                </div>
                <div className="p-8 md:p-12 flex-grow">
                    <h1 className="font-display text-5xl md:text-7xl uppercase leading-[0.9] mb-8 break-words">{product.name}</h1>
                    <div className="border-2 border-black p-6 mb-8 bg-white max-w-md">
                        <div className="flex justify-between font-mono text-sm text-gray-500 mb-2 uppercase tracking-widest"><span>Price Tag</span><span>IDR</span></div>
                        <div className="flex items-baseline gap-4">
                            <span className="font-display text-4xl md:text-5xl">{product.price.toLocaleString('id-ID')}</span>
                            {product.originalPrice > 0 && <span className="font-mono text-lg text-red-500 line-through decoration-2">{product.originalPrice.toLocaleString('id-ID')}</span>}
                        </div>
                    </div>
                    <div className="prose prose-lg text-black font-sans mb-12">
                        <h3 className="font-mono text-sm font-bold uppercase border-b border-black inline-block mb-4">Details</h3>
                        <p className="whitespace-pre-line leading-relaxed">{product.description}</p>
                    </div>
                </div>
                <div className="sticky bottom-0 md:relative p-4 md:p-12 border-t-2 border-black bg-white z-20">
                    {product.stock > 0 ? (
                        <button onClick={handleCheckout} className="w-full bg-[#CCFF00] text-black border-2 border-black py-5 font-display text-xl md:text-2xl uppercase tracking-widest hover:bg-black hover:text-[#CCFF00] transition-colors flex items-center justify-center gap-4 shadow-brutal active:shadow-none active:translate-x-[2px] active:translate-y-[2px]">
                            <FaWhatsapp className="text-3xl" /> Cop This Now
                        </button>
                    ) : (
                        <button disabled className="w-full bg-gray-200 text-gray-500 border-2 border-gray-400 py-5 font-display text-xl uppercase tracking-widest cursor-not-allowed">Sold Out</button>
                    )}
                </div>
            </div>
        </div>
     </Layout>
  );
};

export default ProductDetailPage;