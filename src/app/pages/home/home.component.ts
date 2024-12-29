import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
<<<<<<< HEAD
import { HighlightImpactProjectsComponent } from '../../components/highlight-impact-projects/highlight-impact-projects.component';
=======
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
>>>>>>> c86e3be4de2131492e2a07f711322df2dcd5a013

@Component({
  selector: 'app-home',
  standalone: true,
<<<<<<< HEAD
  imports: [HeroComponent, AboutUsComponent, HighlightImpactProjectsComponent],
=======
  imports: [HeroComponent, AboutUsComponent, TestimonialsComponent],
>>>>>>> c86e3be4de2131492e2a07f711322df2dcd5a013
  templateUrl: './home.component.html',
})
export class HomeComponent {}
