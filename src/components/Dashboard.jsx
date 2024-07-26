import React from 'react';
import Card from './card'; // Import the Card component

const frontEnd = [
  { name: 'HTML', svg: 'src/assets/html.svg' },
  { name: 'CSS', svg: 'myportfolio//src//assets//css.svg' },
//   { name: 'Bootstrap', svg: 'src/assets/bootstrap.svg' },
//   { name: 'EJS', svg: 'src/assets/ejs.svg' },
  { name: 'JQuery', svg: 'src/assets/jquery.svg' },
  { name: 'Flutter', svg: 'src/assets/flutter.svg' }, // Moved from Mobile App Development
  { name: 'Dart', svg: 'src/assets/dart.svg' }, // Moved from Mobile App Development
];

const backEnd = [
  { name: 'Node JS', svg: 'src/assets/nodejs.svg' },
//   { name: 'Express JS', svg: 'src/assets/expressjs.svg' },
  { name: 'MySQL', svg: 'src/assets/mysql.svg' },
  { name: 'Firebase', svg: 'src/assets/firebase.svg' },
  { name: 'MongoDB', svg: 'src/assets/mongodb.svg' },
  { name: 'Supabase', svg: 'src/assets/supabase.svg' },
//   { name: 'SQL Server', svg: 'src/assets/sqlserver.svg' },
//   { name: 'SSIS', svg: 'src/assets/ssis.svg' },
//   { name: 'NumPy', svg: 'src/assets/numpy.svg' }, // Moved from Data Science/Image Processing
//   { name: 'Pandas', svg: 'src/assets/pandas.svg' }, // Moved from Data Science/Image Processing
//   { name: 'OpenCV', svg: 'src/assets/opencv.svg' }, // Moved from Data Science/Image Processing
];

const programmingLanguages = [
  { name: 'C/C++', svg: 'src/assets/cpp.svg' },
  { name: 'Python', svg: 'src/assets/python.svg' },
  { name: 'Java', svg: 'src/assets/java.svg' },
  { name: 'JavaScript', svg: 'src/assets/javascript.svg' },
  { name: 'MATLAB', svg: 'src/assets/matlab.svg' },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Card title="Front End" items={frontEnd} />
      <Card title="Back End" items={backEnd} />
      <Card title="Programming Languages" items={programmingLanguages} />
    </div>
  );
};

export default Dashboard;
