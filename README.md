# RESTful Blog Application API

## Project Aim

The purpose of this project is to build a RESTful Blog API that allows users to create, read, update, and delete blog posts, manage user accounts, and enable user comments on posts. This API uses Node.js with Express.js as the framework, MongoDB as the database, and JWT (JSON Web Token) for authentication.

---

## Table of Contents

- Project Aim
- Features
- Technologies Used
- API Endpoints
- Database Schema
- Project Structure
- Installation
- Running the Application
- Testing the API
- Security

---

## Features

- User registration and login with JWT-based authentication.
- Create, read, update, and delete (CRUD) blog posts.
- Add comments to blog posts.
- Role-based access control for managing posts and comments.
- Error handling and input validation.
- Protected routes requiring authentication for certain actions (e.g., creating or deleting posts).
- Unit and integration testing.

---

## Technologies Used

- **Node.js:** JavaScript runtime environment for server-side development.
- **Express.js:** Web framework for building RESTful APIs.
- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** ODM (Object Data Modeling) for MongoDB.
- **JWT:** For secure user authentication and authorization.
- **Postman:** API testing tool.
- **bcrypt.js:** To hash and compare passwords.

---

## API Endpoints

### Authentication

    **Method & Endpoint**             **Description**                 **Authentication**
- [] `POST /api/auth/register`        Register a new user               Public
- [] `POST /api/auth/login`           Login and get JWT                 Private

### Blog Posts

    **Method & Endpoint**             **Description**                 **Authentication**
- [] `POST /api/posts`                Create a new blog post            Private
- [] `GET /api/posts`                 Get all blog posts                Public
- [] `GET /api/posts/:id`             Get single post by Id             Public
- [] `PUT /api/posts/:id`             Update Post by Id                 Private
- [] `DELETE Delete a blog post`      Delete Blog post                  Private

### Comments

    **Method & Endpoint**             **Description**                 **Authentication**
- [] `POST /api/comments/:postId`     Add a comment to a blog post      Public
- [] `GET /api/comments/:postId`      Get all comments on a post        Public
- [] `DELETE /api/comments/:commentId`Delete Comment                    Private

---

## Database Schema

### Users Collection

```json

{
  "_id": "ObjectId",
  "name": "String",
  "email": "String",
  "password": "String",
  "role": "String" // Either 'user' or 'admin'
}

```

### Posts Collection

```json

{
  "_id": "ObjectId",
  "title": "String",
  "content": "String",
  "author": "ObjectId", // Reference to Users collection
  "created_at": "Date",
  "updated_at": "Date"
}

```

### Comments Collection

```json

{
  "_id": "ObjectId",
  "postId": "ObjectId", // Reference to Posts collection
  "content": "String",
  "author": "ObjectId", // Reference to Users collection
  "created_at": "Date"
}

```

----


## Project Structure

```bash

.blog_application
├── controllers
│   ├── authController.js      # Handles user registration and login
│   ├── postController.js      # Handles blog posts CRUD operations
│   └── commentController.js   # Handles comments on posts
│
├── middleware
│   ├── authMiddleware.js      # Middleware for JWT authentication
│   └── roleMiddleware.js      # Middleware for role-based access control
│
├── models
│   ├── User.js                # User schema/model
│   ├── Post.js                # Post schema/model
│   └── Comment.js             # Comment schema/model
│
├── routes
│   ├── authRoutes.js          # Routes for authentication
│   ├── postRoutes.js          # Routes for posts
│   └── commentRoutes.js       # Routes for comments
│
├── validations
    ├── authValidation.js          # Validation for authentication data
│   ├── postValidation.js          # Validation for posts data
│   └── commentValidation.js       # Validation for comments data
|
├── services
│   └── emailService.js            # Sending mail
│
├── config
│   └── db.js                  # MongoDB connection setup
│
├── .env                       # Environment variables
├── index.js                   # Main entry point for the server
└── package.json               # Project metadata and dependencies

```

## Installation

### 1. Clone the repository:

```bash

git clone https://github.com/omkarRanu3625/Blog_application.git
cd Blog_application.git

```

### 2. Install dependencies:

```bash 

npm install

```

### 3. Set up environment variables:
  Create a `.env` file in the root directory and add the following:

```bash

PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key

```

### 4. Start the server:

```bash

npm start

```

---


## Running the Application
 
 After starting the server, the application should be running on
 **http://localhost:5000**

---

## Testing the API

To test the API, you can use **Postman** or **cURL**. Refer to the detailed **API Endpoints** section to send requests. Ensure that you use a valid JWT token for protected routes by logging in a user.

Example with **cURL**:

### Register a User:
```bash

curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "johndoe@example.com", "password": "password123"}'

```

### Login a User:
```bash

curl -X POST http://localhost:5000/api/auth/login -H "Content-Type: application/json" -d '{"email": "johndoe@example.com", "password": "password123"}'

```

### Get all Posts
```bash

curl -X GET http://localhost:5000/api/posts

```
For more testing, you can use **Postman** to perform requests and test the endpoints easily.

---

## Security

- **JWT Authentication:** The API uses JWT for user authentication. A JWT token is required to access certain routes like creating, updating, or deleting blog posts.
- **Password Hashing:** User passwords are securely hashed using bcrypt before being stored in the database.
- **Role-Based Access Control:** Only the author of a post or an admin can update or delete posts/comments.

---











