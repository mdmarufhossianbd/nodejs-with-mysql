const express = require("express");
const app = express();
// app.use(express.static(path.join))

const home = async (req, res) => {
    try {
        res.status(200).json({message: "Welcome to Server"})
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = {home}