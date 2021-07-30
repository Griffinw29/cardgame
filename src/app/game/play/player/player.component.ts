import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
@Input()
player: Player = {
  id: '',
  bet: 0,
  cards: [],
  currentlyActive: false,
  money: 0,
  name: 'unnamed'
};
  constructor() { }

  ngOnInit(): void {
  }

}
