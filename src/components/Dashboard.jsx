import React from 'react';
import {
  FaAws,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGithub,
  FaFigma,
  FaStripe,
} from 'react-icons/fa';

import {
  SiFlutter,
  SiMysql,
  SiFirebase,
  SiDocker,
  SiScikitlearn,
  SiOpencv,
  SiIntellijidea,
  SiGit,
  SiNextdotjs,
  SiTailwindcss,
  SiAndroid,
  SiPostman,
  SiMongodb,
  SiDart,
  SiJavascript,
  SiKotlin,
  SiSupabase,
  SiPostgresql,
  SiJira,
} from 'react-icons/si';

import { VscVscode } from 'react-icons/vsc';
import { DiMaterializecss } from 'react-icons/di';

const skills = {
  frontEnd: [
    { name: 'Flutter', icon: <SiFlutter /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'Bootstrap', icon: <FaBootstrap /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Material UI', icon: <DiMaterializecss /> },
  ],

  backEnd: [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Supabase', icon: <SiSupabase /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Django', icon: <FaPython /> },
    { name: 'REST APIs', icon: <SiPostman /> },
    { name: 'Stripe', icon: <FaStripe /> },
    { name: 'AWS', icon: <FaAws /> },
    { name: 'Vercel', icon: <SiNextdotjs /> },
  ],

  programmingLanguages: [
    { name: 'Dart', icon: <SiDart /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Java', icon: <FaJava /> },
    { name: 'Kotlin', icon: <SiKotlin /> },
    { name: 'C', icon: 'C' },
    { name: 'SQL', icon: <SiMysql /> },
  ],

  others: [
    { name: 'Riverpod', icon: <SiFlutter /> },
    { name: 'Clean Architecture', icon: <SiFlutter /> },
    { name: 'Git', icon: <SiGit /> },
    { name: 'GitHub', icon: <FaGithub /> },
    { name: 'VS Code', icon: <VscVscode /> },
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea /> },
    { name: 'Android Studio', icon: <SiAndroid /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Jira', icon: <SiJira /> },
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
      <SkillCard title="Other Tools" skills={skills.others} />
    </div>
  );
};

export default Dashboard;
