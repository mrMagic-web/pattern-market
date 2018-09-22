const express = require('express');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const products = require('./routes/api/products');
const posts = require('./routes/api/posts'); 

const app = express();
const PORT = process.env.PORT || 5000;

//Connect to MongoDB
mongoose.connect(db)
    .then(() => console.log('mongodb connected'))
    .catch(err => console.log(err));

//Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.use('/api/products', products);

app.get('/', (req, res) => {
    res.send('hello geko');
});

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

