// app.js
const express = require('express');
const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const db = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Models
const Student = require('./models/student.js');
const Subject = require('./models/subject.js');
const Marks = require('./models/marks.js');

// Middleware
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Routes
app.get('/results', async (req, res) => {
    try {
      const data = await Marks.aggregate([
        {
          $lookup: {
            from: 'students',
            localField: 'studentId',
            foreignField: 'id',
            as: 'student',
          },
        },
        {
          $lookup: {
            from: 'subjects',
            localField: 'subjectId',
            foreignField: '_id',
            as: 'subject',
          },
        },
        {
          $unwind: '$student',
        },
        {
          $unwind: '$subject',
        },
        {
          $addFields: {
            'student.name': {
              $concat: [
                { $toUpper: { $substrCP: ['$student.name', 0, 1] } },
                { $substrCP: ['$student.name', 1, { $subtract: [{ $strLenCP: '$student.name' }, 1] }] }
              ]
            },
            'subject.name': '$subject.name',
          },
        },
        {
          $group: {
            _id: {
              studentId: '$student._id',
              studentName: '$student.name',
              standard: '$student.standard',
            },
            subjects: {
              $push: {
                subjectName: '$subject.name',
                marks: '$marks',
              },
            },
          },
        },
        {
          $addFields: {
            totalMarks: { $sum: '$subjects.marks' },
            totalSubjects: { $size: '$subjects' },
            average: { $avg: '$subjects.marks' },
            result: { $cond: { if: { $gte: ['$totalMarks', 32] }, then: 'Pass', else: 'Fail' } },
          },
        },
        {
          $sort: { '_id.standard': 1, '_id.studentName': 1 },
        }
      ]);

      res.render('index', { data });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send('Internal Server Error');
    }
  });  

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
