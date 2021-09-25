require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initializeDBConnection } = require('./db/db.connect');

const { handleError } = require('./middlewares/handleError.middleware');
const { handleRouteNotFound } = require('./middlewares/handleRouteNotFound.middleware');

const authRouter = require('./routes/auth.router');
const tweetRouter = require('./routes/tweet.router');
const userRouter = require('./routes/user.router');
const app = express();

app.use(bodyParser.json());
app.use(cors());
initializeDBConnection();

app.get('/', (req, res) => {
   res.json({ success: true, message: 'Driftchirp - API' });
});
app.use('/api', authRouter);

app.use('/api', userRouter);
app.use('/api', tweetRouter);

app.use(handleRouteNotFound);
app.use(handleError);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
   console.log(`Server Listening on PORT ${PORT}`);
});
