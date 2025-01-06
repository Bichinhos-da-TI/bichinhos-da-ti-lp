import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';
import emailjs from '@emailjs/browser';

import { CloseButtonComponent } from '../layout/close-button/close-button.component';
import { SpinnerComponent } from '../layout/spinner/spinner.component';

@Component({
  selector: 'app-lead-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CloseButtonComponent,
    OverlayModule,
    SpinnerComponent,
  ],
  templateUrl: './lead-form.component.html',
  styleUrl: './lead-form.component.css',
})
export class LeadFormComponent {
  @Input() closeOverlay!: () => void;

  isOpen: boolean = false;
  loading: boolean = false;

  serviceId = _NGX_ENV_.NG_APP_EMAIL_SERVICE_ID;
  templateId = _NGX_ENV_.NG_APP_EMAIL_TEMPLATE_ID;
  publicKey = _NGX_ENV_.NG_APP_EMAIL_PUBLIC_KEY;

  public sendEmail(e: Event) {
    this.setLoading(true);

    emailjs
      .sendForm(this.serviceId, this.templateId, e.target as HTMLFormElement, {
        publicKey: this.publicKey,
      })
      .then(() => {
        this.closeOverlay();
        this.setLoading(false);
      });
  }

  setIsOpen(value: boolean) {
    this.isOpen = value;
  }

  get isLoading() {
    return this.loading;
  }

  setLoading(value: boolean) {
    this.loading = value;
  }
}
