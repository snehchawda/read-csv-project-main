const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://snehchawda:sneh%40pa55w0rd@cluster0.ompwgyh.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

module.exports = db;