import { Component, inject, InjectionToken } from '@angular/core';
import { COLOR_TOKEN } from '../../injectors';

@Component({
  selector: 'footer-discord-icon',
  standalone: true,
  imports: [],
  templateUrl: './discord-icon.component.html',
  styleUrl: './discord-icon.component.css',
})
export class DiscordIconComponent {
  color: string = inject(COLOR_TOKEN);
}
