import { Skills_Data , Projects_Data } from "./data.js";
/*******************Dark mode*********************** */
const moodbtn = document.querySelector(".dark-mode");
let dark_theme ="dark-theme";


/*******************Burger*************************/
const burger = document.querySelector("#burger");
const nav_ul = document.querySelector(".nav-ul");
const close = document.querySelector("#close");

/***Skills bar animation***/
const skills_section = document.querySelector("#skills");
const skills_cardbox = document.querySelector("#skills .card-box");


/********************navbarlinks*********************** */
const links=  document.querySelectorAll('nav li a');
const sections = document.querySelectorAll(".active-section");



/***************************mainbtn**********************************/


const mainbtn = document.querySelector("#main-btn");


/******************Dark mode*************************************************************/



let selectedtheme = localStorage.getItem("selected-theme");
let themeicon= localStorage.getItem("theme-icon");



let getcurrenttheme= function(){ document.body.classList.contains("dark-theme") ? "dark" : "light";}
let getcurrenticon= function(){ document.body.getAttribute("name") === "moon-sharp" ? "moon-sharp" : "sunny-sharp";}

if(selectedtheme){
    document.body.classList[selectedtheme === 'dark' ? 'add':'remove'](dark_theme);


}

moodbtn.onclick = function(){

   

document.body.classList.toggle(dark_theme);
moodbtn.setAttribute("name",getcurrenticon());
localStorage.setItem("selected-theme",getcurrenttheme());
localStorage.setItem("theme-icon",getcurrenticon());

 if(document.body.classList.contains(dark_theme) ){
        moodbtn.setAttribute("name","sunny-sharp")
    }
    else{
        moodbtn.setAttribute("name","moon-sharp")
    }

}






/*********************************burger***************************************/

burger.onclick = ()=>{
    nav_ul.style = ` right:-4rem;`
    close.style = `display:block;`
}

close.onclick = ()=>{
    nav_ul.style = ` right:-2000px;`
    burger.style = `display:block;`
}

/******setting up skills animation ****************************/

function AnimateSvgSkills(){
    /*
    const circles_2b_animated = document.querySelectorAll("#skills circle");
    circles_2b_animated.forEach(circle=>{
        circle.style = `animation: circleAnim 1.2s linear forwards;` 
    })
*/
}



/***************** skills counter*********************/



window.addEventListener ('scroll',()=>{
    // chicking which link in nav bar is active 
    ActiveNavLink();
})
    




/******************main-btn*******************/

mainbtn.onclick = function(){
    window.scroll({
    top:sections[2].offsetTop,
    behavior: "smooth",
    
})}



/******************navlinks************************/

  function ActiveNavLink() {
    let scrollpos = window.scrollY;
    let window_height = window.innerHeight;
   
    sections.forEach((section) => {
        if (scrollpos >= (section.offsetTop  - window_height *0.5) && scrollpos <= (section.offsetTop + section.scrollHeight)) {
        
            let sectionid = section.attributes.id.value;
                links.forEach( link =>{
                            if(link.getAttribute("href") === "#" + section.getAttribute("id")){
                                links.forEach(temp =>{
                                    temp.classList.remove("active");
                                })
                                
                                link.classList.toggle("active");
                            }
                    })
            // activate circle animation when section is skills
            
            if(sectionid === skills_section.attributes.id.value){
                
                AnimateSvgSkills()
            }
        }

        
    }
    )
}
/*************************** Display Skills **********************************/

let Skills_elements = ``;
let Skills_fragment = document.createDocumentFragment();

Skills_Data.forEach((skill) => {
    // Create elements for each skill
    let skillsCard = document.createElement('div');
    skillsCard.classList.add('skills-card');

    let outerDiv = document.createElement('div');
    outerDiv.classList.add('outer');
    

    let innerDiv = document.createElement('div');
    innerDiv.classList.add('inner');

    let skillsTextDiv = document.createElement('div');
    skillsTextDiv.classList.add('skills-text');

    let imgElement = document.createElement('img');
    imgElement.classList.add('skills-img');
    imgElement.src = skill.src;
    imgElement.alt = skill.alt;
    imgElement.setAttribute('loading', 'lazy');

    let h2Element = document.createElement('h2');
    h2Element.textContent = skill.name;

    // Append elements to their respective parent elements
    skillsTextDiv.appendChild(imgElement);
    skillsTextDiv.appendChild(h2Element);
    innerDiv.appendChild(skillsTextDiv);
    outerDiv.appendChild(innerDiv);
    skillsCard.appendChild(outerDiv);

    // Append the SVG element (assuming it's the same for all cards)
    let svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgElement.classList.add('skills-card-svg');
    svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgElement.setAttribute('version', '1.1');
    svgElement.setAttribute('width', '16.25rem');
    svgElement.setAttribute('height', '16.25rem');


    let circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    console.log(skill.strokeColor)
    circleElement.setAttribute('stroke', skill.strokeColor);
    circleElement.setAttribute('cx', '8.125rem');
    circleElement.setAttribute('cy', '8.125rem');
    circleElement.setAttribute('r', '7.5rem');
    circleElement.setAttribute('stroke-linecap', 'round');
    svgElement.appendChild(circleElement);

    // Append SVG element to skills card
    skillsCard.appendChild(svgElement);

    // Append each skillsCard to the fragment
    Skills_fragment.appendChild(skillsCard);
});

// Append the fragment to the container
skills_cardbox.appendChild(Skills_fragment);


/*
    <div class="skills-card">
            <div id="outer3"class="outer" style="stroke:${skill.strokeColor};">
                <div class="inner">
                    <div class="skills-text">
                        <img  class="skills-img" src="${skill.src}" alt="${skill.alt}">
                        <h2 id="js">${skill.name}</h2>
                    </div>
                </div>
            </div>
            <svg class="skills-card-svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="16.25rem" height="16.25rem">
                <defs>
                <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                </linearGradient>
                </defs>
                <circle id="c3" cx="8.125rem" cy="8.125rem" r="7.5rem" stroke-linecap="round" />
            </svg>
        </div>

*/

/***********************************Projects load***************************************/
let CardBox_Projects = document.querySelector(".projects .card-box");
let projects_fragment = document.createDocumentFragment();
Projects_Data.forEach((project)=>{
    let  card = document.createElement("div");
    card.classList.add("proj-card");
    // creating children of card which are img and p
    let img = document.createElement("img");
    img.setAttribute("src",project.src);
    img.setAttribute("alt",project.name);
    img.setAttribute("width",300);
    img.setAttribute("height",200);
    img.setAttribute("loading","lazy");
    let name = document.createElement("h2");
    name.classList.add("proj-title");
    name.textContent = project.name;
    let desc = document.createElement("p");
    desc.classList.add("proj-p");
    desc.textContent = project.desc;
    let date_link_wrapper = document.createElement("div");
    date_link_wrapper.classList.add("date-link-wrapper");
    let date = document.createElement("a");
    date.classList.add("proj-date");
    date.textContent = project.date;
    let a = document.createElement("a");
    a.setAttribute("href","");
    a.classList.add("btn-link");
    a.textContent = "Learn More";
    // appending to date_link_wrapper
    date_link_wrapper.appendChild(date);
    date_link_wrapper.appendChild(a);
    // now appending to card
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(desc);
    card.appendChild(date_link_wrapper);
    // now appending to fragment element
    projects_fragment.appendChild(card);

})

CardBox_Projects.appendChild(projects_fragment); // now appending whole to Dom at once



