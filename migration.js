const db = require('./db');
const Subject = require('./models/subject.js');
const Student = require('./models/student.js');
const Marks = require('./models/marks.js');

async function initializeDatabase() {
  try {

  const subjectsData = [
    { id: 1, name: 'Hindi' },
    { id: 2, name: 'English' },
    { id: 3, name: 'Social Study' },
    { id: 4, name: 'History' },
    { id: 5, name: 'Science' },
    { id: 6, name: 'Maths' }
  ];

  const studentsData = [
    { id: 1, name: "rajesh patidar", standard: 1},
    { id: 2, name: "suresh patel", standard: 3},
    { id: 3, name: "geeta shah", standard: 4},
    { id: 4, name: "suman patel", standard: 2},
    { id: 5, name: "ankit tadvi", standard: 3},
    { id: 6, name: "chintan shah", standard: 5},
    { id: 7, name: "zahir abbas", standard: 3},
    { id: 8, name: "vinit gerg", standard: 4},
    { id: 9, name: "parag shah", standard: 1},
    { id: 10, name: "birjal patel", standard: 5},
    { id: 11, name: "kartik arayn", standard: 2},
    { id: 12, name: "dinesh manek", standard: 4},
    { id: 13, name: "ekta vyas", standard: 3},
    { id: 14, name: "jeet shah", standard: 5},
    { id: 15, name: "hardik oza", standard: 1},
    { id: 16, name: "usman malik", standard: 5},
    { id: 17, name: "dharmesh joshi", standard: 3},
    { id: 18, name: "fharukh khan", standard: 2},
    { id: 19, name: "ishita Patel", standard: 4},
    { id: 20, name: "lalit modi", standard: 1},
    { id: 21, name: "manukh patel", standard: 5},
    { id: 22, name: "naman vyas", standard: 2},
    { id: 23, name: "wasim pathan", standard: 4},
    { id: 24, name: "ruhi parmar", standard: 2},
    { id: 25, name: "teena tandan", standard: 1}
  ];

  // The data provided was incomplete. There was no information for subjectId 6
  // Hence, this part is pending.
  // const marksData = [
  //   {
  //     studentId: 1,
  //     marksPerSubject: [
  //       { subjectId: 1, marks: 34},
  //       { subjectId: 2, marks: 23},
  //       { subjectId: 3, marks: 15},
  //       { subjectId: 4, marks: 24},
  //       { subjectId: 5, marks: 25},
  //       { subjectId: 6, marks: 0},
  //     ],
  //   },
  // ];

    // Seed Subjects
    await Subject.insertMany(subjectsData);
    console.log('Subjects seeded successfully');

    // Seed Students
    await Student.insertMany(studentsData);
    console.log('Students seeded successfully');

    // Seed Marks
    // await Marks.insertMany(marksData);
    // console.log('Marks seeded successfully');

  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    // Close the MongoDB connection using the exported instance from db.js
    db.close();
  }
}

initializeDatabase();