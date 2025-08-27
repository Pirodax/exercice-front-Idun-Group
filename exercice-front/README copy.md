# Test Frontend React Next.js

Durée indiquée => 60 minutes

## Objectif
Construire une mini application Next.js avec App Router pour afficher un catalogue de produits avec recherche, filtre par catégorie, tri, favoris persistants côté client, et une page détail par produit.
Démontrer une utilisation efficace et maîtrisée d’un outil d’IA pour gagner du temps tout en gardant la compréhension du code.

## Brief
1. Créer une page liste accessible à l’URL `/produits` qui charge les données produits côté serveur.
2. Afficher une grille de cartes produits avec image, nom, prix et note.
3. Ajouter une recherche par nom, insensible à la casse, avec un debouncing d’environ 300 ms.


4. Ajouter un filtre par catégorie basé sur les catégories présentes dans la donnée.
5. Ajouter un tri par prix et par note avec ordre croissant et décroissant.
6. Permettre d’ajouter ou retirer un produit des favoris. Persister l’état dans `localStorage`. Afficher un compteur de favoris dans un en‑tête.
7. Créer une page détail à l’URL `/produits/[id]` avec métadonnées dynamiques, un état `loading` et un état `not‑found`.
8. Soigner l’accessibilité de base. Les images ont un `alt` pertinent. Le bouton favoris est un vrai bouton avec `aria-pressed`.
9. Soigner l’intégration responsive. Une colonne en mobile, trois en desktop. 
10. Ne faire aucun appel réseau externe obligatoire. Les données sont locales et fournies ci‑dessous.

## Données
Placez le fichier `data/produits.json` dans votre projet et chargez ces données pour la liste et les détails.
Le paquet ZIP contient déjà ce fichier.

## Contraintes techniques
1. Next.js 14 ou 15 avec App Router.
3. Gérer l’état en local. 
4. Gérer `localStorage` uniquement dans un composant client.
6. Ne pas utiliser d’autre bibliothèque UI que SCSS ou CSS natif pour rester focalisé sur l’intégration.

## Livrables
1. Le code du projet.
2. Un fichier `AI_LOG.md` précisant vos interactions avec l’IA.
3. Un `README` court expliquant vos choix et compromis dans le temps imparti, ou compléter cette page.

## Utilisation de l’IA
1. Utiliser un outil d’IA est autorisé. Cependant, tous les choix devront être justifiés afin de montrer une bonne utilisation de ces outils.
2. Documenter dans `AI_LOG.md` pour chaque usage  objectif, exemples de prompts utilisés, extrait accepté, modifications réalisées et pourquoi, vérifications de bon fonctionnement.
3. Garder l’esprit critique. Adapter le code, retirer le superflu, expliquer ce que vous avez changé.

