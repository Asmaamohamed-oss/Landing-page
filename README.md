# Landing Page Project
***
this project is a multi-section landing page with dynamically adding content to the page and dynamically building the navigation by using vanila js. 


## Table of Contents
1. Navigation is built dynamically as an unordered list.
2. Section Active State.
3. Scroll to the appropriate section of the page.
4. Hide fixed navigation bar while not scrolling.
5. the page contain a scroll to top button on the page that’s only visible when the user scrolls below the fold of the page.



### project information

* build the navigation bar dynamically by using the id and the data-nav attributes in the sections. 

``` javascript 
function buildNavMenu(sections){

    sections.forEach(section => {
       sectionTitle = section.getAttribute("data-nav")
       sectionLink = section.getAttribute("id");

       let newList = document.createElement("li")
       newList.innerHTML = `<a class ="menu__link" href= "#${sectionLink}"> ${sectionTitle}</a>`

       fragment.appendChild(newList)
    })
    navbar__list.appendChild(fragment)
}
```


* Add the active class while the section in view port then remove it useing the pageYOffset and the section.offsetTop properties.  
``` javascript 

const sectionInViewPort = () => {

    allSections.forEach(section => {
    const scrollPosition = document.documentElement.scrollTop;

        if( pageYOffset >= section.offsetTop){
           
            section.classList.add("your-active-class")

            const sectionId = section.attributes.id.value
        
            removeViewPortLink();
            addViewPortLink(sectionId)
            //remove the active class
        } else{
            section.classList.remove("your-active-class")
        }
    })
}

```

* what i used for buliding this page?

* ES6 const and let.

* ES6 arrow functions.

* the forEach and for of loop for the iterations.



####  important files in the  project

1. the css folder 
    -style.css

2. the js folder
    -app.js
    
3. index.html







