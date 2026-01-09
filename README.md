### 📱 User-Auth System
**A robust Node.js authentication system built using the MVC architecture. This project allows users to sign up, log in,** 
**view their profile, and track their login history using MongoDB as the database.**

### 📝 Author
    BY-Anshu Raj

----------------------------------------------------------------------------------------------------------------------

### 🚀 Features
**User Registration:** Secure signup with data persistence.

**User Authentication:** Secure login functionality.

**Profile Management:** Personalized user profile pages.

**Login History:** Tracks and displays a log of user login sessions.

**Dynamic Views:** Rendered using EJS (Embedded JavaScript) templates.

**Database Integration:** Scalable data management with Mongoose and MongoDB.

----------------------------------------------------------------------------------------------------------------------

### 🛠️ Tech Stack
**Before you begin, ensure you have the following installed:**

**Node.js (v18 or higher recommended)**

**MongoDB (Local instance or MongoDB Atlas URI)**

**A code editor like VS Code**

----------------------------------------------------------------------------------------------------------------------

### ⚙️ Prerequisites

**Node.js installed on your machine.**

**MongoDB installed and running locally on mongodb://127.0.0.1:27017/.**

----------------------------------------------------------------------------------------------------------------------

### 📥 Installation & Setup
**1. Clone the repository**

------Bash Command------

git clone <my-repository-url>
cd User-Auth

**2. Install dependencies**

------Bash command-------

npm install

**3. Environment Configuration**
Create a .env file in the root directory and add your credentials:

----Code snippet------

PORT=3000(my port & and you keep your choice).

MONGO_URI= your_mongodb_connection_string SESSION_SECRET=your_random_secret_key(in case of cluster)

&

=localhost:27017(in case of local-DB)

**4. Running the Project**
For development (with auto-reload):

-----Bash Command--------

case I:- From local server

npm run dev

case II: For render-website 

node main.js

case III: By run a file(main.js) on local

npm run start

**Note: Ensure your package.json has "dev": "nodemon main.js" in the scripts section.**

----------------------------------------------------------------------------------------------------------------------

### 🛣️ API Routes
 ____________________________________________________________________
| Method   |        Route      |               Description          |
|----------| ------------------| -----------------------------------|
| **GET**  | `/`               | Landing of Project                 |
| **GET**  | `/signup-form`    | Sign-up to get data from front-end |
| **POST** | `/signup-form`    | Saves new user to DB               |
| **GET**  | `/login`          | Log-in page for user               |
| **POST** | `/login`          | Saves login date for log-history   |
| **GET**  | `/user-profile`   | show user profile                  |
| **POST** | `/update-password`| user can change password           |
| **GET**  | `/login-history`  | user-view to log-history           |
|___________________________________________________________________|

----------------------------------------------------------------------------------------------------------------------

### 📂 Project Structure

```User-Auth/
    ├── config/
    │   └── db.js                     # MongoDB connection logic
    ├── controller/
    |       |── signup.controller.js  # Request handling & logic
    |       |── login.controller.js
    |       └── profile.controller.js
    ├── models/
    │   |── user.js                   # Mongoose Schema (Data structure)
    |   └──LoginHistory.js
    ├── public/                       # Static assets
    │   ├── css/
    │   │   └── style.css
    │   └── media/                    # Images/Icons
    |       |── img.png
    |       |──img.gif
    |       └──user-auth.png      
    ├── routes/
    │   └── auth.routes.js            # URL paths (GET, POST, etc.)
    ├── views/                        # EJS Templates (UI)
    │   ├── 1.index.ejs
    │   ├── 2.sign-up.ejs
    |   ├── 3.login.ejs
    |   ├── 4.user-profile.ejs
    |   └── 5.login-history.ejs
    |
    ├── main.js                      # To run this project
    ├── package.json
    ├── package-lock.json
    ├── (.env)                       # Environment varibale with 
    ├── (.gitignor)
    └── README.md
    
