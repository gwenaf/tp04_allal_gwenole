import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
    selector: 'app-card-list',
    templateUrl: './card-list.component.html',
    standalone: false
})
export class CardListComponent implements OnInit {
  cards$;
  constructor(private cardService: CardService) {
    this.cards$ = this.cardService.cards$;
  }

  ngOnInit() {
    this.cards$ = this.cardService.cards$;
  }
}
