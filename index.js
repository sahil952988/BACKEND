const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes')
const mongoose = require('mongoose');
const port = 5000;


mongoose.connect('mongodb+srv://sahilacc000:SahilAli@bhadra0.dqraf1d.mongodb.net/Shops').then(() => {

  app.listen(port, () => {
    console.log('listening');
  });
}).catch((err) => {
  console.log(err);
})

//middleware
app.use(express.json());




app.get('/', (req, res) => {
  return res.status(200).json({
    id: 1,
    title: 'lio'
  });
});

app.use(authRoutes);



app.use((req, res) => {
  return res.status(404).json('not found');
});