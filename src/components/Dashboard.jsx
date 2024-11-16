import React from 'react';
import Card from './card'; // Import the Card component

const frontEnd = [
  { name: 'Flutter', svg: 'assets/flutter.svg' }, 
  { name: 'HTML', svg: 'assets/html.svg' },
  { name: 'CSS', svg: 'assets/css.svg' },
  { name: 'Bootstrap', svg: 'assets/bootstrap.svg' },
  { name: 'JQuery', svg: 'assets/jquery.svg' },
  { name: 'React', svg: '/logo192.png' },
  { name: 'NextJS', svg: '/assets/nextjs.png' },


];

const backEnd = [
  { name: 'Node JS', svg: 'assets/node-js.svg' },
  { name: 'MySQL', svg: 'assets/mysql.svg' },
  { name: 'Firebase', svg: 'assets/firebase.svg' },
  { name: 'MongoDB', svg: 'assets/mongodb.svg' },
  { name: 'Docker', svg: 'assets/docker.svg' },
//   { name: 'SQL Server', svg: 'assets/sqlserver.svg' },
//   { name: 'SSIS', svg: 'assets/ssis.svg' },
//   { name: 'NumPy', svg: 'assets/numpy.svg' }, // Moved from Data Science/Image Processing
//   { name: 'Pandas', svg: 'assets/pandas.svg' }, // Moved from Data Science/Image Processing
//   { name: 'OpenCV', svg: 'assets/opencv.svg' }, // Moved from Data Science/Image Processing
];

const programmingLanguages = [
  { name: 'C', svg: 'assets/c.svg' },
  { name: 'Python', svg: 'assets/python.svg' },
  { name: 'Java', svg: 'assets/java.svg' },
  { name: 'JavaScript', svg: 'assets/javascript.svg' },
  { name: 'Dart', svg: 'assets/dart.svg' },
];

const machineLearning = [
  { name: 'Sckit', svg: 'assets/scikit-learn.svg' },
  { name: 'Pandas', svg: 'assets/Pandas.svg' },
  { name: 'Numpy', svg: 'assets/numpy.svg' },
  { name: 'OpenCv', svg: 'assets/opencv.svg' },
]

const others = [
  { name: 'VSCODE', svg: 'assets/vscode.svg' },
  { name: 'Figma', svg: 'assets/figma.png' },
  { name: 'Git', svg: 'assets/git.svg' },
  { name: 'Github', svg: 'assets/github.svg' },
  { name: 'Intelij', svg: 'assets/intellij.svg' },

]


const Dashboard = () => {
  return (
    <div className="dashboard">
      <Card title="Front End" items={frontEnd} />
      <Card title="Back End" items={backEnd} />
      <Card title="Programming Languages" items={programmingLanguages} />
      <Card title="Machine Learning" items={machineLearning} />
      <Card title="More" items={others} />
    </div>
  );
};

export default Dashboard;
