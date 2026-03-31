import { useEffect, useRef, useState } from 'react';
import React from 'react';
import IntroScreen from './IntroScreen';
import earthVideo from './assets/earth.mp4';
import starVideo from './assets/star.mp4';
import { Mail, Download, ExternalLink, Code2, ArrowUpRight, Terminal, Database, Layers, Mic, Trophy, Heart, Calendar, Video, BookOpen, Briefcase, PenTool } from 'lucide-react';
import pic1 from './assets/pic1.JPG';
import pic2 from './assets/pic2.JPG';
import pic3 from './assets/pic3.JPG';
import pic4 from './assets/pic4.JPG';

import pic6 from './assets/pic6.JPG';
import pic7 from './assets/pic7.JPG';
import pic8 from './assets/pic8.jpg';
import pic9 from './assets/pic9.JPG';
import pic10 from './assets/pic10.jpg';
import pic11 from './assets/pic11.JPG';
import pic12 from './assets/pic12.JPG';
import pic13 from './assets/pic13.JPG';
import pic14 from './assets/pic14.JPG';
import pic15 from './assets/pic15.JPG';

// --- CUSTOM BRAND ICONS (Do lucide-react đã xóa brand icons) ---
const Github = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
// -----------------------------------------------------------------

// Nếu bạn đã có ảnh, bỏ comment dòng dưới đây:
// import profileImg from './assets/profile.jpg';

function App() {
  const [introComplete, setIntroComplete] = useState(false);
  const earthRef = useRef<HTMLVideoElement | null>(null);
  const starRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!introComplete) return;

    const onScroll = () => {
      const p = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const starOpacity = Math.max(0, Math.min(1, (p - 0.3) / 0.4));
      if (earthRef.current) earthRef.current.style.opacity = String(1 - starOpacity * 0.95);
      if (starRef.current)  starRef.current.style.opacity  = String(starOpacity);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [introComplete]);

  if (!introComplete) {
    return <IntroScreen onComplete={() => setIntroComplete(true)} />;
  }

  // --- DATA CHO 3 HÀNG ẢNH (Ảnh từ src/assets) ---
  const row1 = [pic1, pic2, pic3, pic4];
  const row2 = [pic6, pic7, pic8, pic9, pic10];
  const row3 = [pic11, pic12, pic13, pic14, pic15];

  // --- JOURNEY DATA ---
  const journeyData = [
    {
      year: "2025",
      title: "TEDx Speaker | Swinburne VN Da Nang",
      desc: "Talk Topic: “I Don’t Know – But I’ll Try”. Shared personal insights and experiences on taking leaps of faith.",
      icon: <Mic size={20} />,
      link: "https://www.youtube.com/watch?v=vc-RCLDpHJw",
      linkText: "Watch Talk"
    },
    {
      year: "2025",
      title: "Champion Swin-Biz-Rockstar",
      desc: "Won the championship with the HeriTech team from Swinburne Vietnam – Da Nang, integrating high-tech business models.",
      icon: <Trophy size={20} />,
      link: "https://swinburne-vn.edu.vn/news/chung-ket-swin-biz-rockstar-2025-hoi-tu-cac-mo-hinh-kinh-doanh-dot-pha-tich-hop-cong-nghe-cao/?fbclid=IwY2xjawQvd7RleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeFeSpfJi-J3LikbTRAky1_zEjoexWcjvFSG33MteKN0HSBL0FcrFXqFdN2OE_aem_nxjixIdGxWir2C4GOli68g",
      linkText: "Read Article"
    },
    {
      year: "2025",
      title: "Founder of The SwinCook Club",
      desc: "A cooking club organizing events like Christmas and Yoga to raise funds for charity. We have donated gifts to orphanages and dialysis centers in Da Nang.",
      icon: <Heart size={20} />
    },
    {
      year: "2024 - Present",
      title: "Event Planner & Organizer",
      desc: "Organizing academic events (debate challenges, tech workshops, film festivals) and volunteer activities to support people in flood-affected and remote areas.",
      icon: <Calendar size={20} />
    },
    {
      year: "2024 - Present",
      title: "Video Jockey | Education Program",
      desc: "Writing scripts, shooting, editing videos, and livestreaming for platforms like TikTok and Facebook, attracting a large audience.",
      icon: <Video size={20} />
    },
    {
      year: "Jul. 2024",
      title: "Teaching Assistant | Apollo English Center",
      desc: "Bilingual English-Vietnamese translation, grading assignments, and classroom management for preschool to elementary school students.",
      icon: <BookOpen size={20} />
    },
    {
      year: "2023 - 2024",
      title: "Product Strategy & Promotion",
      desc: "Developed strategies to increase revenue for HOME milktea & coffee, Crumbs, and provided product photography for coffee shops.",
      icon: <Briefcase size={20} />
    },
    {
      year: "Jul. 2022",
      title: "Content Creation & Visual Design",
      desc: "Main designer for the summer retreat at Long Hoa Pagoda, which attracted hundreds of young people attending.",
      icon: <PenTool size={20} />
    }
  ];
  // ------------------------------------------------------------------

  return (
    <div className="relative min-h-screen w-full bg-background selection:bg-white/20 text-foreground font-body">
      
      {/* FIXED DUAL VIDEO BACKGROUND */}
      <div className="fixed inset-0 z-0">

        {/* Video Trái Đất — hiện khi ở đầu trang */}
        <video
          id="bg-earth"
          ref={earthRef}
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
          style={{ opacity: 1 }}
        >
          <source src={earthVideo} type="video/mp4" />
        </video>

        {/* Video Star — hiện khi scroll xuống cuối */}
        <video
          id="bg-star"
          ref={starRef}
          autoPlay loop muted playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]"
          style={{ opacity: 0 }}
        >
          <source src={starVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/55"></div>
      </div>

      {/* --- NAVIGATION BAR --- */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto backdrop-blur-md bg-background/30 border-b border-white/5">
        <div className="text-2xl md:text-3xl tracking-tight font-display text-foreground">
          chanhbe<sup className="text-xs tracking-normal font-sans ml-1">®</sup>
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          <li><a href="#home" className="text-sm text-foreground transition-colors">Home</a></li>
          <li><a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a></li>
          <li><a href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Arsenal</a></li>
          <li><a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</a></li>
        </ul>

        <a href="#contact" className="liquid-glass rounded-full px-5 py-2 text-sm text-foreground hover:scale-[1.03] cursor-pointer transition-transform hidden md:block">
          Connect
        </a>
      </nav>

      {/* --- NỘI DUNG CUỘN TRANG --- */}
      <div className="relative z-10 pt-24">

        {/* 1. HERO SECTION */}
        <section id="home" className="flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-100px)]">
          <p className="text-muted-foreground tracking-widest uppercase text-xs sm:text-sm mb-6 animate-fade-rise">
            Undergraduate at Swinburne | BA-CS (Data Science)
          </p>
          <h1 className="text-6xl sm:text-8xl md:text-[9rem] leading-[0.9] tracking-[-0.04em] max-w-7xl font-normal font-display animate-fade-rise-delay">
            Nguyen Ba <em className="not-italic text-muted-foreground">Chanh</em>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-2xl max-w-2xl mt-8 font-display italic animate-fade-rise-delay-2">
            "I don’t know - But I’ll try!"
          </p>
          <a href="#projects" className="liquid-glass rounded-full px-12 py-4 text-sm uppercase tracking-widest text-foreground mt-12 hover:scale-[1.03] cursor-pointer transition-transform animate-fade-rise-delay-2">
            Explore My Work
          </a>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="max-w-7xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            {/* Khung ảnh Liquid Glass */}
            <div className="liquid-glass p-3 rounded-2xl rotate-[-2deg] hover:rotate-0 transition-all duration-500 w-full max-w-md aspect-[4/5] flex items-center justify-center">
              <img src={pic10} className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500" alt="Bá Chánh" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-display mb-8">Behind the <span className="text-muted-foreground">Data.</span></h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
              I am an enthusiastic Data Science student at Swinburne University of Technology. With a strong foundation in both technical problem-solving and English communication, I thrive at the intersection of data and human experience.
            </p>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Beyond just numbers and algorithms, I am highly skilled in product strategy development, content creation, visual design, and event organization. I believe that data is only as powerful as the story it tells.
            </p>
          </div>
        </section>

        {/* --- VISUAL ME SECTION --- */}
        <section id="visual-me" className="relative w-full py-24 overflow-hidden flex flex-col gap-6 bg-background/50">
          
          {/* Lớp phủ Gradient 2 bên rìa để ảnh fade mờ dần */}
          <div className="absolute inset-0 z-10 pointer-events-none" 
               style={{ background: 'linear-gradient(90deg, hsl(var(--background)) 0%, transparent 15%, transparent 85%, hsl(var(--background)) 100%)' }}>
          </div>

          {/* CHỮ Ở GIỮA (Vision. Visual Me.) */}
          <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)] mix-blend-overlay">
              Vision. <span className="text-white/80">Visual Me.</span>
            </h2>
          </div>

          {/* HÀNG 1: Chạy sang trái */}
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused]">
            {[...row1, ...row1, ...row1, ...row1].map((img, idx) => (
              <div key={`r1-${idx}`} className="pr-4 sm:pr-6 flex-shrink-0">
                <div className="w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] rounded-2xl overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                  <img src={img} alt="Visual Me" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          {/* HÀNG 2: Chạy sang phải */}
          {/* ml-[-20vw] để tạo điểm bắt đầu so le so với hàng 1 */}
          <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] ml-[-20vw]">
            {[...row2, ...row2, ...row2, ...row2].map((img, idx) => (
              <div key={`r2-${idx}`} className="pr-4 sm:pr-6 flex-shrink-0">
                <div className="w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] rounded-2xl overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                  <img src={img} alt="Visual Me" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

          {/* HÀNG 3: Chạy sang trái */}
          <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] ml-[5vw]">
            {[...row3, ...row3, ...row3, ...row3].map((img, idx) => (
              <div key={`r3-${idx}`} className="pr-4 sm:pr-6 flex-shrink-0">
                <div className="w-[280px] h-[180px] sm:w-[350px] sm:h-[220px] rounded-2xl overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                  <img src={img} alt="Visual Me" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            ))}
          </div>

        </section>
        {/* ---------------------------------- */}

        {/* --- THE JOURNEY SECTION (Cinematic Timeline) --- */}
        <section id="journey" className="max-w-7xl mx-auto px-6 py-32 overflow-hidden">
          <div className="flex flex-col items-center mb-24 gap-4 text-center">
            <p className="text-sm tracking-widest uppercase text-muted-foreground"><Code2 className="inline-block mr-2" size={16} />Milestones</p>
            <h2 className="text-5xl md:text-7xl font-display">The <span className="text-muted-foreground">Journey.</span></h2>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2"></div>

            {journeyData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="relative mb-12 md:mb-20 w-full flex flex-col md:flex-row group">
                  <div className="absolute left-[24px] md:left-1/2 w-12 h-12 bg-background border border-white/20 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] group-hover:border-white/50 transition-all duration-500 z-10 -translate-x-1/2 mt-4 md:mt-0 md:top-1/2 md:-translate-y-1/2">
                    <span className="text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500">{item.icon}</span>
                  </div>

                  <div className={`w-full pl-[70px] md:pl-0 md:w-1/2 flex items-center ${isEven ? 'md:pr-16 md:justify-end text-left md:text-right' : 'md:ml-auto md:pl-16 text-left'}`}>
                    <div className="liquid-glass p-8 md:p-10 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 relative overflow-hidden w-full max-w-lg">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                      
                      <div className="relative z-10">
                        <span className="text-xs font-mono tracking-widest text-white/50 mb-3 block">{item.year}</span>
                        <h3 className="text-2xl font-display mb-4 text-white/90 group-hover:text-white transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{item.desc}</p>
                        {item.link && (
                          <a href={item.link} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white pb-1 w-max ${isEven ? 'md:float-right' : ''}`}>
                            {item.linkText} <ArrowUpRight size={14} />
                          </a>
                        )}
                        {isEven && item.link && <div className="clear-both"></div>}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* 3. SKILLS SECTION (Bento Box Layout) */}
        <section id="skills" className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-5xl md:text-7xl font-display">Tech <span className="text-muted-foreground">Arsenal.</span></h2>
            <p className="text-muted-foreground max-w-sm text-right text-sm md:text-base hidden md:block">
              A curated stack of tools I use to transform raw data into cinematic narratives and interactive experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Box 1: Languages (Col-span 7) */}
            <div className="liquid-glass p-8 md:p-10 rounded-3xl lg:col-span-7 group hover:bg-white/[0.03] transition-colors duration-500 flex flex-col justify-between min-h-[300px]">
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-3">
                  <Terminal className="text-muted-foreground" size={24} />
                  <h3 className="text-2xl font-display">Languages & Logic</h3>
                </div>
                <span className="text-muted-foreground/50 font-mono text-xs tracking-widest">01</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Python', 'R', 'SQL', 'JavaScript', 'C#', 'HTML/CSS', 'Ruby', 'PHP'].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm hover:bg-white/20 hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 2: Frameworks (Col-span 5) */}
            <div className="liquid-glass p-8 md:p-10 rounded-3xl lg:col-span-5 group hover:bg-white/[0.03] transition-colors duration-500 flex flex-col justify-between min-h-[300px]">
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center gap-3">
                  <Layers className="text-muted-foreground" size={24} />
                  <h3 className="text-2xl font-display">Frameworks</h3>
                </div>
                <span className="text-muted-foreground/50 font-mono text-xs tracking-widest">02</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {['Pandas', 'Scikit-learn', 'React', 'Angular', 'Vue.js', 'Unity'].map((skill) => (
                  <span key={skill} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm hover:bg-white/20 hover:text-white transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 3: Tools & Visualization (Col-span 12 - Full width) */}
            <div className="liquid-glass p-8 md:p-10 rounded-3xl lg:col-span-12 group hover:bg-white/[0.03] transition-colors duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center gap-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Database className="text-muted-foreground" size={24} />
                    <h3 className="text-2xl font-display">Data, Tools & Viz</h3>
                  </div>
                  <p className="text-muted-foreground text-sm max-w-md">Infrastructure, version control, and storytelling tools to deploy models and visualize insights.</p>
                </div>
                
                <div className="flex flex-wrap gap-3 md:justify-end max-w-2xl">
                  {['Tableau', 'PowerBI', 'Docker', 'AWS', 'Git', 'KNIME', 'Arduino'].map((skill) => (
                    <span key={skill} className="px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-sm hover:bg-white/20 hover:text-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* 4. PROJECTS SECTION (Cinematic Cards Layout) */}
        <section id="projects" className="max-w-7xl mx-auto px-6 py-32">
          <div className="flex flex-col mb-16 gap-4">
            <p className="text-sm tracking-widest uppercase text-muted-foreground">Portfolio</p>
            <h2 className="text-5xl md:text-7xl font-display">Selected <span className="text-muted-foreground">Works.</span></h2>
          </div>

          <div className="flex flex-col gap-8 md:gap-12">
            
            {/* Project 1 - Cinematic Card */}
            <div className="relative w-full rounded-[2.5rem] overflow-hidden group min-h-[500px] md:min-h-[600px] flex items-end liquid-glass">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80" 
                alt="HeriTech Dashboard" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-[1.5s] ease-out z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none"></div>

              <div className="relative z-20 p-8 md:p-16 w-full flex flex-col md:flex-row justify-between md:items-end gap-8">
                <div className="max-w-3xl">
                  <div className="flex gap-3 mb-6">
                    <span className="text-xs px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">IoT</span>
                    <span className="text-xs px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">Data Science</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-display mb-6">HeriTech Dashboard</h3>
                  <p className="text-muted-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl">
                    An IoT-based environmental monitoring system developed to assist museum artifact preservation. It monitors, analyzes, and automatically responds to factors like temperature, humidity, UV rays, vibration, and gas concentration.
                  </p>
                </div>

                <a href="https://github.com/chanhbe/HeriTech" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group/btn shrink-0">
                  <ArrowUpRight size={28} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                </a>
              </div>
            </div>

            {/* Project 2 - Cinematic Card */}
            <div className="relative w-full rounded-[2.5rem] overflow-hidden group min-h-[500px] md:min-h-[600px] flex items-end liquid-glass">
              <img 
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=80" 
                alt="Asteroids 2D" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-[1.5s] ease-out z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 pointer-events-none"></div>

              <div className="relative z-20 p-8 md:p-16 w-full flex flex-col md:flex-row justify-between md:items-end gap-8">
                <div className="max-w-3xl">
                  <div className="flex gap-3 mb-6">
                    <span className="text-xs px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">Game Dev</span>
                    <span className="text-xs px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md">Unity & C#</span>
                  </div>
                  <h3 className="text-4xl md:text-6xl font-display mb-6">Asteroids 2D</h3>
                  <p className="text-muted-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl">
                    A top-down shooter game where players control an astronaut facing continuous waves of aliens. The primary objective is to survive, destroy enemies, collect gems, and activate special skills.
                  </p>
                </div>

                <a href="https://github.com/chanhbe/Asteroids" target="_blank" rel="noreferrer" className="w-16 h-16 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group/btn shrink-0">
                  <ArrowUpRight size={28} className="group-hover/btn:rotate-45 transition-transform duration-300" />
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* 5. FOOTER / CONTACT SECTION (The Grand Finale) */}
        <section id="contact" className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 overflow-hidden mt-20">
          
          {/* Hiệu ứng Ánh sáng Spotlight ở background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none z-0"></div>

          <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
            
            {/* Trạng thái "Sẵn sàng làm việc" */}
            <div className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-12">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono tracking-widest uppercase text-muted-foreground">Status: Open for new opportunities</span>
            </div>

            {/* Chữ Khổng Lồ */}
            <h2 className="text-7xl sm:text-8xl md:text-[10rem] font-display leading-none tracking-tighter text-center mb-6">
              Let's <span className="text-white/40 italic">Talk.</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-xl text-lg md:text-xl mb-20 font-light">
              Whether you have a vision to build, a problem to solve, or just want to discuss data and games — my inbox is always open.
            </p>
            
            {/* 2 Khối Thẻ Liên Hệ Lớn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-32">
              
              {/* Thẻ Email */}
              <a href="mailto:chanh.jobs@gmail.com" className="liquid-glass p-8 md:p-12 rounded-[2.5rem] group hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[280px]">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Mail size={24} />
                  </div>
                  <ArrowUpRight size={28} className="text-white/30 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                </div>
                <div>
                  <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">Direct Mail</p>
                  <h3 className="text-2xl md:text-3xl font-display break-all">chanh.jobs@gmail.com</h3>
                </div>
              </a>

              {/* Thẻ Download CV */}
              <a href="/CV_NguyenBaChanh.pdf" download className="liquid-glass p-8 md:p-12 rounded-[2.5rem] group hover:bg-white/[0.04] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between min-h-[280px]">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-full border border-white/20 bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-500">
                    <Download size={24} />
                  </div>
                  <ArrowUpRight size={28} className="text-white/30 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
                </div>
                <div>
                  <p className="text-sm tracking-widest uppercase text-muted-foreground mb-2">Grab My Resume</p>
                  <h3 className="text-2xl md:text-3xl font-display">Download CV (PDF)</h3>
                </div>
              </a>

            </div>

            {/* Đường gạch ngang phân cách */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-12"></div>

            {/* Footer Dưới Cùng */}
            <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
              
              {/* Copyright */}
              <div className="flex flex-col items-center md:items-start">
                <p className="text-xl font-display mb-1">Bá Chánh<sup className="text-[10px] ml-0.5">®</sup></p>
                <p className="text-xs text-muted-foreground/50 font-sans tracking-widest uppercase">
                  © {new Date().getFullYear()} Designed with Logic & Aesthetics.
                </p>
              </div>

              {/* Social Icons (Sử dụng lại các hàm custom SVG đã tạo) */}
              <div className="flex justify-center items-center gap-6">
                <a href="https://www.linkedin.com/in/chanhbe/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"><Linkedin size={20} /></a>
                <a href="https://github.com/chanhbe/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"><Github size={20} /></a>
                <a href="https://www.facebook.com/bachanh.be/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"><Facebook size={20} /></a>
                <a href="https://www.instagram.com/bachanh.be/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"><Instagram size={20} /></a>
                <a href="https://www.tiktok.com/@chanhbeee_" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-white hover:text-black hover:scale-110 transition-all duration-300"><ExternalLink size={20} /></a>
              </div>

              {/* Back to top (Nhấp để cuộn lên trên cùng) */}
              <a href="#home" className="text-xs uppercase tracking-widest text-muted-foreground hover:text-white transition-colors flex items-center gap-2">
                Back to Top <ArrowUpRight size={14} className="-rotate-45" />
              </a>

            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default App;