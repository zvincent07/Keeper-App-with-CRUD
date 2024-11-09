
# Keeper App with CRUD

Welcome to the **Keeper App with CRUD** repository! Follow this guide to set up the project on your local machine.

---

## Getting Started

This project consists of a backend and a frontend. To get started, follow these setup instructions carefully.

### Prerequisites

Make sure you have the following installed on your system:
- **Node.js**: [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **PostgreSQL**: [Download here](https://www.postgresql.org/download/)

### Installation Steps

#### 1. Clone the Repository

```bash
git clone https://github.com/zvincent07/Keeper-App-with-CRUD.git
cd Keeper-App-with-CRUD
```

#### 2. Install Dependencies

Install the project dependencies by running the following commands in both `backend` and `frontend` folders:

```bash
cd backend
npm install

cd ../frontend
npm install
```

This will install the required packages for both backend and frontend projects.

---

## Setting up the Backend

### 1. Configure the Environment

You’ll need to create a `.env` file in the `backend` directory with the following details. Replace the values with your PostgreSQL credentials:

```plaintext
PORT="5000"
PG_USER="your_postgres_user"
PG_HOST="localhost"
PG_DATABASE="note_db"
PG_PASSWORD="your_postgres_password"
PG_PORT="5432"
```

### 2. Initialize the Database

The SQL file containing the database schema and initial setup for tables is located at `backend/sql/database.sql`. 
Use this file to set up the database and tables in your PostgreSQL instance.


### 3. Start the Backend

Navigate to the backend folder and start the server:

```bash
cd backend
npm run dev
```

The backend server should now be running on `http://localhost:5000`.

---

## Setting up the Frontend

### 1. Configure the Environment

In the `frontend` directory, create a `.env` file and add the following line:

```plaintext
REACT_APP_SERVER_URL="http://localhost:5000"
```

This points your frontend to the backend server you set up.

### 2. Start the Frontend

Navigate to the frontend folder and start the React app:

```bash
cd frontend
npm start
```

The frontend will be running on `http://localhost:3000` by default. Open this in your browser to access the application.

---

## Project Structure

This project is divided into two main parts:

- **Backend**: Contains the API server, built with Node.js and Express, with a PostgreSQL database.
- **Frontend**: Built with React, serving the user interface.

---

## Additional Notes

- **Environment Variables**: Make sure to replace placeholder values with your actual database credentials in the `.env` files.
- **Database Initialization**: Ensure you run the `backend/sql/database.sql` file to set up your database and tables.
- **Troubleshooting**: If you encounter issues, try restarting both the backend and frontend servers.

---

## Contact

For any issues or further information, please feel free to reach out or submit an issue.
You can contact me at [zvincentlaylo07@gmail.com](mailto:zvincentlaylo07@gmail.com).

---

Enjoy exploring the project! 🚀
