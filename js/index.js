// Change style of Navbar on scroll
window.onscroll = function() {changeNavStyle()};

const changeNavStyle = () => {
    let navbar = document.getElementById("myNavbar");

    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card-2" + " w3-animate-top" + " w3-black";
    } else {
        navbar.className = navbar.className.replace(" w3-card-2 w3-animate-top w3-black", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
const toggleFunction = () => {
    let navbar = document.getElementById("myNavbarSmall");

    if (navbar.className.indexOf("w3-show") === -1) {
        navbar.className += " w3-show";
    } else {
        navbar.className = navbar.className.replace(" w3-show", "")
    }
}