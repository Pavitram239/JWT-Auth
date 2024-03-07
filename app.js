import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

// routes
import productRoutes from './routes/product.route.js';
import userRoutes from './routes/user.route.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api/v1/products', productRoutes);
app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 5100;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('DB Connected');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
