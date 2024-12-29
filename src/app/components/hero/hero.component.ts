import { Component } from '@angular/core';
import { SectionDividerComponent } from '../layout/section-divider/section-divider.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [SectionDividerComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {}
