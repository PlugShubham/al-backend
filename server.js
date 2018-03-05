var express = require("express");
var nedb = require("nedb");
var rest = require("express-nedb-rest");
var cors = require("cors");

var app = express();

const notes_datastore = new nedb({
    filename:"notes.db",
    autoload:true
});
const products_datastore = new nedb({
    filename:"products.db",
    autoload:true
});
const sales_datastore = new nedb({
    filename:"sales.db",
    autoload:true
});

const restAPI = rest();
restAPI.addDatastore("notes",notes_datastore);
restAPI.addDatastore("products",products_datastore);
restAPI.addDatastore("sales",sales_datastore);

app.use(cors());
app.use('/',restAPI);
app.listen(1234);