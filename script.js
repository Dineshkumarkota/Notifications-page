console.log("JS loaded!");

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.querySelector('.notifications-counter');
  const markAllBtn = document.querySelector('.mark-all-button');

  const updateCounter = () => {
    const unread = document.querySelectorAll('#list li.new-notification').length;
    console.log("Unread count:", unread);
    counter.textContent = unread;
  };

  updateCounter();

  markAllBtn.addEventListener('click', () => {
    document.querySelectorAll('#list li.new-notification').forEach((item) => {
      item.classList.remove('new-notification');
      const dot = item.querySelector('.notification-dot');
      if (dot) dot.style.display = 'none';
    });
    updateCounter();
  });
});
