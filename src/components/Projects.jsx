import React from 'react';
import ShowContainer from './showContainer';
import '../App.css';


const projects = [
  {
    name: 'Healthbot AI',
    image: '/assets/aicenna.gif',
    description: 'A healthcare mobile platform built with Flutter using Clean Architecture and Riverpod. Includes health data syncing, localization, offline support, wearable integrations, and admin dashboards.',
    link: 'https://aicenna.com'
  },
  {
    name: 'U.n.I',
    image: '/assets/uni.jpg',
    description: 'A social-AI mobile application built with Flutter and Riverpod, focused on meaningful connections, performance optimization, and scalable interaction flows.',
    link: 'https://play.google.com/store/apps/details?id=com.HBMStudios.U.n.I'
  },
  {
    name: 'Cirkles',
    image: '/assets/cirkles.svg',
    description: 'A web platform built with Next.js featuring event discovery, AI-based recommendations, and map-driven activity exploration.',
    link: 'https://www.cirkles.space/'
  },
  {
    name: 'Ai-Bay',
    image: '/assets/aibay.jpeg',
    description: 'An AI-powered service marketplace with authentication, real-time chat, bookings, and contract workflows, designed for modern freelance and service platforms.',
    link: 'https://admin-panel-admin-panel-team.vercel.app/'
  },
  {
    name: 'Mood Sync',
    image: '/assets/moodsync.jpeg',
    description: 'A hackathon project built in 24 hours — an AI-powered personal assistant offering mood-based recommendations, task parsing, daily summaries, heatmaps, and OCR-based notes.',
    link: 'https://github.com/TheNullPointerrs/SOFTEC-APP'
  },
  {
    name: 'GymVisa',
    image: 'assets/gymvisa.jpg',
    description: 'A Flutter-based mobile app with a Firebase backend. Offers access to multiple gyms under various subscription packages, in-app payments, offline exercise videos, and diet plans from nutritionists.',
    link: 'https://github.com/abduvert/GYMVISA/tree/main'
  },
  {
    name: 'Moods Ayah',
    image: 'assets/moodsayah.jpg',
    description: 'Discover Ayahs based on your chosen mood. Using React\'s state management and fetching data from the created API using Axios. The collection is small for now, but plenty more to come! 🌱📖',
    link: 'https://moodsayah.netlify.app'
  },
  {
    name: 'Class Insights',
    image: 'assets/ClassInsights (2).png',
    description: 'A powerful and intuitive school management app built with Flutter, designed to streamline the educational process for administrators, teachers, students, and parents. Ensures efficient management and communication within the school community.',
    link: 'https://github.com/IMUSARAZA/ClassInsight'
  },
  {
    name: 'GymVisa Web',
    image: 'assets/gm web.PNG',
    description: 'GymVisa Web is a website built for the marketing of their mobile application, GymVisa.',
    link: 'https://gymvisa.co/'
  },
  {
    name: 'Scriptly AI',
    image: 'assets/sc3.PNG',
    description: 'This project built with NextJS uses AI (LLM) to create custom, multilingual scripts that align with a creator’s voice, provide trending topic suggestions, and offer monetization tips. It includes real-time viewer insights and repurposes content for platforms like TikTok, Instagram Reels, and podcasts, helping creators grow and engage audiences globally.',
    link: 'https://scriptly-ai.vercel.app/'
  },
  {
    name: 'CodeFlash AI',
    image: 'assets/codef.PNG',
    description: 'A project built with NextJS and GroqAi to transform your coding with CodeFlash—engaging flashcards for AI learners and CS students. Master new languages and concepts with active recall and avoid tutorial hell. Make learning interactive and fun!',
    link: 'https://codeflash.vercel.app/'
  },
  {
    name: 'Buzzats',
    image: 'assets/buzzats.PNG',
    description: 'A socializing mobile application designed to foster connections among students enrolled at Comsats University Islamabad, Lahore campus. It enables students to interact, access timetables, check room availability, and seek assistance with campus-related challenges.',
    link: 'https://github.com/IbraheemHaseeb7/buzzats'
  },
  {
    name: 'Cart Quest',
    image: '/assets/cartquest.PNG',
    description: 'Built my first website, incorporating routes, API calls, models, session and cookie-based work, and authentication. This mastery has exponentially broadened my web development skills.',
    link: 'https://github.com/abduvert/WEBTECH/tree/master/project'
  },
  {
    name: 'UniBuddy AI',
    image: '/assets/chat.PNG',
    description: 'A chatbot designed especially for any student to get any university\'s information just by asking it',
    link: 'https://unibuddy-ai.vercel.app/'
  },

];


const Projects = () => {
  return (
    <div className='projects'>
      {projects.map((project, index) => (
        <ShowContainer key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
