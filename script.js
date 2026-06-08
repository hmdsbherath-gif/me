// Data
const skills = [
  { icon: "💻", title: "Computer Science", desc: "Algorithms, data structures, and computational thinking for O/L and A/L students." },
  { icon: "🌐", title: "Web Development", desc: "HTML, CSS and JavaScript — from first tag to deployed personal sites." },
  { icon: "🐍", title: "Python & Scratch", desc: "Introductory programming that turns shy students into confident builders." },
  { icon: "🛠️", title: "Hardware & Networking", desc: "Demystifying PCs, peripherals, IP addressing, and small office networks." },
  { icon: "🎓", title: "Curriculum Design", desc: "Lesson plans, assessments, and project-based units aligned to the national syllabus." },
  { icon: "🤝", title: "Mentoring", desc: "Coaching students for ICT competitions, hackathons, and university applications." },
];

const experience = [
  { year: "2019 — Present", role: "Senior ICT Teacher", org: "Royal College, Kandy", desc: "Lead the ICT department, coordinate the coding club, and mentor competition teams." },
  { year: "2015 — 2019", role: "ICT Teacher", org: "Dharmaraja College", desc: "Taught O/L and A/L ICT and introduced a school-wide digital literacy initiative." },
  { year: "2012 — 2015", role: "Visiting Lecturer (ICT)", org: "National Institute of Education", desc: "Trained in-service teachers on modern classroom technology and pedagogy." },
];

const projects = [
  { emoji: "🚀", title: "Code Launchpad", desc: "An after-school program where Grade 9 students ship their first web app in 6 weeks.", tags: ["HTML", "CSS", "JavaScript"], gradient: "linear-gradient(135deg,#0ea5b7,#0f172a)" },
  { emoji: "🤖", title: "Little Robots Club", desc: "Micro:bit and Scratch projects that teach logic, sensors, and storytelling.", tags: ["Micro:bit", "Scratch"], gradient: "linear-gradient(135deg,#f59e0b,#b45309)" },
  { emoji: "📊", title: "Data for Good", desc: "A/L students analyze open data about their hometowns and present civic insights.", tags: ["Python", "Pandas"], gradient: "linear-gradient(135deg,#10b981,#065f46)" },
  { emoji: "📚", title: "Teacher Toolkit", desc: "Free curriculum packs and worksheets shared with 200+ ICT teachers nationwide.", tags: ["Curriculum", "Open Ed"], gradient: "linear-gradient(135deg,#6366f1,#1e1b4b)" },
];

// Render
document.getElementById("skills-grid").innerHTML = skills.map(s => `
  <article class="skill-card">
    <div class="skill-icon" aria-hidden="true">${s.icon}</div>
    <h3>${s.title}</h3>
    <p>${s.desc}</p>
  </article>`).join("");

document.getElementById("timeline").innerHTML = experience.map(e => `
  <li>
    <div class="t-dot" aria-hidden="true"></div>
    <div class="t-card">
      <span class="t-year">${e.year}</span>
      <h3>${e.role}</h3>
      <p class="t-org">${e.org}</p>
      <p>${e.desc}</p>
    </div>
  </li>`).join("");

document.getElementById("projects-grid").innerHTML = projects.map(p => `
  <article class="project-card">
    <div class="project-cover" style="background:${p.gradient}"><span>${p.emoji}</span></div>
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
      <ul class="chips">${p.tags.map(t => `<li>${t}</li>`).join("")}</ul>
    </div>
  </article>`).join("");

// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;
    const el = document.querySelector(id);
    if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
  });
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Contact form
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  status.textContent = "Thanks! Your message has been received. I'll reply soon.";
  status.style.color = "#10b981";
  form.reset();
});
