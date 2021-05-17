/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const allSections = document.querySelectorAll("section");
const navbar_List = document.getElementById("navbar__list");
const pageHeader = document.querySelector(".page__header");
const toTop_btn = document.getElementById("btn"); 
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const  buildNavMenu = (sections) => {

    sections.forEach(section => {
       sectionTitle = section.getAttribute("data-nav");
       sectionLink = section.getAttribute("id");

       // create a link in nav menu
       let newList = document.createElement("li");
       newList.innerHTML = `<a class ="menu__link" href= "#${sectionLink}"> ${sectionTitle}</a>`;

       // set the links in the menu
       fragment.appendChild(newList);
    });
    navbar__list.appendChild(fragment);
};



// 1- Add class 'active' to section when near top of viewport
const sectionInViewPort = () => {

    allSections.forEach(section => {
     //if section in viewport
    // const scrollPosition = document.documentElement.scrollTop;

        if( pageYOffset >= section.offsetTop){
            //add the active class to the section in the view port
            section.classList.add("your-active-class");

            // get the id of the section in the view port
            const sectionId = section.attributes.id.value;
            
            removeViewPortLink();
            addViewPortLink(sectionId);
            //remove the active class
        } else{
            section.classList.remove("your-active-class");
        };
    });
};

    // remove the viewport__link from the nav
    function removeViewPortLink(){
        const allLinks = document.querySelectorAll(".navbar__menu a");
        allLinks.forEach( link =>{
            link.classList.remove("viewport__link");
        });
    };

  
    // add the viewport__link to the nav
    function  addViewPortLink(id){
    const linkInviewPort = `nav a[href ="#${id}"]`;
    document.querySelector(linkInviewPort).classList.add("viewport__link");
    };



// Scroll to anchor ID using scrollTO event
const  scrollToSection = () => {
    // get all links with class .menu__link
    const links = document.querySelectorAll(".navbar__menu .menu__link");
    for( let link of links){
        link.addEventListener("click" , (e)=>{
            e.preventDefault();
            // get section id
            const sectionID = document.querySelector(link.getAttribute("href"));
    
            // scrolling to the appropriate section
            sectionID.scrollIntoView({behavior:"smooth", blok:"start"});
        });
    };

};



// Hide navbar while not scrolling

// window.addEventListener('scroll', function(){
//     // const sticky = document.querySelector('.page__header');
//     pageHeader.classList.toggle('page__header', window.scrollY > 0);
   
// })



// return the scroll value in the begining 

let previous = window.pageYOffset || document.documentElement.scrollTop ;

function hideNav (){
    let current = window.pageYOffset || document.documentElement.scrollTop ;

    if( previous > current){
        pageHeader.style.top = "0";
    }
     else{
        pageHeader.style.top = "-100px" ;
    };
    previous = current;
};



// scroll to top button

// 1 show or hide the button in the screen
const showButton = () => {

    if(scrollY >= 1200){
        // showing the button
        toTop_btn.style.display = "block";
    }
    // hideing the button
    else{
        toTop_btn.style.display = "none";
    };

};

// 2 make buuton go to top
const goToTop = () => {
    window.scrollTo(0,0);
};


// 
//  * End Main Functions
//  * Begin Events

// To Top Buuuton 
// Show or hide the button
window.addEventListener("scroll" , showButton);

// Make the button go to top
toTop_btn.addEventListener("click", goToTop);

// Hide navBar
window.addEventListener("scroll" , hideNav);

// Set sections as active
document.addEventListener("scroll" , sectionInViewPort);



// Build menu 
buildNavMenu(allSections);

// Scroll to section on link click

scrollToSection();









