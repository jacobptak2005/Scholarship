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
  const menuBtn = document.querySelector('.menu-btn');
  let menuOpen = false;
  const logout = document.querySelector(".logout-icon");
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
logout.addEventListener("click", ()=>{

  alert("You have successfully logged out")
})



});

