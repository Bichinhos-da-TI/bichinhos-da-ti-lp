import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutUsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
