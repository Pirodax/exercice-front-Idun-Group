import React from 'react';
import produitsData from '../../data/produits.json';
import Image from 'next/image';

const Produicts = () => {
  if (!produitsData || !Array.isArray(produitsData) || produitsData.length === 0) {
    return <div className="text-center py-10">Aucun produit trouvé.</div>;
  }

  return (
    <div className="py-20 px-3 md:px-0 max-w-5xl mx-auto" id="produits">
      <h1 className="text-3xl text-[#bfa077] md:text-5xl font-bold text-center mb-16">
        Nos produits
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16">
        {produitsData.map((produit: any) => (
          <div
            key={produit.id}
            className="flex flex-col items-center bg-white/80 rounded-2xl shadow-xl px-2 py-6 hover:shadow-2xl transition group"
          >
            <Image
              src={produit.image}
              alt={produit.name}
              className="rounded-xl w-full object-cover max-h-60 shadow-md group-hover:scale-105 transition"
              width={250}
              height={150}
            />
            <h3 className="mt-4 text-center text-xl text-[#7b5e38] font-semibold">{produit.name}</h3>
            <p className="mt-2 text-center text-base text-[#bfa077] font-bold">{produit.price.toFixed(2)} €</p>
            <p className="mt-2 text-center text-sm text-[#888]">Note : {produit.rating} ⭐</p>
            {/* Tu peux ajouter un bouton ici si besoin */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Produicts;