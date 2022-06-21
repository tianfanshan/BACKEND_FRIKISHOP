const express = require('express');
const { typeError } = require('./middelware/errors');
const app = express();
const port = 8080;

const cors = require('cors')
app.use(express.static('./public'));

app.use(cors())

app.use(express.json());

app.use('/users', require('./routes/users'));
app.use('/sets', require('./routes/sets'));
app.use('/categories', require('./routes/categories'));
app.use('/orders', require('./routes/orders'));
app.use('/products', require('./routes/products'));
app.use('/reviews', require('./routes/reviews'));

app.use(typeError)

app.listen(port, () => console.log(`Servidor levantado sobre el puerto ${port}`))