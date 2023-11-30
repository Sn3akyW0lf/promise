const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contact-us');
const successRoutes = require('./routes/success')
const feedbackController = require('./controllers/feedback')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use('/shop', shopRoutes);

app.use('/contact-us', contactRoutes);

app.use('/success', successRoutes);

app.use(feedbackController.err404);

app.listen(3000);