import "dotenv/config";
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcrypt';

const app = express();
const PORT = process.env.PORT || 5000;


app.use(bodyParser.json());
app.use(cors());

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@artopia.4cx78um.mongodb.net/Artopia`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});


const userSchema = new mongoose.Schema({
    username: String,
    hashedPassword: String,
    email: String,
    profilePicture: { type: String, default: './public/default.png' },
    feed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const postSchema = new mongoose.Schema({
    content: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

app.post('/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, hashedPassword, email });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (user && (await bcrypt.compare(password, user.hashedPassword))) {

            res.status(200).json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.put('/user/:userId', async (req, res) => {
    try {
        const { name, profilePicture } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.userId,
            { name, profilePicture },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Fetch user's feed
app.get('/user/:userId/feed', async (req, res) => {
    try {
        const user = await User.findById(req.params.userId).populate('feed');
        res.status(200).json(user.feed);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/user/:userId/followers', async (req, res) => {
  
});


app.get('/user/:userId/following', async (req, res) => {

});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
