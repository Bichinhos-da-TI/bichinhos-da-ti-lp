import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-section-divider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-divider.component.html',
  styleUrl: './section-divider.component.css',
})
export class SectionDividerComponent {
  color = input.required<string>();
}
