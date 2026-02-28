# my-web-development-journey
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web Development Practical</title>
  <!-- Google Fonts for modern typography -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <!-- Font Awesome 6 (free) for clean icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <!-- external CSS -->
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- SEMANTIC LAYOUT (TASK 1) -->
  <header class="site-header">
    <div class="container">
      <h1 id="mainTitle">⚡ KING DAVID ACADEMY <span class="thin">| Web Practical</span></h1>
      <!-- modern navigation -->
      <nav>
        <ul class="menu">
          <li><a href="index.html" class="active"><i class="fas fa-home"></i> Home</a></li>
          <li><a href="contact.html"><i class="fas fa-paper-plane"></i> Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <!-- HERO / INTRO SECTION (modern card) -->
    <section class="hero-section">
      <div class="container">
        <article class="intro-card glass">
          <h2 class="section-heading"><i class="fas fa-user-astronaut"></i> About me</h2>
          <p>Hi! I'm a grade 11 IT student with a passion for <strong>creative development</strong>.<br>I love building clean, interactive web experiences.</p>
          <div class="divider"><span></span></div>
          <p>My interest in web development started when I made my first interactive page.<br> I enjoy both the creative and logical sides: layout, styling, and behaviour.</p>
        </article>
      </div>
    </section>

    <!-- TASK 2: LISTS, TABLE & MEDIA (organized in grid) -->
    <section class="lists-tables-media">
      <div class="container">
        <h2 class="section-heading"><i class="fas fa-code"></i> Lists, tables & media</h2>
        
        <div class="grid-2col">
          <!-- left column: lists -->
          <div class="card">
            <h3><i class="fas fa-star"></i> Favourite websites</h3>
            <ul class="styled-list">
              <li><a href="https://developer.mozilla.org" target="_blank"><i class="fab fa-mdn"></i> MDN Web Docs</a></li>
              <li><a href="https://github.com" target="_blank"><i class="fab fa-github"></i> GitHub</a></li>
              <li><a href="https://codepen.io" target="_blank"><i class="fab fa-codepen"></i> CodePen</a></li>
            </ul>
          </div>
          <div class="card">
            <h3><i class="fas fa-laptop-code"></i> Programming languages</h3>
            <ol class="styled-list ordered">
              <li>JavaScript <span class="badge">#1</span></li>
              <li>Python</li>
              <li>Java</li>
              <li>C#</li>
              <li>TypeScript</li>
            </ol>
          </div>
        </div>

        <!-- modern table with better design -->
        <div class="card table-card">
          <h3><i class="fas fa-table"></i> Marks preview</h3>
          <div class="table-responsive">
            <table>
              <thead>
                <tr><th>Subject</th><th>Teacher</th><th>Marks</th></tr>
              </thead>
              <tbody>
                <tr><td>HTML & CSS</td><td>Ms. Anna</td><td>48</td></tr>
                <tr><td>JavaScript</td><td>Mr. David</td><td>47</td></tr>
                <tr><td>Web tools</td><td>Ms. Clara</td><td>50</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- MEDIA with modern cards + figcaption -->
        <div class="grid-2col">
          <figure class="media-card">
            <img src="https://picsum.photos/400/250?grayscale&random=1" alt="Random grayscale workspace" loading="lazy">
            <figcaption><i class="fas fa-camera"></i> Fig.1 – Random grayscale image</figcaption>
          </figure>
          <figure class="media-card">
            <video controls poster="https://picsum.photos/400/250?random=2">
              <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4">
            </video>
            <figcaption><i class="fas fa-video"></i> Fig.2 – Sample flower video</figcaption>
          </figure>
        </div>

        <!-- external hyperlink with style -->
        <div class="external-link-wrapper">
          <p><i class="fas fa-globe"></i> Visit <a href="https://www.w3.org" target="_blank" class="fancy-link">W3C official site <i class="fas fa-arrow-right"></i></a> for web standards.</p>
        </div>
      </div>
    </section>

    <!-- TASK 5: JAVASCRIPT INTERACTIVITY (modern control panel) -->
    <section class="js-playground" id="interactive-demo">
      <div class="container">
        <h2 class="section-heading"><i class="fas fa-gamepad"></i> JavaScript fun (TASK 5)</h2>
        <div class="button-panel">
          <button id="alertBtn" class="btn primary"><i class="fas fa-bell"></i> Alert</button>
          <button id="textChangerBtn" class="btn secondary"><i class="fas fa-pencil-alt"></i> Change text</button>
          <button id="bgColorBtn" class="btn success"><i class="fas fa-palette"></i> Soft background</button>
          <button id="dateBtn" class="btn info"><i class="fas fa-clock"></i> Show date</button>
          <button id="toggleDarkBtn" class="btn dark"><i class="fas fa-moon"></i> Toggle dark</button>
          <button id="hideShowBtn" class="btn warning"><i class="fas fa-eye-slash"></i> Hide section</button>
        </div>
        <div class="js-output">
          <p id="dynamicText" class="dynamic-box">✨ This text can change dynamically.</p>
          <p id="dateDisplay" class="date-box"></p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© 2025 — Grade 11 IT Practical | <i class="fas fa-folder-open"></i> Files: index, contact, style.css, script.js</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact - Web Dev Practical</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,400;14..32,500;14..32,600;14..32,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <div class="container">
      <h1 id="mainTitle">📬 Contact <span class="thin">| get in touch</span></h1>
      <nav>
        <ul class="menu">
          <li><a href="index.html"><i class="fas fa-home"></i> Home</a></li>
          <li><a href="contact.html" class="active"><i class="fas fa-paper-plane"></i> Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <main>
    <!-- TASK 4: MODERN FORM CARD -->
    <section class="contact-section">
      <div class="container form-container">
        <div class="form-card glass">
          <h2><i class="fas fa-edit"></i> Send a message</h2>
          <form id="contactForm">
            <div class="input-group">
              <label for="fullname"><i class="fas fa-user"></i> Full name *</label>
              <input type="text" id="fullname" placeholder="Alex Rivera" class="modern-input">
            </div>
            <div class="input-group">
              <label for="email"><i class="fas fa-envelope"></i> Email * (must contain @)</label>
              <input type="email" id="email" placeholder="name@example.com" class="modern-input">
            </div>
            <div class="input-group">
              <label for="message"><i class="fas fa-comment"></i> Message *</label>
              <textarea id="message" rows="4" placeholder="Your message..." class="modern-input"></textarea>
            </div>
            <div class="button-group">
              <button type="submit" id="submitBtn" class="btn primary"><i class="fas fa-paper-plane"></i> Submit</button>
              <button type="button" id="clearFormBtn" class="btn secondary"><i class="fas fa-undo"></i> Clear</button>
            </div>
          </form>
          <div id="formFeedback" class="feedback"></div>
        </div>

        <!-- quick JS actions also on contact page (same script) -->
        <div class="quick-actions card">
          <h3><i class="fas fa-bolt"></i> Quick actions (TASK 5)</h3>
          <div>
            <button id="alertBtn" class="btn primary small"><i class="fas fa-bell"></i> Alert</button>
            <button id="textChangerBtn" class="btn secondary small"><i class="fas fa-pencil-alt"></i> Change text</button>
            <button id="bgColorBtn" class="btn success small"><i class="fas fa-palette"></i> Background</button>
          </div>
          <p id="dynamicText" class="dynamic-box">Hello from contact page</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© 2025 — contact page | <i class="fas fa-check-circle"></i> validation + external JS</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>

// ========== script.js – MODERN + ALL TASKS ==========
document.addEventListener('DOMContentLoaded', function() {

  // ----- TASK 5: at least 3 interactive features (we provide 6) -----

  // 1. Button click alert
  const alertBtn = document.getElementById('alertBtn');
  if (alertBtn) {
    alertBtn.addEventListener('click', () => alert('🚀 KING DAVID ACADEMY says hello! (TASK 5)'));
  }

  // 2. Change text when button clicked
  const textChanger = document.getElementById('textChangerBtn');
  const dynamicPara = document.getElementById('dynamicText');
  if (textChanger && dynamicPara) {
    textChanger.addEventListener('click', () => {
      dynamicPara.innerHTML = '<i class="fas fa-sparkles"></i> ✨ Text changed! You clicked the button.';
      dynamicPara.style.background = '#fef9c3';
      setTimeout(() => dynamicPara.style.background = '', 500);
    });
  }

  // 3. Change background color using JavaScript (soft tint)
  const bgBtn = document.getElementById('bgColorBtn');
  if (bgBtn) {
    bgBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = '#dbeafe'; // soft blue
    });
  }

  // 4. Display current date and time
  const dateBtn = document.getElementById('dateBtn');
  const dateDisplay = document.getElementById('dateDisplay');
  if (dateBtn && dateDisplay) {
    dateBtn.addEventListener('click', () => {
      const now = new Date();
      dateDisplay.innerHTML = `<i class="fas fa-calendar-alt"></i> ${now.toLocaleString()}`;
    });
  }

  // 5. Toggle light/dark mode (with class on body)
  const darkBtn = document.getElementById('toggleDarkBtn');
  if (darkBtn) {
    darkBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      darkBtn.innerHTML = document.body.classList.contains('dark-mode') ? 
        '<i class="fas fa-sun"></i> Light mode' : '<i class="fas fa-moon"></i> Dark mode';
    });
  }

  // 6. Show/hide the interactive section
  const hideShowBtn = document.getElementById('hideShowBtn');
  const demoSection = document.getElementById('interactive-demo');
  if (hideShowBtn && demoSection) {
    hideShowBtn.addEventListener('click', () => {
      const isHidden = demoSection.style.display === 'none';
      demoSection.style.display = isHidden ? 'block' : 'none';
      hideShowBtn.innerHTML = isHidden ? '<i class="fas fa-eye-slash"></i> Hide section' : '<i class="fas fa-eye"></i> Show section';
    });
  }

  // ----- TASK 4: Form validation (contact.html) -----
  const contactForm = document.getElementById('contactForm');
  const feedbackDiv = document.getElementById('formFeedback');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const fullname = document.getElementById('fullname')?.value.trim() || '';
      const email = document.getElementById('email')?.value.trim() || '';
      const message = document.getElementById('message')?.value.trim() || '';

      const errors = [];
      if (!fullname) errors.push('Full name is required.');
      if (!email) errors.push('Email is required.');
      else if (!email.includes('@')) errors.push('Email must contain "@".');
      if (!message) errors.push('Message cannot be empty.');

      if (errors.length > 0) {
        alert('❌ ' + errors.join(' '));
        if (feedbackDiv) {
          feedbackDiv.innerHTML = `<i class="fas fa-exclamation-triangle"></i> ${errors.join(' · ')}`;
          feedbackDiv.className = 'feedback error';
        }
      } else {
        alert('✅ Success! Form is valid (demo).');
        if (feedbackDiv) {
          feedbackDiv.innerHTML = '<i class="fas fa-check-circle"></i> Message sent successfully!';
          feedbackDiv.className = 'feedback success';
        }
        // optional clear
        // contactForm.reset();
      }
    });
  }

  // clear button
  const clearBtn = document.getElementById('clearFormBtn');
  if (clearBtn && contactForm && feedbackDiv) {
    clearBtn.addEventListener('click', () => {
      contactForm.reset();
      feedbackDiv.innerHTML = '';
      feedbackDiv.className = 'feedback';
    });
  }
});

/* ========== style.css – MODERN, CLEAN, ORGANISED ========== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --primary: #2563eb;
  --primary-dark: #1d4ed8;
  --secondary: #7c3aed;
  --accent: #f59e0b;
  --dark: #0f172a;
  --light: #f8fafc;
  --gray: #e2e8f0;
  --text: #1e293b;
  --glass-bg: rgba(255,255,255,0.7);
  --shadow: 0 20px 25px -5px rgba(0,0,0,0.05), 0 10px 10px -5px rgba(0,0,0,0.02);
}

body {
  font-family: 'Inter', sans-serif;
  background-color: #f1f5f9;
  color: var(--text);
  line-height: 1.6;
  scroll-behavior: smooth;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* ===== HEADER & NAVIGATION (modern) ===== */
.site-header {
  background: white;
  box-shadow: 0 4px 20px rgba(0,0,0,0.02);
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(8px);
  background-color: rgba(255,255,255,0.85);
}
.site-header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;
}
#mainTitle {
  font-size: 1.8rem;
  font-weight: 700;
  background: linear-gradient(135deg, #2563eb, #7c3aed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.thin {
  font-weight: 400;
  font-size: 1.2rem;
  color: #64748b;
  -webkit-text-fill-color: #64748b;
}

.menu {
  display: flex;
  gap: 1rem;
  list-style: none;
}
.menu li a {
  text-decoration: none;
  font-weight: 600;
  padding: 0.6rem 1.4rem;
  border-radius: 40px;
  background: var(--gray);
  color: var(--dark);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}
.menu li a i {
  font-size: 1rem;
}
.menu li a:hover {
  background: var(--primary);
  color: white;
  transform: translateY(-2px);
}
.menu li a.active {
  background: var(--primary);
  color: white;
  box-shadow: 0 10px 15px -3px rgba(37,99,235,0.3);
}

/* ===== CARDS, GLASS, SECTIONS ===== */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.5);
  border-radius: 2rem;
  box-shadow: var(--shadow);
}
.intro-card {
  padding: 2rem;
  margin: 2rem 0;
}
.section-heading {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #0f172a;
}
.section-heading i {
  color: var(--primary);
  font-size: 2rem;
}
.divider {
  margin: 1rem 0;
}
.divider span {
  display: block;
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  border-radius: 4px;
}

/* grid */
.grid-2col {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.8rem;
  margin: 2rem 0;
}
.card {
  background: white;
  border-radius: 1.8rem;
  padding: 1.8rem;
  box-shadow: var(--shadow);
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.01);
}
.table-card {
  overflow-x: auto;
}

/* lists modern */
.styled-list {
  list-style: none;
  margin-top: 1rem;
}
.styled-list li {
  padding: 0.6rem 0;
  border-bottom: 1px dashed #cbd5e1;
  display: flex;
  align-items: center;
  gap: 10px;
}
.styled-list li a {
  text-decoration: none;
  color: var(--primary);
  font-weight: 500;
}
.styled-list.ordered {
  counter-reset: item;
}
.styled-list.ordered li {
  counter-increment: item;
}
.styled-list.ordered li::before {
  content: counter(item) ".";
  font-weight: 700;
  color: var(--secondary);
  margin-right: 8px;
}
.badge {
  background: #e2e8f0;
  border-radius: 40px;
  padding: 2px 10px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-left: 8px;
}

/* TABLE modern */
table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 8px;
}
th {
  text-align: left;
  padding: 1rem 1rem;
  background: #f8fafc;
  font-weight: 600;
  color: #1e293b;
  border-radius: 20px 20px 8px 8px;
}
td {
  background: white;
  padding: 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
}
/* specificity: element selector td, but we also style */
td:first-child {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}
td:last-child {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

/* media cards */
.media-card {
  background: white;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: var(--shadow);
  margin: 0;
}
.media-card img, .media-card video {
  width: 100%;
  height: auto;
  display: block;
}
.media-card figcaption {
  padding: 1rem;
  font-weight: 500;
  background: white;
  border-top: 1px solid #eef2f6;
}
.fancy-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 600;
  transition: gap 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
.fancy-link:hover {
  gap: 8px;
  color: var(--secondary);
}

/* ===== BUTTONS (modern, consistent) ===== */
.btn {
  border: none;
  padding: 0.75rem 1.8rem;
  border-radius: 40px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: white;
  color: #1e293b;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
}
.btn.primary { background: var(--primary); color: white; }
.btn.secondary { background: #f1f5f9; color: #1e293b; }
.btn.success { background: #10b981; color: white; }
.btn.info { background: #06b6d4; color: white; }
.btn.dark { background: #1e293b; color: white; }
.btn.warning { background: #f59e0b; color: white; }
.btn.small { padding: 0.4rem 1.2rem; font-size: 0.85rem; }
.btn:hover {
  filter: brightness(0.95);
  transform: translateY(-3px);
  box-shadow: 0 12px 20px -10px rgba(0,0,0,0.2);
}

.button-panel {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin: 2rem 0 1rem;
}
.dynamic-box {
  background: white;
  padding: 1.5rem;
  border-radius: 2rem;
  box-shadow: var(--shadow);
  margin: 1rem 0;
  font-weight: 500;
}
.date-box {
  background: var(--gray);
  padding: 0.8rem 1.5rem;
  border-radius: 40px;
  display: inline-block;
}

/* ===== FORM MODERN ===== */
.form-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.form-card {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2.5rem;
}
.input-group {
  margin-bottom: 1.5rem;
}
.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #334155;
}
.modern-input {
  width: 100%;
  padding: 1rem 1.5rem;
  border: 2px solid #e2e8f0;
  border-radius: 50px;
  font-size: 1rem;
  transition: 0.2s;
  background: white;
}
.modern-input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
}
textarea.modern-input {
  border-radius: 30px;
  resize: vertical;
}
.button-group {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
.feedback {
  margin-top: 2rem;
  padding: 1.2rem;
  border-radius: 50px;
  font-weight: 600;
}
.feedback.success {
  background: #d1fae5;
  color: #065f46;
  border-left: 6px solid #10b981;
}
.feedback.error {
  background: #fee2e2;
  color: #991b1b;
  border-left: 6px solid #ef4444;
}

/* footer */
.site-footer {
  background: white;
  padding: 2rem 0;
  text-align: center;
  margin-top: 4rem;
  border-top: 2px solid #e2e8f0;
}
.site-footer p {
  color: #64748b;
}

/* dark mode toggle (basic) */
.dark-mode {
  background-color: #0f172a;
  color: #e2e8f0;
}
.dark-mode .card,
.dark-mode .media-card,
.dark-mode .dynamic-box {
  background-color: #1e293b;
  color: #f1f5f9;
}
.dark-mode .site-header {
  background-color: rgba(15,23,42,0.9);
}

/* responsive */
@media (max-width: 640px) {
  .site-header .container {
    flex-direction: column;
    gap: 1rem;
  }
  .button-panel {
    justify-content: center;
  }
}
