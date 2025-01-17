require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const coinRoutes = require('./routes/coinRoutes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/coins", coinRoutes);

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`))
  }).catch(err => console.log(err));

