const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require("mongoose")
const dbConfig = require('./configs/db.config');
const serverConfig = require('./configs/server.config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection;
db.on("error", () => {
    console.log("Error while connecting to MongoDB");
});
db.once("open", () => {
    console.log("Connected to mongoDB");
});


require('./routes/notification.route')(app);

//attach the cron file 
require('./schedulers/emailScheduler');

app.listen(serverConfig.PORT, ()=>{
    console.log(`Server Started At ${serverConfig.PORT}`);
});