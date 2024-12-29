import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HighlightImpactProjectsComponent } from '../../components/highlight-impact-projects/highlight-impact-projects.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutUsComponent,
    HighlightImpactProjectsComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
