const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const route = require('./app/routes');

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@milk-tea-shop.wegwxvb.mongodb.net/test`);
        console.log('Connect to the database successfully');
    } catch (error) {
        console.log('Connect to the database failure');
        console.log(error);
        process.exit(1);
    }
}

connectDB();

app.use(express.json());
app.use(cors());

route(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
