// DOM Elements
const toggler = document.querySelector('.icon');
const navList = document.querySelector('.navlist');
const dropdownTag = document.querySelector('.dropdown-tag');
const dropdownNav = document.querySelector('.dropdown-nav');

// Media query for Small devices 
const mediaQ = window.matchMedia('@media all and (max-width: 767px)');

// Toggle states
let toggleActive = false;
let dropdownActive = false;

// Toggle functions
const toggle = () => {
	if(toggleActive){
		toggleActive = false
		navList.style.display = "none";
	}else{
		toggleActive = true
		navList.style.display = "inline-block";
	}
}
const hideDropdown = () => {
	if(!mediaQ.matches){
		if(dropdownActive){
			dropdownActive = false
			dropdownNav.style.display = "none"
		}else{
			dropdownActive = true
			dropdownNav.style.display = "block"
		}
	}
}

// Event listeners
toggler.addEventListener('click', toggle);
dropdownTag.addEventListener('click', hideDropdown);