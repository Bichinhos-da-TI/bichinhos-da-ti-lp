import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';

import { cards } from '../../../../data/testimonials';
import { CardComponent } from './components/card/card.component';
import { NextArrowComponent } from './components/next-arrow/next-arrow.component';
import { BackArrowComponent } from './components/back-arrow/back-arrow.component';
import { CarouselCard } from '../../../interfaces/card';

@Component({
  selector: 'testimonials-carousel',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent,
    NextArrowComponent,
    BackArrowComponent,
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  constructor(private cdr: ChangeDetectorRef) {}

  @ViewChild('carousel', { static: false })
  carousel!: ElementRef<HTMLDivElement>;

  carouselCards = [...cards];
  cardId: number = 1;
  currentCardIndex: number = 1;
  translateX: number = 0;
  transitionTime: number = 0.5;
  cardsAddedCount: number = 1;
  indexCount: number = 0;

  get cards(): CarouselCard[] {
    return this.carouselCards;
  }

  get cardsLength(): number {
    return this.carouselCards.length;
  }

  get transform(): string {
    return `translate3d(${this.translateX}px, 0px, 0px)`;
  }

  get transition(): string {
    return `transform ${this.transitionTime}s ease-out`;
  }

  get getCardsPx() {
    return this.carousel.nativeElement.clientWidth / 3;
  }

  async previous(): Promise<void> {
    const nextIndex = --this.currentCardIndex;
    const cardsPx = this.getCardsPx - 6;

    if (nextIndex === 0) {
      await this.addCardsAtStart();

      setTimeout(() => {
        this.currentCardIndex = this.cardsLength - cards.length;

        const newCardsPosition =
          (this.currentCardIndex - this.cardsAddedCount + this.indexCount) * -1;

        this.transitionTime = 0.5;
        this.translateX = cardsPx * newCardsPosition;

        this.indexCount++;
        this.cardsAddedCount++;
      }, 1);
      return;
    }

    this.translateX += cardsPx;
    this.currentCardIndex = nextIndex;
  }

  async next(): Promise<void> {
    const nextIndex = this.currentCardIndex + 1;
    const cardsPx = this.getCardsPx - 6;

    if (nextIndex === this.carouselCards.length - 1) {
      await this.addCardsAtEnd();

      this.currentCardIndex = nextIndex;
      this.translateX -= cardsPx;
      return;
    }

    this.translateX -= cardsPx;
    this.currentCardIndex = nextIndex;
  }

  async addCardsAtEnd() {
    const cards = [...this.cards];

    cards.forEach((card) => {
      this.carouselCards.push(card);
    });
  }

  async addCardsAtStart() {
    const reversedCards = [...this.cards];
    const cardsPx = this.getCardsPx - 6;

    this.carouselCards.unshift(...reversedCards);

    this.transitionTime = 0;
    this.currentCardIndex = this.cardsLength - cards.length + 1;
    this.translateX = cardsPx * ((this.currentCardIndex - 1) * -1);
  }
}
