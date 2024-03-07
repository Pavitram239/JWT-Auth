import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'name is required'],
    },
    price: {
      type: Number,
      required: [true, 'price is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'quantity is required'],
    },
    description: {
      type: String,
      required: [true, 'description is required'],
    },
    image: {
      type: String,
      required: [true, 'image is required'],
    },
  },
  {
    timestamps: false,
    strict: false,
  }
);

export default mongoose.model('Product', productSchema);
