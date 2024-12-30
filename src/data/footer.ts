import { DiscordIconComponent } from 'src/app/components/layout/footer/components/discord-icon/discord-icon.component';
import { InstagramIconComponent } from 'src/app/components/layout/footer/components/instagram-icon/instagram-icon.component';
import { LinkedinIconComponent } from 'src/app/components/layout/footer/components/linkedin-icon/linkedin-icon.component';

export const menuItems = [
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

export const contactText =
  'Tem dúvidas ou quer saber mais? Entre em contato conosco através do e-mail [email@example.com] ou siga-nos nas redes sociais para ficar por dentro das novidades';

export const socialNetworks = [
  {
    href: 'https://www.instagram.com/bichinhosdati/',
    alt: 'Instagram',
    icon: InstagramIconComponent,
  },
  {
    href: 'https://www.linkedin.com/company/bichinhosdati/',
    alt: 'Linkedin',
    icon: LinkedinIconComponent,
  },
  {
    href: '',
    alt: 'Discord',
    icon: DiscordIconComponent,
  },
];
