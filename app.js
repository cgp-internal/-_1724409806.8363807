const express = require('express');
const app = express();
const { apiRouter } = require('./routes/api');

app.use(express.json());
app.use('/api', apiRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});