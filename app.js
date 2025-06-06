// Open cart
document.querySelector('.cartbutton').addEventListener('click', () => {
    document.querySelector('.cartTab').classList.add('active');
  });
  
  // Close cart
  document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.cartTab').classList.remove('active');
  });