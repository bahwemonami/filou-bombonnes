import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order.model';

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private readonly BOT_TOKEN = '8135439683:AAFOaG4CfXGh4-i5wdY1FBfkH3MzaE75OZg';
  private readonly CHAT_ID = '-1002436099194';
  private readonly API_URL = `https://api.telegram.org/bot${this.BOT_TOKEN}/sendMessage`;

  constructor(private http: HttpClient) { }

  sendOrder(order: Order) {
    const message = this.formatOrderMessage(order);
    return this.http.post(this.API_URL, {
      chat_id: this.CHAT_ID,
      text: message,
      parse_mode: 'HTML'
    });
  }

  private formatOrderMessage(order: Order): string {
    return `
🛍️ <b>Nouvelle Commande</b>

👤 Client: ${order.nom}
📍 Adresse: ${order.adresse}
🏙️ Ville: ${order.ville}
📦 Produit: ${order.produit}
🔢 Quantité: ${order.quantite}
📍 Lieu de livraison: ${order.lieuLivraison}
⏰ Heure de livraison: ${order.heureLivraison}
📱 Téléphone: ${order.telephone}
💳 Paiement: ${order.paiement}
💰 Prix Total: ${order.prix}
    `.trim();
  }
}