const express = require('express');

const app = express();

const dataBase = require('./models/index');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

//Database test
// dataBase.authenticate()
//     .then(() => console.log('Database connected'))
//     .catch(err => console.log('Error: ' + err));

dataBase.sequelize.sync().then(
    () => {
      console.log("123");
    },
    (err) => console.log(err)
  );


const authorsContoller = require('./controllers/authorController');
const bookController = require('./controllers/bookController')

app.use('/authors', authorsContoller);
app.use('/books', bookController);

app.use((req, res) => {
    res.status(404).json({
      message: "Path not found",
    });
  });


app.listen(PORT, console.log(`This server is running on port: ${PORT}`));