import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  @Input()
  game: Game = {
    active: false,
    community: [],
    id: '',
    players: [],
    pot: 0
  };
  constructor() { }

  ngOnInit(): void {
  }

}
