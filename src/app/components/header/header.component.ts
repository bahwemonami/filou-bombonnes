import { CommonModule } from '@angular/common';
import { Component, HostListener, OnDestroy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <!-- Header avec classe dynamique pour la transparence -->
    <header [class]="headerClass">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Navigation principale -->
        <nav class="flex items-center justify-between h-20">
          <!-- Logo et Marque -->
          <div class="flex-shrink-0 group">
            <a routerLink="/" class="inline-flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300">
                <span class="text-xl font-bold text-white">FB</span>
              </div>
              <h1 class="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                FILOU BOMBONNES
              </h1>
            </a>
          </div>

          <!-- Navigation Desktop -->
          <div class="hidden md:flex items-center space-x-1">
            <ng-container *ngFor="let item of navigationItems">
              <a [routerLink]="item.route" 
                 routerLinkActive="bg-white/10 text-white"
                 class="relative px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white group transition-all duration-300">
                <span class="relative z-10">{{ item.label }}</span>
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </a>
            </ng-container>
            
            <!-- Bouton CTA -->
            <a routerLink="/produits" 
               class="ml-4 group inline-flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
              <span>Commander</span>
              <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                   fill="none" 
                   stroke="currentColor" 
                   viewBox="0 0 24 24">
                <path stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>

          <!-- Bouton Menu Mobile -->
          <div class="md:hidden">
            <button (click)="toggleMenu()" 
                    class="relative inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-white focus:outline-none group">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <svg class="relative z-10 h-6 w-6" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   stroke="currentColor">
                <path *ngIf="!isMenuOpen" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M4 6h16M4 12h16M4 18h16"/>
                <path *ngIf="isMenuOpen" 
                      stroke-linecap="round" 
                      stroke-linejoin="round" 
                      stroke-width="2" 
                      d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </nav>

        <!-- Menu Mobile -->
        <div class="md:hidden">
          <div [class]="mobileMenuClass" 
               (click)="$event.stopPropagation()">
            <div class="px-4 py-6 space-y-2">
              <ng-container *ngFor="let item of navigationItems">
                <a [routerLink]="item.route"
                   routerLinkActive="bg-white/10 text-white"
                   (click)="closeMenu()"
                   class="block rounded-lg text-gray-300 hover:text-white hover:bg-white/10 px-4 py-3 text-base font-medium transition-all duration-300">
                  {{ item.label }}
                </a>
              </ng-container>
              
              <a routerLink="/contact"
                 (click)="closeMenu()"
                 class="block mt-4 text-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 px-4 py-3 text-white font-medium hover:shadow-lg transition-all duration-300">
                Commander maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class HeaderComponent implements OnDestroy {
  isMenuOpen = false;
  isScrolled = false;

  navigationItems = [
    { label: 'Accueil', route: '/' },
    { label: 'Nos Produits', route: '/produits' },
    { label: 'Qui sommes-nous', route: '/qui-sommes-nous' }
  ];

  get headerClass(): string {
    return `fixed w-full z-50 transition-all duration-300 ${this.isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`;
  }

  get mobileMenuClass(): string {
    return `absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg transition-all duration-300 ${this.isMenuOpen
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 -translate-y-full pointer-events-none'
      }`;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  @HostListener('window:click')
  onWindowClick() {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  ngOnDestroy() {
    // Pas besoin de cleanup pour les HostListeners car Angular s'en charge
  }
}