import express from 'express'; 
import 'dotenv/config';       

const app = express();         

import { contactDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";


const PORT = process.env.PORT; 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//Added Middleware
app.set('view engine', 'ejs'); // for view (ejs files)
app.use(express.static('public')); // for static files (css, js, images)
app.use(express.urlencoded({ extended: true })); // for parsing form data
app.use(express.json()); // for parsing json data

// DB connection
contactDB();

// routes
app.use(authRoutes);



