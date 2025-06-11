// /**
//  * Import function triggers from their respective submodules:
//  *
//  * import {onCall} from "firebase-functions/v2/https";
//  * import {onDocumentWritten} from "firebase-functions/v2/firestore";
//  *
//  * See a full list of supported triggers at https://firebase.google.com/docs/functions
//  */

// import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript

// // export const helloWorld = onRequest((request, response) => {
// //   logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });
import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import next from "next";
import {Request, Response} from "express";

const dev = process.env.NODE_ENV !== "production";
const app = next({dev, conf: {distDir: ".next"}});
const handle = app.getRequestHandler();

export const nextApp = onRequest(
  {timeoutSeconds: 60, memory: "1GiB"},
  async (req: Request, res: Response) => {
    logger.info("Next.js request received", {structuredData: true});
    await app.prepare();
    handle(req, res);
  }
);
