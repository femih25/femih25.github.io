function selectStamp(section, el) {
    document.querySelectorAll('.stamp').forEach(s => s.classList.remove('active'));
    el.classList.add('pressing');
    setTimeout(() => el.classList.remove('pressing'), 350);
  
    const current = document.querySelector('.content-section.active');
    if (current) {
      current.classList.add('fading-out');
      setTimeout(() => {
        current.classList.remove('active', 'fading-out');
        el.classList.add('active');
        const next = document.getElementById('content-' + section);
        next.classList.add('active');
      }, 250);
    } else {
      el.classList.add('active');
      document.getElementById('content-' + section).classList.add('active');
    }
  }


/* PROJECT CASE STUDY POPUPS */
const caseStudies = {
    knight: `
      <div class="cs-hero-placeholder">hero image</div>
      <div class="cs-body">
        <span class="cs-org">NU Knight Lab</span>
        <h2 class="cs-title">New approaches to news on social media</h2>
        <div class="cs-meta">
          <div class="cs-meta-item">
            <span class="cs-meta-label">Role</span>
            <span class="cs-meta-value">Designer</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Timeline</span>
            <span class="cs-meta-value">Sept. – Dec. 2025</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Team</span>
            <span class="cs-meta-value">Five designers & journalists</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Tools</span>
            <span class="cs-meta-value">Figma</span>
          </div>
        </div>
  
        <div class="cs-tags">
          <span class="cs-tag">UX Design</span>
          <span class="cs-tag">Figma</span>
          <span class="cs-tag">User Research</span>
          <span class="cs-tag">News Media</span>
        </div>
  
        <span class="cs-section-label">Overview</span>
        <p class="cs-p">As part of Northwestern's Knight Lab, our team worked to rethink how news reaches young audiences on social media — where most Gen Z users encounter the headlines.</p>
  
        <div class="cs-pullquote">YOUR PULL QUOTE HERE</div>
  
        <span class="cs-section-label">Understanding the problem</span>
        <h3 class="cs-h2">YOUR HEADING HERE</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
        <div class="cs-img-placeholder">image description</div>
  
        <div class="cs-hmw">
          <span class="cs-hmw-label">How might we...</span>
          <ul>
            <li>YOUR HMW QUESTION</li>
            <li>YOUR HMW QUESTION</li>
            <li>YOUR HMW QUESTION</li>
          </ul>
        </div>
  
        <span class="cs-section-label">Research</span>
        <h3 class="cs-h2">YOUR HEADING HERE</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
        <div class="cs-img-row">
          <div class="cs-img-placeholder">image 1</div>
          <div class="cs-img-placeholder">image 2</div>
        </div>
  
        <span class="cs-section-label">Process</span>
        <h3 class="cs-h2">YOUR HEADING HERE</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
        <div class="cs-img-placeholder">image description</div>
  
        <span class="cs-section-label">Outcome</span>
        <h3 class="cs-h2">YOUR HEADING HERE</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
  
        <span class="cs-section-label">Takeaways</span>
        <p class="cs-p">YOUR TEXT HERE</p>
      </div>
    `,
    amazon: `
      <div class="cs-hero-placeholder">hero image</div>
      <div class="cs-body">
        <span class="cs-org">Amazon Music</span>
        <h2 class="cs-title">Building community in Amazon Music</h2>
        <div class="cs-meta">
          <div class="cs-meta-item">
            <span class="cs-meta-label">Role</span>
            <span class="cs-meta-value">Designer</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Timeline</span>
            <span class="cs-meta-value">Jan. – Mar. 2025</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Team</span>
            <span class="cs-meta-value">Five journalism, design and engineering students</span>
          </div>
          <div class="cs-meta-item">
            <span class="cs-meta-label">Tools</span>
            <span class="cs-meta-value">Figma</span>
          </div>
        </div>
  
        <div class="cs-tags">
          <span class="cs-tag">UX Design</span>
          <span class="cs-tag">Figma</span>
          <span class="cs-tag">User Research</span>
        </div>
  
        <span class="cs-section-label">Overview</span>
        <p class="cs-p">YOUR TEXT HERE</p>
  
        <div class="cs-pullquote">YOUR PULL QUOTE HERE</div>
  
        <span class="cs-section-label">Problem Discovery</span>
        <h3 class="cs-h2">YOUR HEADING HERE</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
        <div class="cs-img-placeholder">image description</div>
  
        <div class="cs-hmw">
          <span class="cs-hmw-label">How might we...</span>
          <ul>
            <li>YOUR HMW QUESTION</li>
            <li>YOUR HMW QUESTION</li>
            <li>YOUR HMW QUESTION</li>
          </ul>
        </div>
  
        <span class="cs-section-label">Research</span>
        <h3 class="cs-h2">YOUR HEADING HERE</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
        <div class="cs-img-row">
          <div class="cs-img-placeholder">image 1</div>
          <div class="cs-img-placeholder">image 2</div>
        </div>
  
        <span class="cs-section-label">Process</span>
        <h3 class="cs-h2">YOUR HEADING HERE</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
        <div class="cs-img-placeholder">image description</div>
  
        <span class="cs-section-label">Final Design</span>
        <h3 class="cs-h2">YOUR HEADING HERE</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
        <div class="cs-img-row">
          <div class="cs-img-placeholder">screen 1</div>
          <div class="cs-img-placeholder">screen 2</div>
        </div>
  
        <span class="cs-section-label">Outcome</span>
        <p class="cs-p">YOUR TEXT HERE</p>
  
        <span class="cs-section-label">Takeaways</span>
        <p class="cs-p">YOUR TEXT HERE</p>
      </div>
    `
  };
  
  function openModal(id) {
    document.getElementById('modalContent').innerHTML = caseStudies[id];
    document.getElementById('modalOverlay').classList.add('active');
    document.getElementById('modalBox').scrollTop = 0;
    document.body.style.overflow = 'hidden';
  }
  
  function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = '';
  }
  
  function handleOverlayClick(e) {
    if (e.target === document.getElementById('modalOverlay')) closeModal();
  }