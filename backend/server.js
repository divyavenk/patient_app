const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');




const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', authRoutes);

// const corsOptions = {
//     origin: 'http://localhost:3000', // or the production URL of your React app
//   };
//   app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost:27017/patient', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// app.get('/api', (req, res) => {
//   res.json({ message: 'Hello from server!' });
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});