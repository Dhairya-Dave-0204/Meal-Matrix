# Meal-Matrix
Meal Matrix is a full-featured food delivery web application built using the MERN (MongoDB, Express, React, Node.js) stack. This platform allows users to browse a variety of food items, add them to their cart, and place orders through a seamless online payment system. On the administrative side, restaurant owners can manage their menu, track orders, and update food items in real time.

## Demo
You can check out the live demo of the blog website here: [Deployed Website](https://imagi-text-eight.vercel.app)

Feel free to explore, create an account, and start experimenting!

## Features
### User Features
- **Browse Menu**: Users can explore a wide range of food items anytime.
- **User Authentication**: Secure signup and login process to place orders.
- **Cart Functionality**: Easily add or remove items from the cart.
- **Online Payment**: Pay securely using integrated payment gateways.
- **Order History**: Users can track their past orders.
- **Responsive UI**: Smooth and user-friendly interface.

### Admin Features
- Dashboard Access: Admins can log in to access the restaurant dashboard.
- Manage Menu:
    Add new food items.
    List all available items.
    Edit or remove items from the menu.
- Order Management:
    View all received orders.
    Update order statuses.

## Technologies Used

**Frontend**
The frontend is developed using React with Vite for optimized performance.
- **React** - Component-based UI library.
- **React Router DOM** - Enables dynamic routing.
- **React Toastify** - Provides elegant notifications.
- **Vite** - Fast and efficient frontend tooling.
- **Axios** - API requests handling.
- **Web3from** - Utility functions for frontend interaction.
- **Tailwind CSS** - Utility-first styling framework for modern UI.

**Backend**
The backend is powered by Express and MongoDB, ensuring a robust and scalable architecture.
- **Express** - Backend framework for handling requests.
- **CORS** - Cross-origin resource sharing.
- **Axios** - HTTP client for making API calls.
- **Stripe** - Secure online payment integration.
- **Bcrypt** - Password hashing for user authentication.
- **Dotenv** - Manages environment variables.
- **Form**-data - Handles multipart form submissions.
- **JSON Web Token (JWT)** - Authentication and security.
- **Mongoose** - ODM for MongoDB interaction.
- **Body-parser** - Parses incoming request bodies.
- **Multer** - Middleware for handling file uploads.
- **Validator** - Validates user input.

## Getting Started
Follow the instructions below to get a local copy of the project up and running.

**Prerequisites**
Ensure you have the following installed on your system:
- Node.js (v16 or above)
- MongoDB
- npm (comes with Node.js)
- Stripe API keys for payment processing

**Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/Dhairya-Dave-0204/ImagiText.git
   cd Meal-Matrix
   ```

2. Backend setup
- Navigate to the backend directory:
  ```bash
  cd backend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Set up environment variables:
  Create a .env file in the backend directory.
  Add the following keys:
  ```bash
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  STRIPE_SECRET_KEY=your_stripe_secret_key
  ```
- Start the backend server:
  ```bash
  npm run server
  ```

3. Frontend Setup and Admin setup
- Navigate to the ADMIN directory:
  ```bash
  cd admin
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the frontend application:
  ```bash
  npm run dev
  ```
- Navigate to the FRONTEND directory:
  ```bash
  cd frontend
  ```
- Install dependencies:
  ```bash
  npm install
  ```
- Start the frontend application:
  ```bash
  npm run dev
  ```

## Usage
- Sign up or log in to your account.
- Browse through the available food items.
- Add items to your cart and proceed to checkout.
- Make a secure payment using Stripe.
- Admins can log in to manage menu items and orders.

## Folder Structure
The project is organized as follows:
```bash
Meal-Matrix/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── .env (ignored in repo)
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── App.js
│   │   ├── main.jsx
│   └── vite.config.js
├── package.json
├── README.md
└── .gitignore
```

## Contributing
We welcome contributions to Meal Matrix! If you'd like to improve this project, follow these steps:
1. Fork the repository.

2. Create a new branch:
  ```bash
  git checkout -b feature/YourFeatureName
```

3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
   
4. Push to the branch:
   ```bash
   git push origin feature/YourFeatureName
   ```

5. Open a pull request.
