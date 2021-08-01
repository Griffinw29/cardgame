import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input()
  cards: Card[] = [];
  constructor() {
    console.log(this.cards);
  }

  ngOnInit(): void {
  }

  cardPath(index: number): string {
    return `/assets/cards/${this.cards[index].value.toString().toUpperCase()}${this.cards[index].suit.toString().toUpperCase()}.svg`
  }

}
