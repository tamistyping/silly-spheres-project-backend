import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    lastLogin: {
        type: Date,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

export default User;