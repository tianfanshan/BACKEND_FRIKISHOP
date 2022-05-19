const express = require('express');
const router = require('./routes/users');
const app = express();
const port = 8080;

app.use(express.json());

app.use('/users', require('./routes/users'))

app.listen(port, () => console.log(`Servidor levantado sobre el puerto ${port}`))