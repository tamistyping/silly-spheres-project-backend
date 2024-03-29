import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import favicon from 'serve-favicon'

import starRoutes from "./routes/stars.js";
import planetRoutes from "./routes/planets.js";
import userRoutes from "./routes/users.js";

const app = express();
const port = 3000

app.use(cors());
app.use(bodyParser.json());
app.use(favicon('public/favicon.png'))

// Connect to MongoDB
mongoose.connect(process.env.DBURL)

app.use("/stars", starRoutes);
app.use("/planets", planetRoutes);
app.use("/users", userRoutes);

app.get('/', (req, res) => {
  console.log('Hello World')
  res.sendStatus(200)
})

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})