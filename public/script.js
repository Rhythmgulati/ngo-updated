const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  const heroswiper = new Swiper('.heroswiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay:true,
    effect:"fade",

  
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  function updateCounters() {
    var counters = document.querySelectorAll('.counter');
    counters.forEach(function(counter) {
      var currentValue = parseInt(counter.innerText);
      var targetValue = parseInt(counter.getAttribute('data-target')); // Get target value from data attribute
      var increment = targetValue > currentValue ? 1 : -1;
      var interval = Math.abs(Math.floor(1000 / (targetValue - currentValue))); // Adjust speed here

      var update = function() {
        if (currentValue !== targetValue) {
          currentValue += increment;
          counter.innerText = currentValue;
          setTimeout(update, interval);
        }
      };
      update();
    });
  }

  function checkScrollPosition() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var triggerPosition = 600; // Adjust this value as needed

    if (scrollPosition > triggerPosition) {
      updateCounters();
  // setInterval(updateCounters(), 100000);

      // Remove the event listener to ensure the function is only called once
      window.removeEventListener('scroll', checkScrollPosition);
    }
  }

  // Listen for the scroll event
  window.addEventListener('scroll', checkScrollPosition);
  // Update counters every 3 seconds



  const hamburger = document.querySelector(".hamburger-menu");
  hamburger.addEventListener("click",()=>{
   const hamburgerli = document.querySelector(".hamburger-li");
   const img = document.querySelector(".hamburger-menu img");
   hamburgerli.classList.toggle("visibilitytrue");
   if(img.src.endsWith("hamburger.png")){
    img.src="close.png";
   }else{
    img.src="hamburger.png"
   }
  })