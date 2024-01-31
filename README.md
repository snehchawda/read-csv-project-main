# Project to read csv file and migration

## Table of Contents

- [Project Overview](#project-overview)
- [Dependencies](#dependencies)
- [Installation](#installation)

## Project Overview

This project is a simple web application built using Node.js, Express.js, and MongoDB to manage and display information from three CSV files: students, subjects, and marks. The application provides functionality to read data from CSV files, store it in a MongoDB database, and present the information in a user-friendly table using Bootstrap.

## Dependencies

Main dependencies of the project with version numbers.

- Node.js (v21.5.0)
- Express.js (v4.18.2)
- Mongoose (v8.1.1)
- csv-parser (v3.0.0)
- Bootstrap (v5.3.2)
- EJS (v3.1.9)

## Installation

<!-- Clone the repository: git clone https://github.com/snehchawda/read-csv-project-main.git -->
Navigate to the project folder: cd read-csv-project
Install dependencies: npm install

CSV Seeding:
Seed the database with CSV data: node seed.js

Run the Application:
Start the application: node app.js
Access the application at http://localhost:3000
You can directly access http://localhost:3000/results

```bash
git clone https://github.com/snehchawda/read-csv-project-main.git
cd read-csv-project
npm install
