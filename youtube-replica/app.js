/**
 * YouTube Desktop Replica - Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const menuToggle = document.getElementById('menuToggle');
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const userMenuBtn = document.getElementById('userMenuBtn');
  const accountMenu = document.getElementById('accountMenu');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const chipsScrollContainer = document.getElementById('chipsScrollContainer');
  const chipsNextBtn = document.getElementById('chipsNextBtn');
  const chips = document.querySelectorAll('.chip');
  const feedCards = document.querySelectorAll('.feed-card');
  const videoModal = document.getElementById('videoModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalChannel = document.getElementById('modalChannel');
  const modalDesc = document.getElementById('modalDesc');
  const modalCoverImg = document.getElementById('modalCoverImg');
  const navItems = document.querySelectorAll('.nav-item');

  // 1. Sidebar Toggle
  menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-collapsed');
  });

  // 2. Navigation items active state
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // 3. Category Filter Chips
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const filter = chip.getAttribute('data-filter');
      filterCards(filter);
    });
  });

  // Scroll chips container
  chipsNextBtn.addEventListener('click', () => {
    chipsScrollContainer.scrollBy({
      left: 200,
      behavior: 'smooth'
    });
  });

  function filterCards(filter) {
    feedCards.forEach(card => {
      const categories = card.getAttribute('data-category') || '';
      if (filter === 'all' || categories.includes(filter)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // 4. Search Bar Filtering
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length > 0) {
      clearSearchBtn.classList.add('visible');
    } else {
      clearSearchBtn.classList.remove('visible');
    }

    feedCards.forEach(card => {
      const title = (card.getAttribute('data-video-title') || '').toLowerCase();
      if (title.includes(query)) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.classList.remove('visible');
    searchInput.focus();
    feedCards.forEach(card => card.style.display = 'flex');
  });

  // 5. Account Menu & Theme Toggle
  userMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    accountMenu.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (!accountMenu.contains(e.target) && e.target !== userMenuBtn) {
      accountMenu.classList.remove('open');
    }
  });

  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeToggleBtn.querySelector('span').textContent = isDark 
      ? 'Appearance: Dark theme' 
      : 'Appearance: Light theme';
  });

  // 6. Interactive Video Modal
  window.openModal = function(title, channel, desc, coverUrl) {
    modalTitle.textContent = title;
    modalChannel.textContent = channel;
    modalDesc.textContent = desc;
    if (coverUrl) {
      modalCoverImg.src = coverUrl;
      modalCoverImg.style.display = 'block';
    } else {
      modalCoverImg.style.display = 'none';
    }
    videoModal.classList.add('active');
  };

  modalCloseBtn.addEventListener('click', () => {
    videoModal.classList.remove('active');
  });

  videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
      videoModal.classList.remove('active');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
      videoModal.classList.remove('active');
    }
  });

  // 7. Subscribe & Like Interactive feedback
  const subBtn = document.querySelector('.sub-btn');
  if (subBtn) {
    subBtn.addEventListener('click', function() {
      if (this.textContent === 'Subscribe') {
        this.textContent = 'Subscribed ✓';
        this.style.backgroundColor = 'var(--bg-surface)';
        this.style.color = 'var(--text-primary)';
      } else {
        this.textContent = 'Subscribe';
        this.style.backgroundColor = 'var(--text-primary)';
        this.style.color = 'var(--bg-primary)';
      }
    });
  }

  const likeBtn = document.querySelector('.like-btn');
  if (likeBtn) {
    likeBtn.addEventListener('click', function() {
      this.classList.toggle('liked');
      if (this.classList.contains('liked')) {
        this.style.color = '#065FD4';
      } else {
        this.style.color = 'var(--text-primary)';
      }
    });
  }
});
