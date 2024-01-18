const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const serverless = require("serverless-http")
const express = require("express")
const router = express.Router()

const starRoutes = require("../../routes/stars")
const planetRoutes = require("../../routes/planets")
const userRoutes = require("../../routes/users")

require("dotenv").config()

const api = express()

api.use(cors())
api.use(express.json())
api.use(bodyParser.json())

// Connect to MongoDB
mongoose
  .connect(process.env.DBURL)
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error)
  })

router.use("/stars", starRoutes)
router.use("/planets", planetRoutes)
router.use("/users", userRoutes)

api.use("/api/", router)

const handler = serverless(api)
modules.export = { handler }