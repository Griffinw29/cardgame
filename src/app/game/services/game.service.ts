import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }
//  https://dev.to/miketalbot/real-world-javascript-map-reduce-solving-the-poker-hand-problem-3eie
// example input     const input = "AH KS TC 9D 3S" // Something like this
order = "23456789TJQKA"
 getHandDetails(hand: string) {
    const cards = hand.split(" ");
    const faces = cards.map(a => String.fromCharCode(77 - this.order.indexOf(a[0]))).sort()
    const suits = cards.map(a => a[1]).sort()
    const counts = faces.reduce(count, {})
    const duplicates: any = Object.values(counts).reduce(count, {});
    const flush = suits[0] === suits[4]
    const first = faces[0].charCodeAt(0)
    const straight = faces.every((f, index) => f.charCodeAt(0) - first === index)
    let rank =
        (flush && straight && 1) ||
        (duplicates[4] && 2) ||
        (duplicates[3] && duplicates[2] && 3) ||
        (flush && 4) ||
        (straight && 5) ||
        (duplicates[3] && 6) ||
        (duplicates[2] > 1 && 7) ||
        (duplicates[2] && 8) ||
        9

    return { rank, value: faces.sort(byCountFirst).join("") }

    function byCountFirst(a: any, b: any) {
        //Counts are in reverse order - bigger is better
        const countDiff = counts[b] - counts[a]
        if (countDiff) return countDiff // If counts don't match return
        return b > a ? -1 : b === a ? 0 : 1
    }

    function count(c:any, a:any) {
        c[a] = (c[a] || 0) + 1
        return c
    }
}

 compareHands(h1: string, h2: string) {
    let d1 = this.getHandDetails(h1)
    let d2 = this.getHandDetails(h2)
    if (d1.rank === d2.rank) {
        if (d1.value < d2.value) {
            return "WIN"
        } else if (d1.value > d2.value) {
            return "LOSE"
        } else {
            return "DRAW"
        }
    }
    return d1.rank < d2.rank ? "WIN" : "LOSE"
}

}
