import { Card } from "./card.model";
import { Player } from "./player.model";

export interface Game {
  id: string;
  players: Player[];
  active: boolean;
  pot: number;
  community: Card[]
}
