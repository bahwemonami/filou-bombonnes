export interface Order {
  nom: string;
  adresse: string;
  ville: string;
  produit: string;
  quantite: number;
  lieuLivraison: string;
  heureLivraison: string;
  telephone: string;
  paiement: string;
  prix: string;
}

export interface ProductPrice {
  name: string;
  price: number;
}