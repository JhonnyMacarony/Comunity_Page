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

app.get("/settings", (req, res) =>{
    res.render("layouts/settings.ejs")
})

app.set("view engine", "ejs")
app.set("views", __dirname + '/views')
app.set('layout', 'layouts/event')
app.use(expressLayouts)
app.use(express.static('public'))

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)
console.log('The server is running on port 3000')