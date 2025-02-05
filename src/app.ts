import express from 'express';
import cors from 'cors';
import indexRouter from './interface/routes/indexRoutes';
import connectDB from './infrastructure/database/connection';
import cookieParser from 'cookie-parser';

///////////////////////////////////////////////////////////////////////////////////
// Create an instance of the Express application
///////////////////////////////////////////////////////////////////////////////////
const app = express();

///////////////////////////////////////////////////////////////////////////////////
// Database Connection
///////////////////////////////////////////////////////////////////////////////////
connectDB();

///////////////////////////////////////////////////////////////////////////////////
// Middlewares
///////////////////////////////////////////////////////////////////////////////////
app.use(express.static('public')); // Middleware to serve static files (Like the book covers)
app.use(express.json()); // Middleware to parse incoming requests with JSON payloads
app.use(cookieParser()); // Middleware to parse incoming request with cookies

///////////////////////////////////////////////////////////////////////////////////
// Configure CORS (Cross-Origin Resource Sharing)
///////////////////////////////////////////////////////////////////////////////////
app.use(cors({
    // Allow requests from any origin (for development purposes)
    origin: 'http://localhost:5173',
    credentials: true
}));

///////////////////////////////////////////////////////////////////////////////////
// Default route to provide a welcome message and basic information
///////////////////////////////////////////////////////////////////////////////////
app.get('/', (request, response) => {
    response.json({
        message: 'Welcome to the BooksApp API',
        info: 'Navigate to /api to see the API endpoints'
    });
});

///////////////////////////////////////////////////////////////////////////////////
// Configuring Routes
///////////////////////////////////////////////////////////////////////////////////
app.use('/api', indexRouter); // All routes starting with /api will be handled by the indexRouter

export default app;
