import express from 'express';
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, beautiful world!')
});


app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server listening at http://localhost:${ port }`);
});