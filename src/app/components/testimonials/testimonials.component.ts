import { Component } from '@angular/core';
import { CarouselComponent } from './carousel/carousel.component';
import { SectionDividerComponent } from '../layout/section-divider/section-divider.component';
import { title } from '../../../data/testimonials';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CarouselComponent, SectionDividerComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {
  title = title;
}
