const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");

// Routes
const homeRoutes = require("./routes/homeRoutes");
const { checkConnection } = require("./config/db");
const createAllTable = require("./utils/dbUtils");


// load env variables
dotenv.config()

// express app
const app = express();
// middleware
app.use(cors());
app.use(bodyParser());

// routes
app.use('/', homeRoutes)

// server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async() => {
    console.log(`Server is running on ${PORT}`);
    try {
        await checkConnection()
        await createAllTable()
    } catch (error) {
        console.log("Failed to initialize the database", error);
    }
})