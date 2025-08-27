'use client';
import React, { useState, useEffect } from 'react';
import produitsData from '../../data/produits.json';
import Image from 'next/image';

////////////////////////////////////////
// Récupère les catégories uniques
const categories = Array.from(new Set(produitsData.map((p: any) => p.category)));

// tier par prix ou note
type SortField = 'price' | 'rating' | '';
type SortOrder = 'asc' | 'desc';

const FAVORIS_KEY = 'produits_favoris';

//recherche de produits avec debounce
const Produicts = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Toutes'); //tir par catégorie
  const [sortField, setSortField] = useState<SortField>(''); // 'price' | 'rating' | ''
  const [sortOrder, setSortOrder] = useState<SortOrder>('asc'); // 'asc' | 'desc'
  const [favoris, setFavoris] = useState<number[]>([]); //favoris
  const [filtered, setFiltered] = useState(produitsData);

// Charger favoris depuis localStorage au montage
  useEffect(() => {
    const stored = localStorage.getItem(FAVORIS_KEY);
    if (stored) {
      setFavoris(JSON.parse(stored));
    }
  }, []);

  // Persister favoris dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem(FAVORIS_KEY, JSON.stringify(favoris));
  }, [favoris]);

  // Filtrage, recherche, tri
  useEffect(() => {
    const timer = setTimeout(() => {
      const query = search.trim().toLowerCase();
      let result = produitsData.filter((produit: any) => {
        const matchName = produit.name.toLowerCase().includes(query);
        const matchCategory =
          selectedCategory === 'Toutes' || produit.category === selectedCategory;
        return matchName && matchCategory;
      });

      if (sortField) {
        result = [...result].sort((a: any, b: any) => {
          if (sortOrder === 'asc') {
            return a[sortField] - b[sortField];
          } else {
            return b[sortField] - a[sortField];
          }
        });
      }

      setFiltered(result);
    }, 300);
    return () => clearTimeout(timer);
  }, [search, selectedCategory, sortField, sortOrder]);

  // Ajouter/retirer des favoris
  const toggleFavori = (id: number) => {
    setFavoris(favoris =>
      favoris.includes(id)
        ? favoris.filter(fid => fid !== id)
        : [...favoris, id]
    );
  };
////////////////////////////////////////

  if (!produitsData || !Array.isArray(produitsData) || produitsData.length === 0) {
    return <div className="text-center py-10">Aucun produit trouvé.</div>;
  }

 return (
    <div className="py-20 px-3 md:px-0 max-w-5xl mx-auto" id="produits">
      <h1 className="text-3xl text-[#bfa077] md:text-5xl font-bold text-center mb-10">
        Nos produits
      </h1>
      <div className="flex items-center gap-2 ml-4">
        <span className="text-[#bfa077] font-semibold">Favoris :</span>
        <span className="bg-[#bfa077] text-white rounded-full px-3 py-1 font-bold">
          {favoris.length}
        </span>
      </div>
      <div className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="Rechercher un produit..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#bfa077] w-full max-w-md bg-gray-200 text-[#bfa077] placeholder:text-[#bfa077]/60"
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#bfa077] bg-gray-200 text-[#bfa077] font-semibold"
        >
          <option value="Toutes">Toutes les catégories</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={sortField}
          onChange={e => setSortField(e.target.value as SortField)}
          className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#bfa077] bg-gray-200 text-[#bfa077] font-semibold"
        >
          <option value="">Tri par</option>
          <option value="price">Prix</option>
          <option value="rating">Note</option>
        </select>
        <select
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value as SortOrder)}
          className="px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#bfa077] bg-gray-200 text-[#bfa077] font-semibold"
        >
          <option value="asc">Croissant</option>
          <option value="desc">Décroissant</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {filtered.length === 0 ? (
          <div className="col-span-3 text-center text-[#bfa077]">Aucun produit trouvé.</div>
        ) : (
          filtered.map((produit: any) => {
            const isFavori = favoris.includes(produit.id);
            return (
              <div
                key={produit.id}
                className="flex flex-col items-center bg-white/80 rounded-2xl shadow-xl px-2 py-6 hover:shadow-2xl transition group relative"
              >
                <Image
                  src={produit.image}
                  alt={produit.name}
                  className="rounded-xl w-full object-cover max-h-60 shadow-md group-hover:scale-105 transition"
                  width={250}
                  height={150}
                />
                <div className="mt-4 flex items-center justify-center gap-2 w-full">
                  <h3 className="text-center text-xl text-[#7b5e38] font-semibold">{produit.name}</h3>
                  <button
                    onClick={() => toggleFavori(produit.id)}
                    className={`text-2xl transition ${
                      isFavori
                        ? 'text-[#bfa077] scale-110'
                        : 'text-gray-300 hover:text-[#bfa077]'
                    }`}
                    aria-label={isFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                    title={isFavori ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                  >
                    {isFavori ? '★' : '☆'}
                  </button>
                </div>
                <p className="mt-2 text-center text-base text-[#bfa077] font-bold">{produit.price.toFixed(2)} €</p>
                <p className="mt-2 text-center text-sm text-[#888]">Note : {produit.rating} ⭐</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Produicts;