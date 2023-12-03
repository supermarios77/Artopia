// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  profilePicture: { type: String, default: 'https://prod-cms.scouts.org.uk/media/14811/panda.png?width=1800' },
  feed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const User = mongoose.model('User', userSchema);

export default User;