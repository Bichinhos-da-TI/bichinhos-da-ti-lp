import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDividerComponent } from '../layout/section-divider/section-divider.component';

@Component({
  selector: 'app-highlight-impact-projects',
  standalone: true,
  imports: [CommonModule, SectionDividerComponent],
  templateUrl: './highlight-impact-projects.component.html',
  styleUrl: './highlight-impact-projects.component.css',
})
export class HighlightImpactProjectsComponent {
  containers = [
    {
      title: 'Academy',
      imagem: '/assets/cat.svg',
      descricao:
        'Nosso projeto Academy proporciona aos estudantes cursos especializados voltados para a capacitação na área de tecnologia. Aqui, os participantes têm a chance de aprimorar suas habilidades práticas que refletem o real mercado de trabalho, além de receber mentoria coletiva de profissionais experientes de forma gratuita.',
    },
    {
      title: 'Dream Jobs',
      imagem: '/assets/duck.svg',
      descricao:
        'O projeto Dream Job oferece orientações de tech recruiters e mentorias especializadas. Os participantes também aprimoram suas soft skills, recebem dicas para construção de portfólio e melhoram seu perfil no LinkedIn. É a iniciativa ideal para profissionais qualificados em busca de retorno ao mercado ou de transição de carreira.',
    },
    {
      title: 'Hackathons',
      imagem: '/assets/frog.svg',
      descricao:
        'Na Bichinhos, acreditamos em conectar nossos participantes com os desafios reais domercado por meio de emocionantes hackathons. Durante esses eventos, squads sãoincentivadas a desenvolver soluções tecnológicas inovadoras em um curto espaço detempo. É uma oportunidade única para crescer, colaborar com mentes brilhantes e deixarsua marca.',
    },
  ];
}
