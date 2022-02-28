/* eslint-disable @typescript-eslint/no-unused-vars */
import "reflect-metadata";
import "./database";
import "./shared/container";
import "express-async-errors";

import { AppError } from "@errors/AppError";
import express, { NextFunction, Request, Response } from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);
app.use(
  (err: Error, _request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).send({
        message: err.message,
      });
    }

    return response.status(500).send({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("Server is running"));
