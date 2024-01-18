import mongoose from 'mongoose';

const starSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  }
});

const Star = mongoose.model('Stars', starSchema);

export default Star;