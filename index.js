const express = require('express');
const app = express();
const routes = require('./src/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes(app);
app.listen(5000, () => console.log('Server is running'));
