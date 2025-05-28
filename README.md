---

# 🐾 PetPal API – RESTful CRUD for Pet Business

A REST API built with Node.js to manage pets, customers, and appointments for a fictional pet business called **PetPal**. This project was developed as part of a hands-on exercise to strengthen backend development skills and simulate real-world scenarios using a structured and maintainable CRUD architecture. It also integrates Swagger for interactive API testing and documentation.

---

## 📦 Tech Stack

* **Node.js**
* **Express.js**
* **nodemon** (for development auto-reload)
* **swagger-ui-express** & **swagger-jsdoc** (for API docs & testing)

---

## 📚 Features

* ✅ Full CRUD operations for:
* 📬 RESTful routing following industry standards
* 🛡️ Input validation and error handling
* 📄 Clean and modular project structure
* 🔄 Auto-reload using `nodemon` for fast dev iteration
* 📝 **Interactive API documentation & testing via Swagger**

---

## 🔧 Installation

### Prerequisites

* [Node.js](https://nodejs.org/) (v14+)
* [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/petpal-api.git

# 2. Navigate to the project directory
cd petpal-api

# 3. Install dependencies
npm install --production

# 4. Create a .env file with your environment variables
cp .env.example .env

# 5. Start the development server
npx nodemon app.js
```

By default, the server runs on port **3000**. You can override this by setting `PORT` in your `.env`.

---

## 🧪 API Endpoints

| Method | Endpoint        | Description            |
| ------ | --------------- | ---------------------- |
| GET    | `/api/pets`     | Get all pets           |
| POST   | `/api/pets`     | Add a new pet          |
| GET    | `/api/pets/:id` | Get a pet by ID        |
| PUT    | `/api/pets/:id` | Update pet information |
| DELETE | `/api/pets/:id` | Delete a pet           |

> Similar CRUD endpoints exist for `/api/customers` and `/api/appointments`.

---

## 📝 API Documentation & Testing with Swagger

PetPal API uses **Swagger UI** for interactive docs and testing:

1. **Swagger setup** is defined in `config/swagger.js` (or `config/swagger.json`), powered by `swagger-jsdoc`.

2. **Access the docs** by navigating to:

   ```
   http://localhost:3000/api-docs
   ```

3. From the Swagger UI you can:

   * Explore all available endpoints
   * Inspect request/response schemas
   * Try out API calls directly in the browser

---

## 🧠 Learning Objectives

* Practice designing and building a REST API from scratch
* Learn best practices for Express route architecture
* Understand CRUD operations with MongoDB using Mongoose
* Integrate Swagger UI for API documentation and testing
* Gain experience with environment management and middleware

---

## 🤝 Contributing

This is a learning project, but feedback and pull requests are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:

   ```bash
   git commit -m 'Add YourFeature'
   ```
4. Push to your branch:

   ```bash
   git push origin feature/YourFeature
   ```
5. Open a pull request.

Please adhere to the existing code style and include tests where appropriate.

---
___
## Development Dependencies (`devDependencies`)

The following development dependencies are essential for building, testing, and maintaining this project. These tools assist with **transpilation**, **testing**, and **automated development workflows**, but are **not required in production**.

### **Babel (Transpilation)**
Babel is used to convert modern JavaScript into versions that are compatible across different environments:
- **`@babel/core`** (`^7.21.4`) – The core Babel compiler.
- **`@babel/preset-env`** (`^7.21.4`) – A preset that automatically determines the necessary Babel plugins and polyfills for your project.

### **Testing Frameworks**
Jest and Supertest provide a structured environment for unit and integration tests:

- **`jest`** (`^29.5.0`) – A widely used JavaScript testing framework.
- **`babel-jest`** (`^29.5.0`) – Enables Jest to transform code using Babel.
- **`jest-babel`** (`^1.0.1`) – Assists in running Jest tests with Babel transformations.
- **`supertest`** (`^6.3.3`) – Facilitates API testing by making HTTP requests and validating responses.

### **Development Automation**
For a smoother development experience, tools are included to enhance workflow automation:

- **`nodemon`** (`^2.0.22`) – Automatically restarts the application when file changes are detected, eliminating the need to manually restart the server.

## **Installation**
To install all development dependencies, run:

```bash
npm install --save-dev @babel/core @babel/preset-env babel-jest jest jest-babel nodemon supertest
```
To ensure only **production** dependencies are installed, use:

```bash
npm install --production
```
---
These dependencies streamline development but are **not required** for running the final version of the project. 
___

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](MIT) file for details.

---

## 🙌 Acknowledgments

* Inspired by real-world pet clinic management systems.
* Tutorials and docs from Academind, Traversy Media, Swagger and freeCodeCamp./
* Special thanks to the Node.js and Express communities for their guidance.

---
