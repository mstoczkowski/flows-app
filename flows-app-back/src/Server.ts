import cookieParser from "cookie-parser";
import morgan from "morgan";
import path from "path";
import helmet from "helmet";

import express, { Request, Response, NextFunction } from "express";
import { BAD_REQUEST } from "http-status-codes";
import "express-async-errors";
const cors = require("cors");

import BaseRouter from "./routes";

// Init express
const app = express();

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// Show routes called in console during development
// if (process.env.NODE_ENV === "development") {
//   app.use(morgan("dev"));
// }

// // Security
// if (process.env.NODE_ENV === "production") {
//   app.use(helmet());
// }

// Add APIs
app.use("/api", BaseRouter);

// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  return res.status(BAD_REQUEST).json({
    error: err.message,
  });
});

/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

// const viewsDir = path.join(__dirname, 'views');
// app.set('views', viewsDir);
// const staticDir = path.join(__dirname, 'public');
// app.use(express.static(staticDir));
// app.get('*', (req: Request, res: Response) => {
//     res.sendFile('index.html', {root: viewsDir});
// });

// Export express instance
export default app;
