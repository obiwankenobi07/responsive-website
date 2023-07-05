window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.nav-bar');
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});




