function toggleMenu(){
    // we're gonna target an element on our webpage and using that element
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    
    icon.classList.toggle("open")
}