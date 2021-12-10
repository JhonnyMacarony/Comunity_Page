if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")

const indexRouter = require('./routes/index')

app.get("/", (req, res) =>{
    res.render("layouts/layout.ejs")
})

app.get("/event", (req, res) =>{
    res.render("layouts/event.ejs")
})

app.get("/news", (req, res) =>{
    res.render("layouts/news.ejs")
})

app.get("/contact", (req, res) =>{
    res.render("layouts/contact.ejs")
})

app.get("/store", (req, res) =>{
    res.render("layouts/store/store-page.ejs")
})

app.get("/informations", (req, res) =>{
    res.render("layouts/informations.ejs")
})

app.get("/store/snacks", (req, res) =>{
    res.render("layouts/store/snacks/snack-page.ejs")
})

app.get("/store/candies", (req, res) =>{
    res.render("layouts/store/candies/candy-page.ejs")
})

app.set("view engine", "ejs")
app.set("views", __dirname + '/views')
app.set('layout', 'layouts/event')
app.use( express.static( "public" ) );
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
console.log('The server is running on port 3000')