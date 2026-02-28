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
