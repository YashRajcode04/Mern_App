import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';

const app = express();
const port = 8080;

/** Middleware */
app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:3000",
    "https://mern-dfm3qkaav-yashs-projects-4513980c.vercel.app"
  ],
  credentials: true
}));

app.use(morgan('tiny'));
app.disable('x-powered-by'); // hide tech stack

/** Basic route */
app.get('/', (req, res) => {
  res.status(200).json("🏠 Home GET Request successful");
});

/** API routes */
app.use('/api', router);

/** Start server after DB connection */
async function startServer() {
  try {
    await connect(); // Wait for DB connection
    console.log('✅ MongoDB connection established');
    
    app.listen(port, () => {
      console.log(`🚀 Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error.message);
  }
}

startServer();
