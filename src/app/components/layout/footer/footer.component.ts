import { Component } from '@angular/core';
import { FooterLinkComponent } from './components/footer-link/footer-link.component';
import { CommonModule } from '@angular/common';
import { SocialNetworkIconComponent } from './components/social-network-icon/social-network-icon.component';
import {
  contactText,
  menuItems,
  socialNetworks,
} from '../../../../data/footer';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterLinkComponent, SocialNetworkIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  menuItems = menuItems;
  contactText = contactText;
  socialNetworks = socialNetworks;
}
