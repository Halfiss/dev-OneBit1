  $(document).ready(function(){
    $('[type="tel"]').mask('+38(000)-00-00-000');
    $('#password').hideShowPassword({
        innerToggle: true
    });
  });

  
// const btnHistoryBack = document.querySelector('#history-back');
// const backHistory = ()=> window.history.back();
// btnHistoryBack.addEventListener('click', backHistory);

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > header.offsetTop) {
      header.classList.add("fixed");
  } else {
      header.classList.remove("fixed");
  }
});


const time = 11;
let greeting;

if (time < 4){
  greeting = "Good Night";
} else if (time < 12) {
  greeting = "Good Morning";
} else if (time < 16) {
  greeting = "Good day";
} else if (time < 24) {
  greeting = "Good evening";
} else {
  greeting = "Wrong Time!"
}

console.log(greeting)