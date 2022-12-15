const express = require('express');
const dotenv = require("dotenv")
var path=require('path')
dotenv.config();
const hbs = require('express-handlebars');
const dbConnection = require('./config/connection');
const bodyParser = require("body-parser");
const userRouter=require("./routes/userRouter")
const adminRouter=require('./routes/adminRouter')

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs', defaultLayout: 'layout'
})) 

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use("/api/v1/", userRouter);
app.use('/api/v1/admin',adminRouter)
app.listen(process.env.PORT, () => {
    console.log("server connected",process.env.PORT)
});