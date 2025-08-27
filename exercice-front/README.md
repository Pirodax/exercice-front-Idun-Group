# Mini Application Next.js — Catalogue Produits exercice

### MES choix
D’abord, la création correcte et claire de l’architecture.

Ensuite, la modification de layout et app/page pour y intégrer les composants Hero et Produit.

Avec le composant Produit, l’affichage des produits depuis data/produits.json.

Une fois le composant Produit finalisé, mise en place de la redirection vers app/produits/[id]/page pour afficher le détail de chaque produit.

Création des fichiers loading et not-found.

Enfin, réglage des warnings et rédaction des documents .md.

## ✅ Réalisé dans le temps imparti (60 minutes)

- Mise en place d’une architecture claire (`app/`, `components/ui/`, `data/`).  
- Création du layout global avec en-tête et compteur de favoris.  
- Ajout de la page d’accueil avec un composant Hero.  
- Développement du composant `Products` : affichage des produits depuis `data/produits.json`.  
- Implémentation de la recherche (debounce), du filtre par catégorie et du tri prix/note.  
- Mise en place des favoris persistants dans `localStorage`.  
- Création de la page détail produit dans `app/produits/[id]/page.tsx`.  
- Ajout des états `loading.tsx` et `not-found.tsx`.  

### Limites dans le temps imparti
- Pas de footer implémenté (manque de temps).
- Un warning persistait sur la page `/produits/[id]` concernant l’utilisation de `params` dans Next.js 15.
- Pas encore de fichier `README.md` ni `AI_LOG.md`.

---

## 🔄 Finalisation après +40 minutes

### Corrections et ajouts
- Correction du **warning `params should be awaited before using its properties`** :  
- Rédaction du fichier **`AI_LOG.md`** pour documenter l’usage de l’IA : prompts utilisés, extraits acceptés, modifications effectuées et vérifications.
- Rédaction du présent **`README.md`** pour décrire le projet, son architecture, ses fonctionnalités, ses limites et les ajustements réalisés.

---
## 🔄 Déploiement + 15 min 
- Après hésitation, j’ai décidé de revenir sur le projet pour le déployer via Vercel. Durant notre entretien, je me suis rappelé que vous utilisiez Vercel pour montrer les prototypes aux clients ; j’ai donc choisi de faire de même.

- Correction des erreurs de build (suppression des any dans le code). Je n’ai pas souhaité modifier data/produits.json, j’ai donc redéfini à chaque fois le type Produit.