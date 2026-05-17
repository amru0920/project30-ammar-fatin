// ========== FOUNDERS DATA - DUA ORANG SAHAJA ==========
const founders = [
  { 
    name: "Amir bin Hakim", 
    role: "Co-Founder & Tech Lead", 
    avatarIcon: "fas fa-laptop-code", 
    bio: "Pakar teknologi yang percaya bahawa kod yang baik boleh mengubah dunia. Seorang pembaca tegar dan pencinta kopi." 
  },
  { 
    name: "Lisa bt. Abdullah", 
    role: "Co-Founder & Creative Director", 
    avatarIcon: "fas fa-paint-brush", 
    bio: "Mempunyai 8 tahun pengalaman dalam rekaan visual. Percaya bahawa setiap jenama ada cerita unik untuk disampaikan." 
  }
];

// ========== FUN FACTS ARRAY ==========
const funFacts = [
  "☕ Amir & Lisa minum lebih 1,000 cawan kopi setahun!",
  "🎉 95% projek mendapat testimonial 5 bintang.",
  "🌏 Berjaya membantu 20+ perniagaan tempatan.",
  "📚 Setiap Jumaat, mereka belajar trend terkini bersama.",
  "💡 Pernah hasilkan website dalam masa 48 jam untuk usahawan sosial.",
  "🏆 Pemenang 'Best Duo Founder 2024' oleh StartupMalaysia."
];

// ========== COUNTER TARGETS ==========
const projectsTarget = 156;
const clientsTarget = 98;
const teamTarget = founders.length;  // = 2

// ========== RENDER FOUNDERS CARDS ==========
function renderTeam() {
  const gridContainer = document.getElementById('teamGrid');
  if (!gridContainer) return;
  
  gridContainer.innerHTML = '';
  founders.forEach(member => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'team-card';
    cardDiv.innerHTML = `
      <div class="avatar"><i class="${member.avatarIcon}"></i></div>
      <h4>${member.name}</h4>
      <div class="role">${member.role}</div>
      <div class="bio">${member.bio}</div>
    `;
    gridContainer.appendChild(cardDiv);
  });
}

// ========== ANIMATE NUMBER COUNTERS ==========
function animateNumber(elementId, start, end, duration = 1500) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    element.innerText = currentValue;
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.innerText = end;
    }
  };
  window.requestAnimationFrame(step);
}

function startCounters() {
  animateNumber('projectsCount', 0, projectsTarget, 1700);
  animateNumber('clientsCount', 0, clientsTarget, 1700);
  animateNumber('teamCount', 0, teamTarget, 900);
}

// ========== FUN FACT FUNCTIONS ==========
function refreshFunFact() {
  const factSpan = document.getElementById('funFactText');
  if (factSpan) {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    factSpan.innerHTML = funFacts[randomIndex];
  }
}

let factInterval;
function startFunFactCycle() {
  refreshFunFact();
  if (factInterval) clearInterval(factInterval);
  factInterval = setInterval(() => {
    refreshFunFact();
  }, 8000);
}

// ========== CONTACT BUTTON HANDLER ==========
function setupContactButton() {
  const btn = document.getElementById('contactBtn');
  if (btn) {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Create toast notification
      const messageDiv = document.createElement('div');
      messageDiv.innerHTML = '📧 hello@amirlisa.com  |  📞 +60 12 345 6789';
      messageDiv.style.position = 'fixed';
      messageDiv.style.bottom = '30px';
      messageDiv.style.left = '50%';
      messageDiv.style.transform = 'translateX(-50%)';
      messageDiv.style.backgroundColor = '#1e2f3c';
      messageDiv.style.color = 'white';
      messageDiv.style.padding = '12px 24px';
      messageDiv.style.borderRadius = '60px';
      messageDiv.style.fontWeight = '500';
      messageDiv.style.fontSize = '0.95rem';
      messageDiv.style.zIndex = '999';
      messageDiv.style.boxShadow = '0 10px 25px -5px rgba(0,0,0,0.2)';
      messageDiv.style.backdropFilter = 'blur(8px)';
      messageDiv.style.background = '#0f2b3fcc';
      messageDiv.style.border = '1px solid #ffcd6b';
      document.body.appendChild(messageDiv);
      
      setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.4s';
        setTimeout(() => messageDiv.remove(), 500);
      }, 3000);
    });
  }
}

// ========== INTERACTIVE HOVER EFFECTS ==========
function setupInteractiveElements() {
  // Hero title hover effect
  const heroTitle = document.querySelector('.about-hero h1');
  if (heroTitle) {
    heroTitle.addEventListener('mouseenter', () => {
      heroTitle.style.transition = 'all 0.2s';
      heroTitle.style.textShadow = '0 2px 12px rgba(44,110,158,0.2)';
    });
    heroTitle.addEventListener('mouseleave', () => {
      heroTitle.style.textShadow = 'none';
    });
  }
  
  // Fun fact box click to refresh
  const funBox = document.getElementById('funFactBox');
  if (funBox) {
    funBox.addEventListener('click', () => {
      refreshFunFact();
      funBox.style.transform = 'scale(1.02)';
      setTimeout(() => { funBox.style.transform = ''; }, 200);
    });
  }
  
  // Card click logging (optional)
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      console.log('📖 Card clicked - explore more about us');
    });
  });
}

// ========== INITIALIZE EVERYTHING ==========
function init() {
  renderTeam();
  startCounters();
  startFunFactCycle();
  setupContactButton();
  setupInteractiveElements();
  console.log('✅ About Us page loaded | 2 Founders: Amir & Lisa');
}

// Run when DOM is fully loaded
window.addEventListener('DOMContentLoaded', init);