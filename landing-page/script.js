
AOS.init({
  
  offset: 120, 
  delay: 0, 
  duration: 900, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});
document.getElementById("sendBtn").addEventListener("click", function () {
    const alertBox = document.getElementById("success-alert");
    alertBox.classList.remove("d-none");
    
    
    setTimeout(() => {
      alertBox.classList.add("d-none");
    }, 3000);
  });
  function showMoreDestinations(button) {
    const section = document.getElementById("moreDestinations");
    section.style.display = "flex"; 
    button.style.display = "none"; 
  }