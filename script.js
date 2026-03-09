





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
      <div class="cs-hero-placeholder"><img src="photos/knight_lab_mockups.jpeg" alt="Knight Lab prototypes"></div>
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
  
        <div class="cs-pullquote">How might we use social media to bring news to users in a way that leaves them informed, but not frustrated?</div>
  
        <span class="cs-section-label">Understanding the problem</span>
        <h3 class="cs-h2">Analyzing Knight Lab, Financial Times Strategies data</h3>
        <p class="cs-p">We began our project with a deep dive into a two-year study the Knight Lab did with Financial Times Strategies. 
        The study asked people in India, Nigeria, Brazil, the UK and the U.S about their news habits. Most of them consumed 
        news primarily on social media. <br><br> 
        These were some of our takeaways takeaways: </p>
  
        <div class="cs-hmw">
          <span class="cs-hmw-label">People...</span>
          <ul>
            <li>Want to know their news is credible.</li>
            <li>Want in-depth details without having to read long-form content.</li>
            <li>Enjoy sharing news with others.</li>
            <li>Tend to resist change in how they interact with news.</li>
          </ul>
        </div>
  
        <span class="cs-section-label">Research</span>
        <h3 class="cs-h2">Interviewing 20+ users</h3>
        <p class="cs-p">Beyond our initial data analysis, we spoke with young social media users 
        at every stage of our process to narrow our focus and fine-tune our designs. Early on, we 
        also tested alternative forms of social media like Bluesky and Mastodon to understand 
        how the philosophy of decentralized networks might inform our own designs. <br><br> 
        Our first round of interviews helped us synthesize our findings into three common personas
        we wanted to target: </p>

        <div class="cs-personas">

      <div class="cs-persona">
        <div class="cs-persona-header">
          <p class="cs-persona-name">1.</p>
          <p class="cs-persona-title">The Swamped</p>
        </div>
        <p class="cs-persona-desc">
          Consumes so much news that they become uncomfortable.<br><br> 
          Frustrated by negativity and misinformation.
        </p>
        <p class="cs-persona-quote">
          "I like to be informed, but it's not always worth the stress."
        </p>
      </div>

      <div class="cs-persona">
        <div class="cs-persona-header">
          <p class="cs-persona-name">2.</p>
          <p class="cs-persona-title">The Scroller</p>
        </div>
        <p class="cs-persona-desc">
        Passively scrolls through headlines on social media, often unsatisfied by what they see. 
        </p>
        <p class="cs-persona-quote">
        "What do I get out of this?" 
        </p>
      </div>

      <div class="cs-persona">
        <div class="cs-persona-header">
          <p class="cs-persona-name">3.</p>
          <p class="cs-persona-title">The Selective</p>
        </div>
        <p class="cs-persona-desc">
        Loves social media for entertainmnet and socialization, but rarely engages with news that's not tailored to their personal interests.
        </p>
        <p class="cs-persona-quote">
        "I mean I'll look at [news] if it comes up, but I'm not gonna go searching for it."
        </p>
      </div>
      </div>
  
        <span class="cs-section-label">Process</span>
        <h3 class="cs-h2">Design, test, adapt, repeat</h3>
        <p class="cs-p">We brainstormed over a dozen ideas. Some of our early favorites included a “News Wrapped” weekly summary feature 
        and browser extensions that could collect information and offer relevant suggestions 
        for news habit improvement. However, when we tested low-fidelity designs 
        with users, we found that <strong>people preferred features they didn't have to actively 
        seek out.</strong> Downloading an extension or making the effort to read a weekly summary
        wasn't realistic for them. <br><br>    
        So, we then pivoted to focus on features that could seamlessly integrate
        into users' existing social media habits.
        </p>
        <div class="cs-img-placeholder"><img src="photos/knight_lab_process.jpeg" alt="Knight Lab process"></div>
        <p class = "cs-p">We narrowed down to three ideas -- one for each 
        persona -- which we tested and iterated on until they were polished prototypes. 
        Key changes involved making sure our features <strong>could be turned on and off</strong>, 
        <strong>fit into existing social media norms</strong> and 
        were <strong>as intuitive as possible.</strong> 

        </p> 
  
        <span class="cs-section-label">Outcome</span>
        <h3 class="cs-h2">Presenting our prototypes to the Knight Lab</h3>
        <p class="cs-p">For The Swamped: The Gray Scale</p>
        <p class="cs-p">For The Scroller: The Algorithm Shuffle</p>
        <p class="cs-p">For The Selective: The AI News Chatbot</p>
  
        <span class="cs-section-label">Takeaways</span>
        <h3 class="cs-h2">Proper research is key!</h3>
        <p class="cs-p">YOUR TEXT HERE</p>
      </div>
    `,
}
  
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