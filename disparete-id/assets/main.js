const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('#catalog-list .item');

filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    items.forEach((item) => {
      item.style.display = (filter === 'all' || item.getAttribute('data-category') === filter) ? 'flex' : 'none';
    });
  });
});

const waBtn = document.getElementById('btn-wa');
if (waBtn) {
  waBtn.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'click_wa', { link_text: 'Pesan via WhatsApp' });
    }
  });
}