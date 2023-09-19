const express = require ('express');

const expressConfig = require ('./config/expressConfig');
const handlebaresConfig = require ('./config/handlebarsCongig');

const app = express();

const PORT = 5050;

expressConfig(app);
handlebaresConfig(app);

//routes
app.get('/', (req,res) => {
    res.render('index');
    
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))