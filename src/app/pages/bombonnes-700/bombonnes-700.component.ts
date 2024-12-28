import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TelegramService } from '../../services/telegram.service';

@Component({
  selector: 'app-bombonnes-700',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  template: `
    <div class="container mx-auto px-4 py-8 max-w-7xl">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Produits</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="relative">
            <img src="/assets/miami.jpg" alt="Tank Miami" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Baking Bad 640g Aluminium</h3>
            <p class="text-gray-600 mb-4">Les baking bad infusion apportent une touche d’humour à votre cuisine avec un design amusant et des normes de sécurité strictes. Non rechargeable, non médical, et non destiné à l’inhalation.</p>
            <button (click)="openOrderForm('Tank Miami')" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              Commander
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="relative">
            <img src="/assets/miami.jpg" alt="Tank Miami" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Baking Bad 615g Métal</h3>
            <p class="text-gray-600 mb-4">Les baking bad infusion apportent une touche d’humour à votre cuisine avec un design amusant et des normes de sécurité strictes. Non rechargeable, non médical, et non destiné à l’inhalation.
            <button (click)="openOrderForm('Tank Miami')" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              Commander
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="relative">
            <img src="/assets/miami.jpg" alt="Tank Miami" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Miami Magic 640g Aluminium</h3>
            <p class="text-gray-600 mb-4">Les Miami Magic infusion apportent une touche d’humour à votre cuisine avec un design amusant et des normes de sécurité strictes. Non rechargeable, non médical, et non destiné à l’inhalation.</p>
            <button (click)="openOrderForm('Tank Miami')" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              Commander
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="relative">
            <img src="/assets/miami.jpg" alt="Tank Miami" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Miami Magic 700g Métal</h3>
            <p class="text-gray-600 mb-4">Les Miami Magic infusion apportent une touche d’humour à votre cuisine avec un design amusant et des normes de sécurité strictes. Non rechargeable, non médical, et non destiné à l’inhalation.</p>
            <button (click)="openOrderForm('Tank Miami')" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              Commander
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="relative">
            <img src="/assets/miami.jpg" alt="Tank Miami" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">Miami Magic 320g</h3>
            <p class="text-gray-600 mb-4">Les Miami Magic infusion apportent une touche d’humour à votre cuisine avec un design amusant et des normes de sécurité strictes. Non rechargeable, non médical, et non destiné à l’inhalation.</p>
            <button (click)="openOrderForm('Tank Miami')" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              Commander
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="relative">
            <img src="/assets/miami.jpg" alt="Tank Miami" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">FreshWip</h3>
            <p class="text-gray-600 mb-4">Les FreshWip apportent une touche d’humour à votre cuisine avec un design amusant et des normes de sécurité strictes. Non rechargeable, non médical, et non destiné à l’inhalation.</p>
            <button (click)="openOrderForm('Tank Miami')" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              Commander
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="relative">
            <img src="/assets/miami.jpg" alt="Tank Miami" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">FreshWip Menthe</h3>
            <p class="text-gray-600 mb-4">Les FreshWip Menthe apportent une touche d’humour à votre cuisine avec un design amusant et des normes de sécurité strictes. Non rechargeable, non médical, et non destiné à l’inhalation.</p>
            <button (click)="openOrderForm('Tank Miami')" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              Commander
            </button>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <div class="relative">
            <img src="/assets/miami.jpg" alt="Tank Miami" class="w-full h-64 object-cover">
            <div class="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Nouveau
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 mb-2">FreshWip Fraise</h3>
            <p class="text-gray-600 mb-4">Les FreshWip Fraise infusion apportent une touche d’humour à votre cuisine avec un design amusant et des normes de sécurité strictes. Non rechargeable, non médical, et non destiné à l’inhalation.</p>
            <button (click)="openOrderForm('Tank Miami')" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
              </svg>
              Commander
            </button>
          </div>
        </div>

      </div>

      <!-- Order Modal -->
      <div *ngIf="showOrderForm" 
           class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl w-full max-w-2xl transform transition-all">
          <div class="p-6">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-bold text-gray-900">Commander {{selectedProduct}}</h3>
              <button (click)="closeOrderForm()" 
                      class="text-gray-400 hover:text-gray-600 transition duration-150">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>

            <form [formGroup]="orderForm" (ngSubmit)="submitOrder()" class="space-y-6">
              <!-- Two columns layout for form -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Left column -->
                <div class="space-y-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                    <input type="text" formControlName="nom" 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                    <input type="text" formControlName="adresse" 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                    <input type="text" formControlName="ville" 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Quantité</label>
                    <input type="number" formControlName="quantite" 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  </div>
                </div>

                <!-- Right column -->
                <div class="space-y-6">
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Lieu de livraison</label>
                    <input type="text" formControlName="lieuLivraison" 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Heure de livraison</label>
                    <input type="time" formControlName="heureLivraison" 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Numéro de téléphone</label>
                    <input type="tel" formControlName="telephone" 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Moyen de paiement</label>
                    <select formControlName="paiement" 
                            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition">
                      <option value="especes">Espèces</option>
                      <option value="cb">Carte Bancaire</option>
                      <option value="viro">Virement</option>
                    </select>
                  </div>
                </div>
              </div>
              <!-- Form buttons -->
              <div class="mt-6 p-4 bg-gray-50 rounded-lg">
  <div class="flex justify-between items-center">
    <span class="text-lg font-medium text-gray-700">Prix total:</span>
    <span class="text-2xl font-bold text-blue-600">{{calculateTotalPrice()}}€</span>
  </div>
  <p class="text-sm text-gray-500 mt-1">
    Prix unitaire: {{productPrices[selectedProduct]}}€
  </p>
</div>
              <div class="flex justify-end space-x-4 mt-8">
                <button type="button" (click)="closeOrderForm()" 
                        class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition duration-150">
                  Annuler
                </button>
                <button type="submit" [disabled]="!orderForm.valid" 
                        class="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150">
                  Confirmer la commande
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    <div class="modal" *ngIf="showConfirmation">
<!-- Confirmation Modal -->
<div *ngIf="showConfirmation" 
     class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
  <div class="bg-white rounded-2xl max-w-md w-full p-6 text-center">
    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
      <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>
    <h3 class="text-2xl font-bold text-gray-900 mb-2">Commande Confirmée</h3>
    <p class="text-gray-600 mb-6">Votre commande a bien été prise en compte. Nous vous contacterons dans les plus brefs délais.</p>
    <button (click)="closeConfirmation()" 
            class="w-full px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-150">
      Fermer
    </button>
  </div>
</div>
  `,
  styles: ''
})
export class Bombonnes700Component {
  orderForm: FormGroup;
  showOrderForm = false;
  showConfirmation = false;
  selectedProduct = '';

  public productPrices: { [key: string]: number } = {
    'Palette Miami': 3000,
    'Carton Miami': 300,
    'Tank Miami': 100
  };


  constructor(
    private fb: FormBuilder,
    private telegramService: TelegramService
  ) {
    this.orderForm = this.fb.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      quantite: [1, [Validators.required, Validators.min(1)]],
      lieuLivraison: ['', Validators.required],
      heureLivraison: ['', Validators.required],
      telephone: ['', Validators.required],
      paiement: ['especes', Validators.required]
    });
  }


  calculateTotalPrice(): number {
    const quantity = this.orderForm.get('quantite')?.value || 0;
    const productPrice = this.productPrices[this.selectedProduct] || 0;
    return quantity * productPrice;
  }

  openOrderForm(product: string) {
    this.selectedProduct = product;
    this.showOrderForm = true;
  }

  closeOrderForm() {
    this.showOrderForm = false;
    this.orderForm.reset();
  }

  submitOrder() {
    if (this.orderForm.valid) {
      const totalPrice = this.calculateTotalPrice();
      const order = {
        ...this.orderForm.value,
        produit: this.selectedProduct,
        prix: `${totalPrice}€` // Ajout du prix au format string avec €
      };

      this.telegramService.sendOrder(order).subscribe({
        next: () => {
          this.showOrderForm = false;
          this.showConfirmation = true;
          this.orderForm.reset({
            paiement: 'especes',
            quantite: 1
          });
        },
        error: (error) => {
          console.error('Erreur lors de l\'envoi de la commande:', error);
        }
      });
    }
  }

  closeConfirmation() {
    this.showConfirmation = false;
  }
}