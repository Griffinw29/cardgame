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
