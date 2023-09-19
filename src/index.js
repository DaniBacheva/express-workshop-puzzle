const express = require ('express');

const expressConfig = require ('./config/expressConfig');
const handlebaresConfig = require ('./config/handlebarsCongig');
const homeController = require ('./controllers/homeController');

const app = express();

const PORT = 5050;

expressConfig(app);
handlebaresConfig(app);

app.use(homeController);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))