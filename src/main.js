import './style.css';

const skills=['Python','FastAPI','REST APIs','React','JavaScript','HTML','CSS','SQL / MySQL','SQLAlchemy','JWT Authentication','Git / GitHub','AI Tools & Prompting'];
const projects=[
 {no:'01',title:"Men's Wear E-Commerce",type:'FULL-STACK WEB APP',desc:'Industry-style men’s clothing store with authentication, product management, cart, orders, database integration and responsive UI.',stack:['React','JavaScript','FastAPI','MySQL','SQLAlchemy','JWT'],href:'https://github.com/shezaanmohammedops'},
 {no:'02',title:'Weather App',type:'FRONTEND + API',desc:'Responsive weather application focused on API integration, useful data presentation and a clean user experience.',stack:['React','JavaScript','REST API','CSS'],href:'https://github.com/shezaanmohammedops'}
];

const app=document.querySelector('#app');
app.innerHTML=`
<div class="progress"></div><div class="cursor-glow"></div><div class="grid-bg"></div>
<header class="nav"><a class="logo" href="#home">MS<span>.</span></a><button class="menu" aria-label="Open menu"><i></i><i></i></button><nav><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#education">Education</a><a class="nav-talk" href="#contact">Let's talk <b>↗</b></a></nav></header>
<main>
<section id="home" class="hero section-wrap">
 <div class="hero-copy reveal"><div class="kicker"><span class="pulse"></span> FULL-STACK DEVELOPER · PYTHON BACKEND DEVELOPER</div>
 <h1>I build <span>digital</span><br/>products that work.</h1>
 <p class="hero-desc">Mohammed Shezaan — focused on Python backend engineering, FastAPI, React, databases and practical full-stack applications.</p>
 <div class="actions"><a class="btn primary" href="#projects">Explore my work <span>↗</span></a><a class="btn secondary" href="#contact">Contact me</a></div></div>
 <div class="hero-art reveal"><div class="scene" id="scene"><div class="halo h1"></div><div class="halo h2"></div><div class="orb"><div class="orb-core"></div><div class="orb-ring r1"></div><div class="orb-ring r2"></div><div class="orb-ring r3"></div><div class="orb-dot d1"></div><div class="orb-dot d2"></div></div><div class="code-card"><span>01</span><b>python</b><em>FastAPI</em><small>→ build · ship · improve</small></div></div><div class="art-caption">INTERACTIVE SYSTEM / 3D VISUAL</div></div>
 <div class="hero-meta"><span>UDAIPUR, RAJASTHAN</span><span>OPEN TO SOFTWARE OPPORTUNITIES</span><span>SCROLL TO EXPLORE ↓</span></div>
</section>
<section id="about" class="section-wrap content-section"><div class="section-head"><span>01 / ABOUT</span><h2>Building by <i>doing.</i></h2></div><div class="about-grid"><h3>Full-Stack Developer<br/><span>with a backend focus.</span></h3><div class="copy"><p>I’m Mohammed Shezaan, a Full-Stack Developer with a strong focus on Python backend development.</p><p>I build practical, scalable web applications using Python, FastAPI, React, JavaScript, SQL, and MySQL. I enjoy turning ideas into working products — from REST APIs and database systems to responsive interfaces and authentication.</p><p>I learn by building real projects, solving problems, and continuously improving my development skills.</p></div></div></section>
<section id="skills" class="section-wrap content-section"><div class="section-head"><span>02 / STACK</span><h2>My <i>toolkit.</i></h2></div><div class="skills">${skills.map((s,i)=>`<div class="skill"><span>${String(i+1).padStart(2,'0')}</span><b>${s}</b><i>↗</i></div>`).join('')}</div></section>
<section id="projects" class="section-wrap content-section"><div class="section-head"><span>03 / SELECTED WORK</span><h2>Projects with a <i>purpose.</i></h2></div><div class="projects">${projects.map(p=>`<article class="project"><div class="project-no">${p.no}</div><div class="project-body"><div class="project-type">${p.type}</div><h3>${p.title}</h3><p>${p.desc}</p><div class="tags">${p.stack.map(x=>`<span>${x}</span>`).join('')}</div></div><a class="project-arrow" href="${p.href}" target="_blank" rel="noreferrer">↗</a></article>`).join('')}</div></section>
<section id="education" class="section-wrap content-section"><div class="section-head"><span>04 / EDUCATION</span><h2>Learning, <i>building,</i> improving.</h2></div><div class="edu"><div class="edu-year">2023 — 2026</div><div><div class="project-type">DIPLOMA · INFORMATION TECHNOLOGY</div><h3>Vidhya Bhawan Polytechnic College</h3><p>Udaipur, Rajasthan</p></div><div class="certs"><span>FastAPI Complete Course</span><span>be10x AI Tools Workshop</span></div></div></section>
<section id="contact" class="contact"><div class="contact-inner section-wrap"><div class="section-head"><span>05 / CONTACT</span></div><h2>Let’s build something<br/><i>worth shipping.</i></h2><p>Have an opportunity, project, or idea? Let’s talk.</p><a class="mail" href="mailto:shezanmohammed0@gmail.com">shezanmohammed0@gmail.com <b>↗</b></a><div class="socials"><a href="https://github.com/shezaanmohammedops" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/mohammed-shezan-2b187741b/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div></div></section>
</main><footer><span>© ${new Date().getFullYear()} Mohammed Shezaan</span><span>React-minded · Python-focused · Always building</span></footer>`;

const menu=document.querySelector('.menu'),nav=document.querySelector('nav');menu.onclick=()=>nav.classList.toggle('open');nav.querySelectorAll('a').forEach(a=>a.onclick=()=>nav.classList.remove('open'));
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=`${h?scrollY/h*100:0}%`});
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
const scene=document.querySelector('#scene');scene.addEventListener('pointermove',e=>{const r=scene.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;scene.style.setProperty('--mx',`${x*16}deg`);scene.style.setProperty('--my',`${-y*16}deg`)});scene.addEventListener('pointerleave',()=>{scene.style.setProperty('--mx','0deg');scene.style.setProperty('--my','0deg')});
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.12});document.querySelectorAll('.reveal,.content-section').forEach(e=>observer.observe(e));
