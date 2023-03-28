// Dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const path = require('path');


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// Set up the sequelize session connection 
const sequelize = require('./config/connection');
const sequelizeStore = require('connect-session-sequelize')(session.Store);

const hbs = exphbs.create({ helpers });

const session = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 30*60*1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  rolling: true,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  })
}

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  // Starts the server to begin listening
  app.listen(PORT, () => console.log('Server listening on: http://localhost:' + PORT));
  });
