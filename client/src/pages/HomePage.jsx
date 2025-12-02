import React, {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import Layout from '../components/Layout';
import ProductCard from '../components/ProductCard';
import Hero from '../components/Hero';
import CategoryBar from '../components/CategoryBar';

// IMPORT DATA MANUAL
import {products as allProducts} from '../data/Products';

const HomePage = () => {
  const [products, setProducts] = useState ([]);
  const [searchParams] = useSearchParams ();
  const category = searchParams.get ('category');
  const keyword = searchParams.get ('keyword');

  // LOGIC FILTERING (Jalan di Browser HP User, Super Cepet)
  useEffect (
    () => {
      let filtered = [...allProducts];

      // Filter Kategori
      if (category) {
        filtered = filtered.filter (p => p.category === category);
      }

      // Filter Keyword Search
      if (keyword) {
        const key = keyword.toLowerCase ();
        filtered = filtered.filter (p => p.name.toLowerCase ().includes (key));
      }

      setProducts (filtered);
    },
    [category, keyword]
  );

  return (
    <Layout>
      {!category && !keyword && <Hero />}
      <CategoryBar />

      {(category || keyword) &&
        <div className="p-6 border-b border-black bg-gray-50">
          <h2 className="font-mono text-sm uppercase">
            Menampilkan hasil untuk:
            {' '}
            <span className="font-bold">{category || keyword}</span>
          </h2>
        </div>}

      <div className="min-h-screen bg-white">
        <main className="max-w-full">
          {products.length > 0
            ? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 border-l border-black">
                {products.map (product => (
                  <div
                    key={product._id}
                    className="border-r border-b border-black"
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            : <div className="p-20 text-center font-mono uppercase text-gray-500">
                Barang Ghoib. Gak ketemu bro.
              </div>}
        </main>
      </div>
    </Layout>
  );
};

export default HomePage;
