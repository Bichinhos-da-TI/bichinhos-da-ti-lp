import { Component, input } from '@angular/core';

@Component({
  selector: 'footer-social-network-icon',
  standalone: true,
  imports: [],
  templateUrl: './social-network-icon.component.html',
  styleUrl: './social-network-icon.component.css',
})
export class SocialNetworkIconComponent {
  href = input.required<string>();
  image = input.required<string>();
  alt = input.required<string>();
}
