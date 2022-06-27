// steps: in terminal
// npm init
// npm install express
// npm install pug

// This is tut75, tut73, tut74
// 25 june 2022
// tut72: Backend Tutorial: Dance Website using pure pug + NodeJs

// localhost   // in chrome
const express = require("express")
const path = require("path")
const app = express()
const port = 80

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))   // for servering static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug')  // set the template engine as pug
app.set('views', path.join(__dirname, 'views'))  // set the views directory, views or template

// ENDPOINT
app.get('/', (req, res)=>{
    const params = { }
    res.status(200).render('index.pug', params)
})

// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`)
})

