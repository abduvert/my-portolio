import React from 'react';
import { FaAws ,FaReact, FaNodeJs, FaJava, FaPython, FaHtml5, FaCss3, FaBootstrap, FaGithub, FaFigma } from 'react-icons/fa';
import { SiFlutter, SiJquery, SiMysql, SiFirebase, SiDocker, SiScikitlearn, SiOpencv, SiIntellijidea, SiGit, SiNextdotjs, SiTailwindcss, SiAndroid, SiPostman, SiAws, SiPython } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { DiMaterializecss } from "react-icons/di";


const skills = {
  frontEnd: [
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
    { name: 'Material UI', icon: <DiMaterializecss />    },
  ],
  backEnd: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'MongoDB', icon: <SiMysql /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Django', icon: <SiPython /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Vercel', icon: <SiNextdotjs /> },
  ],
  programmingLanguages: [
    { name: 'C', icon: 'C' },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
  ],
  machineLearning: [
    { name: 'Scikit-learn', icon: <SiScikitlearn /> },
    { name: 'OpenCV', icon: <SiOpencv /> },
  ],
  others: [
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'VS Code', icon: <VscVscode /> },
    { name: 'IntelliJ', icon: <SiIntellijidea /> },
    { name: 'Android Studio', icon: <SiAndroid /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Figma', icon: <FaFigma /> },
  ],
};

export const SkillCard = ({ title, skills }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SkillCard title="Front End" skills={skills.frontEnd} />
      <SkillCard title="Back End" skills={skills.backEnd} />
      <SkillCard title="Programming Languages" skills={skills.programmingLanguages} />
      <SkillCard title="Machine Learning" skills={skills.machineLearning} />
      <SkillCard title="Other Tools" skills={skills.others} />
    </div>
  );
};

export default Dashboard;
