import { Component, inject, InjectionToken } from '@angular/core';
import { COLOR_TOKEN } from '../../injectors';

@Component({
  selector: 'footer-instagram-icon',
  standalone: true,
  imports: [],
  templateUrl: './instagram-icon.component.html',
  styleUrl: './instagram-icon.component.css',
})
export class InstagramIconComponent {
  color: string = inject(COLOR_TOKEN);
}
