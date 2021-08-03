import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent implements OnInit {
  @Input()
  cards: Card[] = [];
  constructor(public gameService: GameService) {
    console.log(gameService.deal(2, this.gameService.deck));
  }

  ngOnInit(): void {
    this.gameService.deal(2, this.gameService.deck);
  }

  cardPath(index: number): string {
    return `/assets/cards/${this.cards[index].value
      .toString()
      .toUpperCase()}${this.cards[index].suit.toString().toUpperCase()}.svg`;
  }
}
