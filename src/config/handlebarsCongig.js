const handlebars = require('express-handlebars');

function handlebaresConfig (app) {

    // handlebares config
app.engine('hbs', handlebars.engine({
    extname:'hbs',
}));
app.set('view engine', 'hbs');

//set path to views
app.set('views', 'src/views');

}

module.exports= handlebaresConfig;
