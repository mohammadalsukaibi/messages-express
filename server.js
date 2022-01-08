const express = require('express');
const path = require('path');
let ejs = require('ejs');
const messages = require('./Messages')

const app = express();

// ejs template engine
app.set('view engine', 'ejs')

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// homepage route
app.get('/', (req, res) => {
    res.render("index", {
        title: "all messages",
        messages
    })
})

// new message route
app.get('/new', (req, res) => {
    res.render("form")
})

// messages routes
app.use('/api/messages', require('./routes/messages'))

// set static folder
// app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))