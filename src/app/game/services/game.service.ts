import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BaseDirective2 } from '@angular/flex-layout';
import { Card } from 'src/app/models/card.model';
import { Game } from 'src/app/models/game.model';
import { Player } from 'src/app/models/player.model';
import { PlayerComponent } from '../play/player/player.component';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  deck: Card[] = [
    {
      suit: 'C',
      value: 2,
    },
    {
      suit: 'C',
      value: 3,
    },
    {
      suit: 'C',
      value: 4,
    },
    {
      suit: 'C',
      value: 5,
    },
    {
      suit: 'C',
      value: 6,
    },
    {
      suit: 'C',
      value: 7,
    },
    {
      suit: 'C',
      value: 8,
    },
    {
      suit: 'C',
      value: 9,
    },
    {
      suit: 'C',
      value: 'T',
    },
    {
      suit: 'C',
      value: 'K',
    },
    {
      suit: 'C',
      value: 'A',
    },
    {
      suit: 'S',
      value: 2,
    },
    {
      suit: 'S',
      value: 3,
    },
    {
      suit: 'S',
      value: 4,
    },
    {
      suit: 'S',
      value: 5,
    },
    {
      suit: 'S',
      value: 6,
    },
    {
      suit: 'S',
      value: 7,
    },
    {
      suit: 'S',
      value: 8,
    },
    {
      suit: 'S',
      value: 9,
    },
    {
      suit: 'S',
      value: 'T',
    },
    {
      suit: 'S',
      value: 'K',
    },
    {
      suit: 'S',
      value: 'A',
    },
    {
      suit: 'D',
      value: 2,
    },
    {
      suit: 'D',
      value: 3,
    },
    {
      suit: 'D',
      value: 4,
    },
    {
      suit: 'D',
      value: 5,
    },
    {
      suit: 'D',
      value: 6,
    },
    {
      suit: 'D',
      value: 7,
    },
    {
      suit: 'D',
      value: 8,
    },
    {
      suit: 'D',
      value: 9,
    },
    {
      suit: 'D',
      value: 'T',
    },
    {
      suit: 'D',
      value: 'K',
    },
    {
      suit: 'D',
      value: 'A',
    },
    {
      suit: 'H',
      value: 2,
    },
    {
      suit: 'H',
      value: 3,
    },
    {
      suit: 'H',
      value: 4,
    },
    {
      suit: 'H',
      value: 5,
    },
    {
      suit: 'H',
      value: 6,
    },
    {
      suit: 'H',
      value: 7,
    },
    {
      suit: 'H',
      value: 8,
    },
    {
      suit: 'H',
      value: 9,
    },
    {
      suit: 'H',
      value: 'T',
    },
    {
      suit: 'H',
      value: 'K',
    },
    {
      suit: 'H',
      value: 'A',
    },
  ];
  constructor() {}
  //  https://dev.to/miketalbot/real-world-javascript-map-reduce-solving-the-poker-hand-problem-3eie
  // example input     const input = "AH KS TC 9D 3S" // Something like this
  order = '23456789TJQKA';
  getHandDetails(hand: string) {
    const cards = hand.split(' ');
    const faces = cards
      .map((a) => String.fromCharCode(77 - this.order.indexOf(a[0])))
      .sort();
    const suits = cards.map((a) => a[1]).sort();
    const counts = faces.reduce(count, {});
    const duplicates: any = Object.values(counts).reduce(count, {});
    const flush = suits[0] === suits[4];
    const first = faces[0].charCodeAt(0);
    const straight = faces.every(
      (f, index) => f.charCodeAt(0) - first === index
    );
    let rank =
      (flush && straight && 1) ||
      (duplicates[4] && 2) ||
      (duplicates[3] && duplicates[2] && 3) ||
      (flush && 4) ||
      (straight && 5) ||
      (duplicates[3] && 6) ||
      (duplicates[2] > 1 && 7) ||
      (duplicates[2] && 8) ||
      9;

    return { rank, value: faces.sort(byCountFirst).join('') };

    function byCountFirst(a: any, b: any) {
      //Counts are in reverse order - bigger is better
      const countDiff = counts[b] - counts[a];
      if (countDiff) return countDiff; // If counts don't match return
      return b > a ? -1 : b === a ? 0 : 1;
    }

    function count(c: any, a: any) {
      c[a] = (c[a] || 0) + 1;
      return c;
    }
  }

  compareHands(h1: string, h2: string) {
    let d1 = this.getHandDetails(h1);
    let d2 = this.getHandDetails(h2);
    if (d1.rank === d2.rank) {
      if (d1.value < d2.value) {
        return 'WIN';
      } else if (d1.value > d2.value) {
        return 'LOSE';
      } else {
        return 'DRAW';
      }
    }
    return d1.rank < d2.rank ? 'WIN' : 'LOSE';
  }

  getShuffleDeck(): Card[] {
    let shuffleDeck = JSON.parse(JSON.stringify(this.deck));

    for (let i = shuffleDeck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleDeck[i], shuffleDeck[j]] = [shuffleDeck[j], shuffleDeck[i]];
    }
    return shuffleDeck;
  }

  deal(cards: number, deck: Card[] = []): Card[] {
    let dealtCards: Card[] = [];
    for (let i = 0; i < cards; i++) {
      dealtCards.push(deck.shift()!);
    }
    return dealtCards;
  }

  newGame(): Game {
    let shuffleDeck = this.getShuffleDeck();
    let newGame: Game = {
      id: '1',
      players: [],
      active: true,
      pot: 0,
      community: this.deal(5, shuffleDeck),
      round: 0,
    };

    for (let i = 0; i < 2; i++) {
      newGame.players.push({
        id: i.toString(),
        name: 'Jason',
        bet: 10,
        money: 100,
        cards: this.deal(2, shuffleDeck),
        currentlyActive: true,
      });
    }
    return newGame;
  }

  raise() {
    let minRaise = 5;
    this.newGame().pot += 5;
    this.newGame().players[0].money -= 5;
  }

  addWinnings(h1: string, h2: string) {
    if (this.getHandDetails(h1) > this.getHandDetails(h2)) {
      this.newGame().players[0].money = +this.newGame().pot;
    } else if (this.getHandDetails(h1) > this.getHandDetails(h2)) {
      this.newGame().players[1].money = +this.newGame().pot;
    } else {
    }
  }
}
