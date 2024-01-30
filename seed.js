const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const db = require('./db'); // Your database connection file

// Models
const Student = require('./models/student.js');
const Subject = require('./models/subject.js');
const Marks = require('./models/marks.js');

// Function to seed data from CSV files
async function seedData() {
  try {
    // Function to read CSV file and return data as an array
    function readCSV(filePath) {
      return new Promise((resolve, reject) => {
        const results = [];
        fs.createReadStream(filePath)
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', () => resolve(results))
          .on('error', (error) => reject(error));
      });
    }

    const studentsData = await readCSV('./data/students.csv'); // replace this filepaths in future
    await Student.insertMany(studentsData);

    const subjectsData = await readCSV('./data/subjects.csv');
    await Subject.insertMany(subjectsData);

    const marksData = await readCSV('./data/marks.csv');
    await Marks.insertMany(marksData);

    console.log('Data seeding completed successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
}

seedData();