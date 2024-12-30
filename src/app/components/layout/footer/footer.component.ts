import { Component, Injector } from '@angular/core';
import { FooterLinkComponent } from './components/footer-link/footer-link.component';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import {
  contactText,
  menuItems,
  socialNetworks,
} from '../../../../data/footer';
import { COLOR_TOKEN } from './injectors';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet, FooterLinkComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  menuItems = menuItems;
  contactText = contactText;
  socialNetworks = socialNetworks;

  createInjector(): Injector {
    return Injector.create({
      providers: [
        { provide: COLOR_TOKEN, useValue: 'var(--alt-gray, var(--dark-blue))' },
      ],
    });
  }
}
