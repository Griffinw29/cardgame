import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { Game } from 'src/app/models/game.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
})
export class CommunityComponent implements OnInit {
  @Input()
  cards: Card[] = [];
  @Input()
  game: Game = {
    active: false,
    community: [],
    id: '',
    players: [],
    pot: 0,
    round: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
