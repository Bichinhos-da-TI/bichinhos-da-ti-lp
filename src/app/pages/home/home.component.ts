import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutUsComponent } from '../../components/about-us/about-us.component';
import { HighlightImpactProjectsComponent } from '../../components/highlight-impact-projects/highlight-impact-projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, AboutUsComponent, HighlightImpactProjectsComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
