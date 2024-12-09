# 📚 Book Management API

A RESTful API for managing books, built with **Express.js** and **MongoDB Atlas**.

---

## ✨ Features

✅ **Add a new book**  
✅ **Retrieve a list of all books**  
✅ **Get details of a specific book**  
✅ **Update a book's details**  
✅ **Delete a book**  
✅ **Basic authentication to secure endpoints**  
✅ **Swagger documentation for API**  

---

## 📜 API Endpoints

- ✅ **Add a new book**  
  - **Endpoint**: `POST /api/books`  
  - **Authentication**: Required  

- ✅ **Retrieve all books**  
  - **Endpoint**: `GET /api/books`  
  - **Authentication**: Required  

- ✅ **Get details of a specific book**  
  - **Endpoint**: `GET /api/books/:id`  
  - **Authentication**: Required  

- ✅ **Update a book's details**  
  - **Endpoint**: `PUT /api/books/:id`  
  - **Authentication**: Required  

- ✅ **Delete a book**  
  - **Endpoint**: `DELETE /api/books/:id`  
  - **Authentication**: Required  


## 🛠️ Prerequisites

Make sure you have these installed:

- Node.js (v14 or higher)  
- Git  
- MongoDB Atlas (Sign up and configure a database instance)  

---

## 🚀 Installation & Setup

### Clone the repository:
```bash
git clone <repository_url>
cd book-management-api
```

### Install dependencies:
```bash
npm install
```

### Install dependencies:
**Create a .env file in the root directory.**
**Add the following configuration:**
```bash
PORT=5000
MONGO_URI=<your_mongo_atlas_connection_string>
```

### Start the server:

```bash
npm install
```
