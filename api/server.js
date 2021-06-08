/**
 * @TODO: revamp api src to use es6 via babel, babel-preset-env
 */

const cors = require('cors');
const express = require('express');

const app = express();
const PORT = 8080;

const db = require('./models');

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/tutorial.routes')(app);

db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and re-sync db.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
