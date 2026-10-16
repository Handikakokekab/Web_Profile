    // Fitur Jam Realtime Otomatis
    function updateClock() {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      document.getElementById('live-time').innerText = `${hours}:${minutes} WIB`;
    }
    setInterval(updateClock, 1000);
    updateClock();
// Interaktivitas Section Keahlian
const skillItems = document.querySelectorAll('.skill-item');
const previewCounter = document.getElementById('preview-counter');
const previewTitle = document.getElementById('preview-title');
const previewDesc = document.getElementById('preview-desc');
const previewTags = document.getElementById('preview-tags');

skillItems.forEach(item => {
  item.addEventListener('click', () => {
    // Reset state active pada semua item
    skillItems.forEach(i => {
      i.classList.remove('active');
      const arrow = i.querySelector('.skill-arrow');
      if (arrow) arrow.remove();
    });

    // Pasang active di item yang diklik
    item.classList.add('active');
    
    // Tambah panah di item aktif
    const arrow = document.createElement('span');
    arrow.className = 'skill-arrow';
    arrow.innerText = '→';
    item.appendChild(arrow);

    // Ambil data dari atribut item
    const index = item.getAttribute('data-index');
    const title = item.getAttribute('data-title');
    const desc = item.getAttribute('data-desc');
    const tags = item.getAttribute('data-tags').split(',');

    // Update isi kartu preview kanan
    previewCounter.innerText = `0${index} / 06`;
    previewTitle.innerText = title;
    previewDesc.innerText = desc;

    // Update tags
    previewTags.innerHTML = tags.map(t => `<span class="tag">${t.trim()}</span>`).join('');
  });
});

// Interaktivitas Accordion Karya Pilihan
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  // Buka kartu saat diklik atau di-hover
  card.addEventListener('mouseenter', () => {
    projectCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});