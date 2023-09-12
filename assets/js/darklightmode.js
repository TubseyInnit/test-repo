const darkmode = 
{
"--color":"#2592C9",
"--body-bg":"#393939",
"--body-color":"#FFFFFF",
"--body-pop":"#575757",
"icon":"<i class=\"bi bi-brightness-high\"></i>"
}
const lightmode = 
{
"--color":"#2592C9",
"--body-bg":"#FFFFFF",
"--body-color":"#000000",
"--body-pop":"#fff",
"icon":"<i class=\"bi bi-brightness-high-fill\"></i>"
}

var toggle = null;

const toggle_icon = document.getElementById("toggledarkmode");

// Get the root element
var r = document.querySelector(':root');

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    set_darkmode()
} else {
	set_lightmode()
}

// Create a function for setting a variable value
function set_darkmode() {
  r.style.setProperty('--color', darkmode["--color"]);
  r.style.setProperty('--body-bg', darkmode["--body-bg"]);
  r.style.setProperty('--body-color', darkmode["--body-color"]);
  r.style.setProperty('--body-pop', darkmode["--body-pop"]);
  toggle_icon.innerHTML = lightmode["icon"];
  toggle = true
}

function set_lightmode() {
  r.style.setProperty('--color', lightmode["--color"]);
  r.style.setProperty('--body-bg', lightmode["--body-bg"]);
  r.style.setProperty('--body-color', lightmode["--body-color"]);
  r.style.setProperty('--body-pop', lightmode["--body-pop"]);
  toggle_icon.innerHTML = darkmode["icon"];
  toggle = false
}

function toggleDarkmode() {
	if (toggle == true) {
		set_lightmode()
	} else {
		set_darkmode()
	}
}


