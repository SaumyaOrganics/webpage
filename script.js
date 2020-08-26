window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};

document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener("click", () => {
  document.querySelector("html").style.scrollBehavior = "smooth";
  setTimeout(() => {
    document.querySelector("html").style.scrollBehavior = "unset";
  }, 1000);
});

var typed = new Typed('#typed',{
  strings:[
      'HANDCRAFTED' , 'WOMEN MADE', 'MADE IN INDIA' , 'ALL NATURAL' , 'CRUELTY FREE' , 'SULPHATE FREE', 'PARABEN FREE' 
  ],
  typeSpeed:50,
  backSpeed:50,
  loop:true
});