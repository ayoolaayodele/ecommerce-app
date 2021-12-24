const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Backend is running on ${port}`);
});
