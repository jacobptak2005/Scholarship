document.addEventListener("DOMContentLoaded",()=>{
var nav1 = false;
var nav2 = false;
let arrow = document.querySelectorAll(".arrow");
	for (var i = 0; i < arrow.length; i++) {
	arrow[i].addEventListener("click", (e)=>{
	let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
	arrowParent.classList.toggle("showMenu");
	});
	}
	let sidebar = document.querySelector(".sidebar");
	let sidebarBtn = document.querySelector(".menu-btn");
  let sidebarBtn_Y = document.querySelector('.menu-btn-Y')
  const menuBtn = document.querySelector('.menu-btn');
  const menuBtn_Y = document.querySelector('.menu-btn-Y');
  const close_burger = document.querySelector('.menu-btn__burger-Y');
  const move_content = document.querySelector('.content');
  const function_Y = document.getElementById('#nav-icon1');
  let menuOpen = false;
  let menuOpen_Y = false;
	sidebarBtn.addEventListener("click", ()=>{
        sidebar.classList.toggle("close");
        if(!menuOpen) {
          menuBtn.classList.add('open');
          menuOpen = true;
        } else {
          menuBtn.classList.remove('open');
          menuOpen = false;
        }
})
function_Y.addEventListener("click", ()=>{
  function_Y.classList.toggle("open");
})


});

