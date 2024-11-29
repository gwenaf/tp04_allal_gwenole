import { Injectable, signal, WritableSignal } from '@angular/core';
import { Card } from '../card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards: WritableSignal<Card[]> = signal<Card[]>([]);

  addCard(card: Card) {
    this.cards.update((cards: Card[]) => {
      card.id = cards.length + 1;
      return [...cards, card];
    });
  }

  get cards$() {
    return this.cards.asReadonly();
  }
}
