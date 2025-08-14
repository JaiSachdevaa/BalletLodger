import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../styles/Bulletin.css';

gsap.registerPlugin(ScrollTrigger);

const bulletinItems = [
  { title: "Start Election Year", icon: "📅" },
  { title: "Candidates", icon: "👥" },
  { title: "Agenda of Election", icon: "📋" },
  { title: "Grievances", icon: "❗" },
  { title: "Faculty Board", icon: "👨‍🏫" },
  { title: "About the Campus", icon: "🏛️" },
  { title: "Real-time Vote Status", icon: "📊" }
];

export default function Bulletin() {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.bulletin-card');

    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="bulletin" ref={containerRef}>
      <h1>General Bulletin</h1>
      <div className="bulletin-grid">
        {bulletinItems.map((item, index) => (
          <div key={index} className="bulletin-card">
            <span className="bulletin-icon">{item.icon}</span>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}