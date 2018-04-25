const express = require('express');
// const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.get('/restaurants/:id', function(req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'))
})

app.use(express.static(path.join(__dirname, './public')));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});