# My-Diary Application

A simple and intuitive web application to keep track of your daily thoughts and notes. This project demonstrates a full-stack application built with Angular for the frontend and Node.js/Express with MongoDB for the backend.

## Features

  * **Add New Entries**: Easily create and save new diary entries with a date and detailed text.
  * **View All Entries**: See a comprehensive list of all your diary entries in a clean, organised table.
  * **Edit Entries**: Modify existing diary entries.
  * **Delete Entries**: Remove entries you no longer need.
  * **Responsive Design**: A user-friendly interface that adapts to different screen sizes.

## Technologies Used

**Frontend:**

  * **Angular** (Standalone Components, Reactive Forms, Angular Router, HttpClient)
  * **TypeScript**
  * **HTML5**
  * **CSS3** (with Bootstrap for styling)

**Backend:**

  * **Node.js**
  * **Express.js** (for building the REST API)
  * **Mongoose** (for MongoDB object modelling)
  * **MongoDB Atlas** (Cloud Database)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

  * [**Node.js and npm**](https://nodejs.org/en/download/) (Node.js version 14.x or higher recommended)
  * [**Angular CLI**](https://angular.io/cli) (Install globally: `npm install -g @angular/cli`)
  * [**MongoDB Atlas Account**](https://cloud.mongodb.com/) (or a local MongoDB instance)

##  Setup and Installation

Follow these steps to set up your development environment.

### 1\. Clone the Repository

```bash
git clone https://github.com/shivanisbhat/My-Diary.git
cd My-Diary
```

### 2\. Backend Setup

Navigate into the `backend` directory, install dependencies, and configure your MongoDB connection.

```bash
cd backend
npm install
```

**MongoDB Configuration:**

  * Open `react.js` (your main backend file).
  * Update the `mongoose.connect` string with your MongoDB Atlas connection URI. Replace `KkhmaNfahsRrzWua` with your actual password and `cluster0.rwp9vvu.mongodb.net` with your cluster details.
    ```javascript
    mongoose.connect('mongodb+srv://YOUR_USERNAMEHERE:YOUR_PASSWORD_HERE@cluster0.rwp9vvu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    ```
    (Ensure you create a database user with appropriate access in MongoDB Atlas.)

**Run the Backend Server:**

```bash
node server.js
# Or if you have a start script configured in package.json:
# npm start
```

The server should start on `http://localhost:3001`. You should see "Connected to MongoDB" in your terminal.

### 3\. Frontend Setup

Open a **new terminal window** (keep the backend server running in its own terminal). Navigate into the `frontend` directory, install dependencies, and start the Angular development server.

```bash
cd ../frontend # Go back to the root, then into frontend
npm install
```

**Run the Angular Development Server:**

```bash
ng serve
```

The Angular application should now be accessible in your browser at `http://localhost:4200/`.

## 🖥️ Usage

1.  **Navigate to the Home Page:** Open your browser and go to `http://localhost:4200/`. You should see the table headers, and if you have existing entries in your database, they will populate the table.
2.  **Add a Diary Entry:** Click on "Diary Entry" in the navigation bar. Fill out the form with the date and your entry, then submit. The new entry will be saved to your database and displayed in the main table.
3.  **Edit/Delete Entries:** On the main table, use the "Edit" and "Delete" buttons next to each entry to manage them.

-----
Contributions are welcome\! If you find a bug or have a feature request, please open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

-----
