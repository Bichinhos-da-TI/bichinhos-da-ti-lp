import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalStateService {
  private isModalOpen = false;

  getModalState(): boolean {
    return this.isModalOpen;
  }

  setModalOpen(): void {
    this.isModalOpen = true;
  }

  setModalClosed(): void {
    this.isModalOpen = false;
  }
}
