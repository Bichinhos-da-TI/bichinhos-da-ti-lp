import { Component } from '@angular/core';
import { FooterComponent } from '../../components/layout/footer/footer.component';
import { MenuComponent } from '../../components/layout/menu/menu.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent, MenuComponent, HeroComponent, AboutUsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
