import { Component, inject, InjectionToken } from '@angular/core';
import { COLOR_TOKEN } from '../../injectors';

@Component({
  selector: 'footer-linkedin-icon',
  standalone: true,
  imports: [],
  templateUrl: './linkedin-icon.component.html',
  styleUrl: './linkedin-icon.component.css',
})
export class LinkedinIconComponent {
  color: string = inject(COLOR_TOKEN);
}
