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
