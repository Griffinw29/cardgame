import * as functions from "firebase-functions";
import * as cors from "cors";
const corsHandler = cors({origin: true});
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  // this evades cors issues but should likely be done differently
  corsHandler(request, response, () => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send({data: "Hello from Firebase!"});
  });
});

export const handStrength = functions.https.onRequest((request, response) => {
  // this evades cors issues but should likely be done differently
  corsHandler(request, response, () => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send({data: "Hello from Firebase!"});
  });
});
//https://dev.to/miketalbot/real-world-javascript-map-reduce-solving-the-poker-hand-problem-3eie
export const checkHand = functions.https.onRequest((request, response): any => {
  // this evades cors issues but should likely be done differently
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  corsHandler(request, response, () => {});
  const hand = request.params.hand;
  const order = "23456789TJQKA";

  const cards = hand.split(" ");
  // eslint-disable-next-line max-len
  const faces = cards.map((a) => String.fromCharCode([77 - order.indexOf(a[0])])).sort();
  const suits = cards.map((a) => a[1]).sort();
  const counts = faces.reduce(count, {});
  const duplicates = Object.values(counts).reduce(count, {});
  const flush = suits[0] === suits[4];
  const first = faces[0].charCodeAt(0);
  // Also handle low straight
  const lowStraight = faces.join("") === "AJKLM";
  faces[0] = lowStraight ? "N" : faces[0];
  // eslint-disable-next-line max-len
  const straight = lowStraight || faces.every((f, index) => f.charCodeAt(0) - first === index);
  const rank =
          (flush && straight && 1) ||
          (duplicates[4] && 2) ||
          (duplicates[3] && duplicates[2] && 3) ||
          (flush && 4) ||
          (straight && 5) ||
          (duplicates[3] && 6) ||
          (duplicates[2] > 1 && 7) ||
          (duplicates[2] && 8) ||
          9;

  return {rank, value: faces.sort(byCountFirst).join("")};

  // eslint-disable-next-line valid-jsdoc
  /**
   *
   * @param a
   * @param b
   * @returns
   */
  function byCountFirst(a: number, b: number) {
    // Counts are in reverse order - bigger is better
    const countDiff = counts[b] - counts[a];
    if (countDiff) return countDiff; // If counts don't match return
    return b > a ? -1 : b === a ? 0 : 1;
  }
  // eslint-disable-next-line valid-jsdoc
  /**
   *
   * @param c
   * @param a
   * @returns
   */
  function count(c: { [x: string]: any; }, a: string | number) {
    c[a] = (c[a] || 0) + 1;
    return c;
  }
});
