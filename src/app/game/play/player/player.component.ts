import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { Player } from 'src/app/models/player.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styles: [
    ' margin-bottom: auto; display: flex; flex-wrap: wrap; justify-content: end;',
  ],
  providers: [GameService],
})
export class PlayerComponent implements OnInit {
  @Input()
  player: Player = {
    id: '',
    bet: 0,
    cards: [],
    currentlyActive: false,
    money: 0,
    name: 'unnamed',
  };
  constructor(private gameService: GameService) {}

  ngOnInit(): void {}
}
