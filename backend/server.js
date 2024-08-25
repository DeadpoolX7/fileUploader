require('dotenv').config();

const express =  require("express");
const path = require("path");
const app = express();
const expressLayouts = require('express-ejs-layouts');

const uploadRoutes = require('./routes/upload.routes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', 'layout');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));


app.use('/', uploadRoutes);

app.listen(8000, ()=>{
    console.log("Running");
});