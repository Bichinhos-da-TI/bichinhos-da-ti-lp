import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'carousel-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  image = input.required<string>();
  name = input.required<string>();
  role = input.required<string>();
  testimonial = input.required<string>();

  isActive = input<boolean>(false);
}
