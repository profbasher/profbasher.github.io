// Show the popup after page load
  window.addEventListener('load', () => {
    const popup = document.getElementById('popup');
    popup.classList.add('show');
  });

  function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
  }