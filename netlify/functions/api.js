import 'dotenv/config'
import express, { Router } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import serverless from 'serverless-http'

import starRoutes from "../../routes/stars.js";
import planetRoutes from "../../routes/planets.js";
import userRoutes from "../../routes/users.js";

const api = express();

api.use(cors());
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

const router = Router()

router.use("/stars", starRoutes);
router.use("/planets", planetRoutes);
router.use("/users", userRoutes);

api.get('/', (req, res) => {
    console.log('Hello World')
    res.sendStatus(200)
  })

api.use("/api/", router);

export const handler = serverless(api)