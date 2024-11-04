import { FooterComponent } from '../../footer.component';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'footer-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './footer-link.component.html',
  styleUrl: './footer-link.component.css',
})
export class FooterLinkComponent {
  title = input.required<string>();
  href = input.required<string>();
}
