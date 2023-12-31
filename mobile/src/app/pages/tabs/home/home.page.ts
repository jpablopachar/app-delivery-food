import { CommonModule } from '@angular/common'
import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { IonicModule, IonicSlides } from '@ionic/angular'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  public swiperModules: ((opts: any) => void)[];

  constructor() {
    this.swiperModules = [IonicSlides];
  }

  ngOnInit() {}
}
