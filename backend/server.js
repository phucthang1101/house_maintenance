const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
require('dotenv').config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connected'));

// user route
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/categoryRoute');
const productRoute = require('./routes/productRoute');
const singleServiceRoute = require('./routes/singleServiceRoute');
const formRoutes = require('./routes/formRoute')

//mongoDB


//middlewares
app.use(morgan('dev'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
//cors
if (process.env.NODE_ENV === 'development')
  app.use(cors());


//routes middleware
app.use('/api', authRoute);
app.use('/api', userRoute);
app.use('/api', categoryRoute);
app.use('/api', productRoute);
app.use('/api', singleServiceRoute);
app.use('/api',formRoutes)


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
