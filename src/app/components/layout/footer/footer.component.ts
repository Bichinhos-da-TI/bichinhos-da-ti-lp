import { Component } from '@angular/core';
import { FooterLinkComponent } from './components/footer-link/footer-link.component';
import { CommonModule } from '@angular/common';
import { SocialNetworkIconComponent } from './components/social-network-icon/social-network-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FooterLinkComponent, SocialNetworkIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  items = [
    {
      title: 'Inicio',
      href: '#',
    },
    {
      title: 'Quem somos',
      href: '#quem-somos',
    },
    {
      title: 'Nossos projetos',
      href: '#projetos',
    },
    {
      title: 'Depoimentos',
      href: '#depoimentos',
    },
  ];

  contactText =
    'Tem dúvidas ou quer saber mais? Entre em contato conosco através do e-mail [email@example.com] ou siga-nos nas redes sociais para ficar por dentro das novidades';

  socialNetworks = [
    {
      href: 'https://www.instagram.com/bichinhosdati/',
      image: 'assets/instagram.svg',
      alt: 'Instagram',
    },
    {
      href: 'https://www.linkedin.com/company/bichinhosdati/',
      image: 'assets/linkedin.svg',
      alt: 'Linkedin',
    },
    {
      href: '',
      image: 'assets/discord.svg',
      alt: 'Discord',
    },
  ];
}
