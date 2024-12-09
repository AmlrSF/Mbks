require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const { swaggerUi, swaggerDocs } = require('./config/swagger');

const app = express();


// Middleware
app.use(bodyParser.json());
app.use('/api/books', bookRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// Connect DB and Start Server
connectDB();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
