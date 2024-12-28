import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section with Animated Background -->
    <div class="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10 animate-pulse"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
      </div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-48">
        <div class="animate-fade-in-up">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 tracking-tight">
            Bienvenue chez <span class="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">VAPOR DISTRIBUTION</span>
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Découvrez notre gamme exclusive de produits premium, livrés directement chez vous avec un service d'exception
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <a routerLink="/produits" 
               class="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Découvrir nos produits
              <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
            <a routerLink="/contact" 
               class="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      <!-- Animated wave separator -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-24 fill-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,96L40,90.7C80,85,160,75,240,74.7C320,75,400,85,480,90.7C560,96,640,96,720,90.7C800,85,880,75,960,69.3C1040,64,1120,64,1200,69.3C1280,75,1360,85,1400,90.7L1440,96L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z">
            <animate attributeName="d" 
                     dur="10s" 
                     repeatCount="indefinite"
                     values="M0,96L40,90.7C80,85,160,75,240,74.7C320,75,400,85,480,90.7C560,96,640,96,720,90.7C800,85,880,75,960,69.3C1040,64,1120,64,1200,69.3C1280,75,1360,85,1400,90.7L1440,96L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z;
                             M0,64L40,69.3C80,75,160,85,240,80C320,75,400,53,480,42.7C560,32,640,32,720,37.3C800,43,880,53,960,58.7C1040,64,1120,64,1200,69.3C1280,75,1360,85,1400,90.7L1440,96L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z;
                             M0,96L40,90.7C80,85,160,75,240,74.7C320,75,400,85,480,90.7C560,96,640,96,720,90.7C800,85,880,75,960,69.3C1040,64,1120,64,1200,69.3C1280,75,1360,85,1400,90.7L1440,96L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z"/>
          </path>
        </svg>
      </div>
    </div>

    <!-- Nouveautés Section avec Carousel -->
    <section class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Nos Nouveautés
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        <div class="px-4 relative">
          <!-- Carousel Controls -->
          <button class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          <!-- Carousel Content -->
          <div class="flex flex-row gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory">
            <!-- Product Card 1 -->
            <div class="group bg-white rounded-3xl shadow-xl overflow-hidden min-w-[350px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl snap-start">
              <div class="relative">
                <img src="/assets/miami.jpg" alt="Pack Miami" class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  NOUVEAU
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Pack Miami Premium</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">Notre nouvelle gamme exclusive de bombonnes Miami, conçue pour vos événements exceptionnels</p>
                <a routerLink="/produits" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group/link">
                  En savoir plus
                  <svg class="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>

            <!-- Product Card 2 -->
            <div class="group bg-white rounded-3xl shadow-xl overflow-hidden min-w-[350px] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl snap-start">
              <div class="relative">
                <img src="/assets/miami.jpg" alt="Pack Miami" class="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500">
                <div class="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  NOUVEAU
                </div>
              </div>
              <div class="p-8">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">Pack Miami Premium</h3>
                <p class="text-gray-600 mb-6 leading-relaxed">Notre nouvelle gamme exclusive de bombonnes Miami, conçue pour vos événements exceptionnels</p>
                <a routerLink="/produits" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 group/link">
                  En savoir plus
                  <svg class="w-5 h-5 ml-2 transform group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   <!-- CTA Section avec Features -->
   <section class="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-24">
      <div class="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10"></div>
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-white mb-8">Prêt à commander ?</h2>
          <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Découvrez notre sélection de produits premium et profitez d'une livraison rapide et personnalisée
          </p>
          <a routerLink="/produits" 
             class="group inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-blue-600 hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
            Commander maintenant
            <svg class="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </a>
        </div>

        <!-- Features Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <!-- Feature 1 -->
          <div class="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Livraison Express</h3>
            <p class="text-blue-100 leading-relaxed">Service de livraison express disponible 24/7 avec suivi en temps réel</p>
          </div>

          <!-- Feature 2 -->
          <div class="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Qualité Premium</h3>
            <p class="text-blue-100 leading-relaxed">Des produits haut de gamme rigoureusement sélectionnés et testés pour votre satisfaction</p>
          </div>

          <!-- Feature 3 -->
          <div class="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center transform transition-all duration-300 hover:-translate-y-2 hover:bg-white/20">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-white mb-4">Support 24/7</h3>
            <p class="text-blue-100 leading-relaxed">Une équipe dédiée à votre service pour répondre à toutes vos questions à tout moment</p>
          </div>
        </div>
      </div>

      <!-- Bottom Wave -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg class="w-full h-24 fill-gray-50" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,64L40,69.3C80,75,160,85,240,80C320,75,400,53,480,42.7C560,32,640,32,720,37.3C800,43,880,53,960,58.7C1040,64,1120,64,1200,69.3C1280,75,1360,85,1400,90.7L1440,96L1440,120L1400,120C1360,120,1280,120,1200,120C1120,120,1040,120,960,120C880,120,800,120,720,120C640,120,560,120,480,120C400,120,320,120,240,120C160,120,80,120,40,120L0,120Z">
          </path>
        </svg>
      </div>
    </section>
  `,
  styles: [`
    /* Animations personnalisées */
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .animate-fade-in-up {
      animation: fade-in-up 1s ease-out forwards;
    }

    /* Masquer la scrollbar tout en gardant la fonctionnalité */
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
  `]
})
export class HomeComponent { }