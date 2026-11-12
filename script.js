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


// 1. Fitur Klik untuk Salin Email
const copyEmailBtn = document.getElementById('copy-email-btn');
const emailText = document.getElementById('email-text');
const copyStatus = document.getElementById('copy-status');

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText.innerText.toLowerCase());
    const originalNote = copyStatus.innerText;
    copyStatus.innerHTML = `<strong style="color: #2563eb;">✓ Email berhasil disalin ke clipboard!</strong>`;
    setTimeout(() => {
      copyStatus.innerText = originalNote;
    }, 3000);
  });
}

// 2. Pilihan Topik pada Form Kontak
const topicPills = document.querySelectorAll('.topic-pill');
topicPills.forEach(pill => {
  pill.addEventListener('click', () => {
    topicPills.forEach(p => {
      p.classList.remove('active');
      p.innerText = p.getAttribute('data-topic');
    });
    pill.classList.add('active');
    pill.innerText = `✓ ${pill.getAttribute('data-topic')}`;
  });
});

// 3. Slider Perkiraan Anggaran Realtime
const budgetSlider = document.getElementById('budget-slider');
const budgetDisplay = document.getElementById('budget-display');

if (budgetSlider) {
  budgetSlider.addEventListener('input', () => {
    budgetDisplay.innerText = `RP ${budgetSlider.value} JUTA`;
  });
}

// 4. Simulasi Kirim Pesan Form
const projectForm = document.getElementById('project-form');
if (projectForm) {
  projectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const senderName = document.getElementById('sender-name').value;
    alert(`Terima kasih ${senderName}! Pesan dan ide proyekmu sudah terkirim.`);
    projectForm.reset();
    budgetDisplay.innerText = 'RP 5 JUTA';
  });
}