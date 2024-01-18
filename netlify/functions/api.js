import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import serverless from "serverless-http";
import express from "express";

import starRoutes from "../../routes/stars";
import planetRoutes from "../../routes/planets";
import userRoutes from "../../routes/users";

import dotenv from "dotenv";
dotenv.config();

const api = express();
const router = express.Router();

api.use(cors());
api.use(express.json());
api.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

router.use("/stars", starRoutes);
router.use("/planets", planetRoutes);
router.use("/users", userRoutes);

api.use("/api/", router);

export const handler = serverless(api)