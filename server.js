const express = require("express");
const app = express();
const port = 5001;


// Set the view engine to EJS
app.set('view engine', 'ejs');


// Define a route for the homepage
app.get('/', (req, res) => {
  res.render('index', { title: 'Homepage', message: 'Welcome to the homepage!' });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
