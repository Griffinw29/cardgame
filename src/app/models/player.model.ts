export interface Player {
    id: string;  //match currently logged in player by this
    name: string;
    bet: number;
    money: number;
    cards: Card[];
    currentlyActive: boolean;
}

export interface Card {
    suit: 'D' | 'C' | 'S' | 'H';
    value: number | 'T' | 'J' | 'K' | 'Q';
}

export interface Game {
  id: string;
  players: Player[];
  active: boolean;
  pot: number;
  community: Card[]
}

