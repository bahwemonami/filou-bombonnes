import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <!-- Hero Section -->
    <div class="relative bg-gradient-to-b from-blue-600 to-blue-800 text-white">
      <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Qui sommes-nous ?
          </h1>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Découvrez l'excellence et l'innovation avec FILOU BOMBONNES
          </p>
        </div>
      </div>
      <!-- Decorative bottom wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-12 fill-white" viewBox="0 0 1440 74" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,32L80,37.3C160,43,320,53,480,58.7C640,64,800,64,960,56C1120,48,1280,32,1360,24L1440,16L1440,74L1360,74C1280,74,1120,74,960,74C800,74,640,74,480,74C320,74,160,74,80,74L0,74Z"></path>
        </svg>
      </div>
    </div>

    <!-- Main Content -->
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <!-- Introduction -->
        <div class="rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 p-8 mb-16">
          <p class="text-lg text-gray-700 leading-relaxed">
            <span class="font-semibold text-blue-800">FILOU BOMBONNES</span> est votre fournisseur de confiance en protoxyde d'azote depuis 2022. 
            Nous nous engageons à fournir des produits de la plus haute qualité à nos clients, avec un service irréprochable et une attention particulière à chaque détail.
          </p>
        </div>

        <!-- Mission Section -->
        <div class="mb-16">
          <div class="rounded-2xl bg-white shadow-lg p-8 transform hover:-translate-y-1 transition duration-300">
            <div class="flex items-center mb-6">
              <div class="bg-blue-600 rounded-full p-3 mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h2 class="text-3xl font-bold text-gray-900">Notre Mission</h2>
            </div>
            <p class="text-lg text-gray-600 leading-relaxed">
              Notre mission est de fournir un service rapide et fiable à nos clients, 
              avec une livraison express et un service client disponible 24/7. Nous nous efforçons 
              de maintenir les plus hauts standards de qualité et de satisfaction client.
            </p>
          </div>
        </div>

        <!-- Values Grid -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Nos Valeurs</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Value Card 1 -->
            <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition duration-300">
              <div class="flex items-center mb-4">
                <div class="bg-green-100 rounded-full p-3 mr-4">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Qualité Premium</h3>
              </div>
              <p class="text-gray-600">Nous garantissons des produits de la plus haute qualité, testés et certifiés.</p>
            </div>

            <!-- Value Card 2 -->
            <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition duration-300">
              <div class="flex items-center mb-4">
                <div class="bg-blue-100 rounded-full p-3 mr-4">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Service Client 24/7</h3>
              </div>
              <p class="text-gray-600">Une équipe dédiée à votre service pour répondre à toutes vos questions.</p>
            </div>

            <!-- Value Card 3 -->
            <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition duration-300">
              <div class="flex items-center mb-4">
                <div class="bg-purple-100 rounded-full p-3 mr-4">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Livraison Express</h3>
              </div>
              <p class="text-gray-600">Livraison rapide et sécurisée pour tous vos produits.</p>
            </div>

            <!-- Value Card 4 -->
            <div class="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition duration-300">
              <div class="flex items-center mb-4">
                <div class="bg-yellow-100 rounded-full p-3 mr-4">
                  <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-900">Satisfaction Garantie</h3>
              </div>
              <p class="text-gray-600">Votre satisfaction est notre priorité absolue.</p>
            </div>
          </div>
        </div>

        <!-- Contact CTA -->
        <div class="text-center">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-white mb-4">Prêt à commencer ?</h2>
            <p class="text-blue-100 mb-6">Contactez-nous dès maintenant pour découvrir nos offres</p>

            <div class="mt-4 gap-5">
              <a href="snapchat://add/petitfilou" (click)="openExternalLink('')" class="text-yellow-400 hover:text-yellow-300 mx-2">
                <i class="fab fa-snapchat-ghost text-4xl"></i>
              </a>
              <a href="" (click)="openExternalLink('')" class="text-green-400 hover:text-green-300 mx-2">
                <i class="fab fa-whatsapp text-4xl"></i>
              </a>
              <a href="" (click)="openExternalLink('')" class="text-blue-400 hover:text-blue-300 mx-2">
                <i class="fab fa-telegram text-4xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {
  openExternalLink(url: string) {
    window.open(url, '_blank');
  }
}