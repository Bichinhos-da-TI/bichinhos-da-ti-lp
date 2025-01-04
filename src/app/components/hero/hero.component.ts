import { Component, ComponentRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { SectionDividerComponent } from '../layout/section-divider/section-divider.component';
import { LeadFormComponent } from '../lead-form/lead-form.component';
import { FormOverlay } from 'src/app/lib/overlay/form-overlay';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, SectionDividerComponent, OverlayModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  formOverlay = new FormOverlay();

  openModal = () => this.formOverlay.openModal();
}
