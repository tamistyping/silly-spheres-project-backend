import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import starRoutes from "../../routes/stars.js";
import planetRoutes from "../../routes/planets.js";
import userRoutes from "../../routes/users.js";

const api = express();
const router = express.Router();

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

router.use("/stars", starRoutes);
router.use("/planets", planetRoutes);
router.use("/users", userRoutes);

app.get('/', (req, res) => {
    console.log('Hello World')
    res.sendStatus(200)
  })

api.use("/api/", router);

export const handler = serverless(api)