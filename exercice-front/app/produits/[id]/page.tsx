import produitsData from "@/data/produits.json";
import Image from "next/image";

export default async function ProduitDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  // ⚠️ on attend la résolution
  const { id } = await params;
  const produitId = Number(id);
  const produit = produitsData.find((p: any) => p.id === produitId);

  if (!produit) {
    return (
      <div className="py-20 text-center text-[#bfa077]">
        Produit introuvable.
      </div>
    );
  }

  return (
    <div className="py-20 px-3 md:px-0 max-w-xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#bfa077] text-center mb-8">
        {produit.name}
      </h1>
      <div className="flex flex-col items-center bg-white/80 rounded-2xl shadow-xl px-4 py-8">
        <Image
          src={produit.image}
          alt={produit.name}
          width={400}
          height={300}
          className="rounded-xl object-cover shadow mb-6"
        />
        <p className="text-lg text-[#7b5e38] font-semibold mb-2">
          Catégorie : <span className="font-normal">{produit.category}</span>
        </p>
        <p className="text-xl text-[#bfa077] font-bold mb-2">
          Prix : {produit.price.toFixed(2)} €
        </p>
        <p className="text-base text-[#888] mb-2">
          Note : {produit.rating} ⭐
        </p>
      </div>
    </div>
  );
}
