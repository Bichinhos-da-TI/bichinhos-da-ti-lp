import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionDividerComponent } from '../layout/section-divider/section-divider.component';
import { title, advantages } from '../../../data/about-us';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, SectionDividerComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  title = title;
  advantagesList = advantages;
}
