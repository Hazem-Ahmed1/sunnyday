let bar = document.querySelector(".bar");
let nav = document.getElementById("head-nav");
let bigNav = document.querySelector(".items");
let header = document.querySelector("header");



bar.addEventListener("click",()=>{
  nav.classList.toggle("media-ul");
  bigNav.classList.toggle("block");
  if(nav.classList.contains("mainnav")){
    nav.classList.remove("mainnav")
  }
  else
  nav.classList.add("mainnav")
})
















































new WOW().init();

wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();