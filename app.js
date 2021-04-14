const express = require('express')
const app = express()

const port = process.env.PORT;
const path = require('path');

console.log('Entrega obligatoria Andrés Ottonello M5')

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.listen(port || 3000, () => {
    console.log('Example app listening on port ');
});
