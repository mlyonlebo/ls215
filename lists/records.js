// create summary object from studentScores

// iterate through the student objects in studentScores
  // for (let student in studentScores)...

// for each student, processStudentData

// calculate the student's personal grade
// getGrade(student) function
  // reduce the array returned by student['scores']['exams'] for averageExamScore
  // reduce the array returned by student['scores']['exercises'] for averageExerciseScore
  // compute weighted average, rounded to the nearest int
  // lookup letter grade (if... else function)
  // returns the # and letter grades as a string in the form '87 (B)'

// add the student's exam grades to 

let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function calculateGrade(data) {
  let examAverage = data['exams'].reduce((a, b) => a + b) * 0.25
  let exerciseAverage = data['exercises'].reduce((a, b) => a + b);
  let numberGrade = Math.round((examAverage * .65) + (exerciseAverage * .35))
  return String(numberGrade) + ` (${letterGrade(numberGrade)})`;
}

function letterGrade(number) {
  if (number >= 93) {
    return 'A';
  } else if (number >= 85) {
    return 'B';
  } else if (number >= 77) {
    return 'C';
  } else if (number >= 69) {
    return 'D';
  } else if (number >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function analyzeExams(data) {
  return data.map(scores => {
    scores.sort((a, b) => a - b);
    let minimum = scores[0];
    let maximum = scores[4];
    let average = Number(((scores.reduce((a, b) => a + b)) / 5).toFixed(1));
    return { average, minimum, maximum, };
  });
}

function parseStudentScores(data) {
  let studentGrades = [];
  let exams = [[], [], [], []];

  for (let student in data) {
    let scores = data[student]['scores'];
    studentGrades.push(calculateGrade(scores));

    scores['exams'].forEach((score, index) => {
      exams[index].push(score);
    })
  }

  return [studentGrades, exams];
}

function generateClassRecordSummary(data) {
  let [studentGrades, examScores] = parseStudentScores(data);
  let exams = analyzeExams(examScores);
  return { studentGrades, exams, };
}

console.log(generateClassRecordSummary(studentScores));
