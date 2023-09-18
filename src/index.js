const express = require ('express');
const handlebars = require('express-handlebars');

const app = express();

const PORT = 5050;

// handlebares config
app.engine('hbs', handlebars.engine({
    extname:'hbs',
}));
app.set('view engine', 'hbs');

//set path to views
app.set('views', 'src/views');


//routes
app.get('/', (req,res) => {
    res.send('hi');
    res.render('index')
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))