const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname + '/../client/dist'));
});


app.listen(port, () => {
  console.log(`server listening at http://localhost:${ port }`);
});