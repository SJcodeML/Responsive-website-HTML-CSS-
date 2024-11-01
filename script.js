// // Select all elements with the class 'navbar-icon'  
// const hamburger = document.querySelectorAll(".hamburger");  

// // Iterate over each element in the NodeList and add an event listener  
// hamburger.addEventListener('click', () => {  
//     main.classList.toggle('v-class-resp');  
//     nav-part2.classList.toggle('v-class-resp');  
//     nav.classList.toggle('h-nav-resp');  
// });

// script.js  

document.addEventListener('DOMContentLoaded', function() {  
    const hamburger = document.querySelector('.hamburger');  
    const navPart2 = document.querySelector('.nav-part2');  

    hamburger.addEventListener('click', function() {  
        navPart2.classList.toggle('open'); // Toggle the 'open' class  
    });  
});