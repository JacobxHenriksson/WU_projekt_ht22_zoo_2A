document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("scroll_button").addEventListener("click", () => {
        window.scroll({
            top: 850,
            behavior: "smooth"
        })
    })
    
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("myslides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      slides[slideIndex-1].style.display = "block";  
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
  
    document.addEventListener("scroll", () => {

      if(window.scrollY > 800){
        document.getElementsByClassName("task_bar_index")[0].classList.add("task_animation")
      }
  
      else{
        document.getElementsByClassName("task_bar_index")[0].classList.remove("task_animation")
      }
    })
  
  })