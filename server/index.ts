import express from 'express'
const app = express();


app.listen(3000, () => {
  console.log('Server running on port http://localhost:3000');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});



console.log('Server running on port 3000');
