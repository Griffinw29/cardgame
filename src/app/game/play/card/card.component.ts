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
  constructor() { }

  ngOnInit(): void {
  }

  cardPath(index: number): string {
    return `/assets/card/${this.cards[index].suit}${this.cards[index].value}.svg`
  }

}
