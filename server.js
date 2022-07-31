const express = require("express");
const bodyParser = require('body-parser');
const serverConfig = require('./configs/server.config');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));





app.listen(serverConfig.PORT, ()=>{
    console.log(`Server Started At ${serverConfig.PORT}`);
})