import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json(
    { limit: '50mb'}
))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async(req, res, next) => {
    res.send('HELLO from DALL-E!');
})

const startServer = async () => {

    connectDB('mongodb+srv://clixtersin:Rf8nh2yUfe9bmIbL@cluster0.t5mpvio.mongodb.net/?retryWrites=true&w=majority')
    app.listen(8080, () => console.log('Server has started on port http://localhost:8080'))
}


startServer()