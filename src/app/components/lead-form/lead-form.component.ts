import { Component, Input, input } from '@angular/core';

import { CloseButtonComponent } from '../layout/close-button/close-button.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [CommonModule, CloseButtonComponent, OverlayModule],
  templateUrl: './lead-form.component.html',
  styleUrl: './lead-form.component.css',
})
export class LeadFormComponent {
  @Input() closeOverlay!: () => void;

  isOpen: boolean = false;

  setIsOpen(value: boolean) {
    this.isOpen = value;
  }
}
