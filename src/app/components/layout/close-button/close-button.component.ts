import { Component, input } from '@angular/core';

@Component({
  selector: 'app-close-button',
  standalone: true,
  imports: [],
  templateUrl: './close-button.component.html',
})
export class CloseButtonComponent {
  color = input.required<string>();
}
