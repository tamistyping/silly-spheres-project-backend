import mongoose from 'mongoose';

const planetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  star: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Star',
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
  lengthOfDay: {
    type: Number,
    required: true,
  },
  lengthOfYear: {
    type: Number,
    required: true,
  },
  atmosphere: {
    type: String,
    required: true,
  },
  moons: {
    type: Number,
    required: true,
  }
});

const Planet = mongoose.model('Planet', planetSchema);

export default Planet;