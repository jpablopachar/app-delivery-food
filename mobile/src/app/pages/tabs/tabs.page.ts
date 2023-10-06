import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule } from '@ionic/angular'

@Component({
  selector: 'app-tabs',
  template: `
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home">
          <ion-icon name="fast-food-outline"></ion-icon>
          <ion-label>Inicio</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="search">
          <ion-icon name="search-outline"></ion-icon>
          <ion-label>Buscar</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="cart">
          <ion-icon name="map"></ion-icon>
          <ion-label>Carrito</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="account">
          <ion-icon name="information-circle"></ion-icon>
          <ion-label>Cuenta</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  `,
  styles: [],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TabsPage {
  constructor() {}
}
