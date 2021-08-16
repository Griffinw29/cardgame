import { Card } from './card.model';

export interface Player {
  id: string; //match currently logged in player by this
  name: string;
  bet: number;
  money: number;
  cards: Card[];
  currentlyActive: boolean;
  check: boolean;
}
