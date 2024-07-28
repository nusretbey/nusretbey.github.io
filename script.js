document.addEventListener("DOMContentLoaded", function() {
	const hamburgerMenu = document.getElementById('hamburger-menu');
	const navLinks = document.getElementById('nav-links');
  
	hamburgerMenu.addEventListener('click', function() {
	  navLinks.classList.toggle('active');
	});
  });

  document.addEventListener('DOMContentLoaded', function() {
	const carousels = document.querySelectorAll('.carousel');
	carousels.forEach(function(carousel) {
	  const prevButton = carousel.querySelector('.carousel-control-prev');
	  const nextButton = carousel.querySelector('.carousel-control-next');
	  
	  prevButton.addEventListener('click', function() {
		$(carousel).carousel('prev');
	  });
  
	  nextButton.addEventListener('click', function() {
		$(carousel).carousel('next');
	  });
	});
  });