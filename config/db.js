import mongoose from 'mongoose'; 

import dotenv from 'dotenv';
dotenv.config();

// MongoDB URL from .env file
const DB = process.env.MONGO_URL;

// connect to MongoDB & connection checking
export const contactDB = () => {
    mongoose.connect(DB)
        .then(() => {
            console.log(`Connected to MongoDB at ${DB}`);
            console.log('Good to go! -> Anshu Raj');
        })
        .catch((err) => {
            console.error(`Could not connect to ${DB}`, err.message);
        });
};
