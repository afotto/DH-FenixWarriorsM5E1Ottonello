const express = require('express')
const app = express()
//Gerentes de ruteo
const homeRouter = require('./routes/homeRouter');
// const productRouter = require('./routes/productRouter');
// const userRouter = require('./routes/homeRouter');

const port = process.env.PORT;
const path = require('path');

console.log('Entrega obligatoria Andrés Ottonello M5')

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/', homeRouter);
// app.use('/', userRouter);
// app.use('/product', productRouter);

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.get('/login', (req, res) => {
//     res.render('login');
// });

// app.get('/register', (req, res) => {
//     res.render('register');
// });

app.listen(port || 3001, () => {
    console.log('Example app listening on port ');
});
