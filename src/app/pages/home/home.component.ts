import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { HighlightImpactProjectsComponent } from 'src/app/components/highlight-impact-projects/highlight-impact-projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutUsComponent,
    TestimonialsComponent,
    HighlightImpactProjectsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
