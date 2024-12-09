📚 Book Management API
A RESTful API for managing books, built with Express.js and MongoDB Atlas.

✨ Features
✅ Add a new book
✅ Retrieve a list of all books
✅ Get details of a specific book
✅ Update a book's details
✅ Delete a book
✅ Basic authentication to secure endpoints
✅ Swagger documentation for API
🛠️ Prerequisites
Make sure you have these installed:

Node.js (v14 or higher)
Git
MongoDB Atlas (Sign up and configure a database instance)
🚀 Installation & Setup
Clone the repository:
bash
Copier le code
git clone <repository_url>
cd book-management-api
Install dependencies:
bash
Copier le code
npm install
Configure Environment Variables
Create a .env file in the root directory
Add the following configuration:
dotenv
Copier le code
PORT=5000
MONGO_URI=<Your MongoDB Atlas URI>
JWT_SECRET=<Your Secret Key>
Start the server:
bash
Copier le code
npm start
🎯 Access the app locally:
API URL: http://localhost:5000
Swagger Documentation: http://localhost:5000/api-docs
🛡️ Authentication
You must include a token using Basic Authentication headers for every secured endpoint.

Format
Set up the Authorization header like so:

http
Copier le code
Authorization: Basic <base64-encoded-username:password>
Replace <base64-encoded-username:password> with your username and password encoded in Base64.

📜 API Endpoints
1. Add a New Book
Endpoint:
http
Copier le code
POST /api/books
Authentication Required
Request Body:
json
Copier le code
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "numberOfPages": 180
}
Response:
json
Copier le code
{
  "id": "some-id",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "numberOfPages": 180
}
2. Retrieve All Books
Endpoint:
http
Copier le code
GET /api/books
Authentication Required
Response:
json
Copier le code
[
  {
    "id": "some-id",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishedDate": "1925-04-10",
    "numberOfPages": 180
  },
  ...
]
3. Get Book by ID
Endpoint:
http
Copier le code
GET /api/books/:id
Authentication Required
Response:
json
Copier le code
{
  "id": "some-id",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "numberOfPages": 180
}
4. Update Book Details
Endpoint:
http
Copier le code
PUT /api/books/:id
Authentication Required
Request Body:
json
Copier le code
{
  "title": "The Great Gatsby - Updated Edition",
  "numberOfPages": 200
}
Response:
json
Copier le code
{
  "id": "some-id",
  "title": "The Great Gatsby - Updated Edition",
  "author": "F. Scott Fitzgerald",
  "publishedDate": "1925-04-10",
  "numberOfPages": 200
}
5. Delete Book
Endpoint:
http
Copier le code
DELETE /api/books/:id
Authentication Required
Response:
json
Copier le code
{
  "message": "Book deleted successfully"
}
🔗 Swagger Documentation
All available endpoints can be explored interactively through Swagger.
👉 http://localhost:5000/api-docs

📝 License
This project is licensed under the MIT License.

