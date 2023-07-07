
/*******************Dark mode*********************** */
let moodbtn = document.querySelector(".dark-mode");
let dark_theme ="dark-theme";


/*******************Burger*************************/
let burger = document.querySelector("#burger");
let nav_ul = document.querySelector(".nav-ul");
let close = document.querySelector("#close");

/***progress animation***/

let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");
let skills_section = document.querySelector("#skills");


/***progress counter***/

let outer1 = document.querySelector("#outer1");
let outer2 = document.querySelector("#outer2");
let outer3 = document.querySelector("#outer3");
let prog1 = document.querySelector(".prog1");
let prog2 = document.querySelector(".prog2");
let prog3 = document.querySelector(".prog3");
let counter = 0;

/********************navbarlinks*********************** */
let links=  document.querySelectorAll('nav li a');
let sections = document.querySelectorAll(".section");



/***************************mainbtn**********************************/


let mainbtn = document.querySelector("#main-btn");


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
    nav_ul.style = ` right:-10px;`
    close.style = `display:block;`
}

close.onclick = ()=>{
    nav_ul.style = ` right:-2000px;`
    burger.style = `display:block;`
}

/******setting up skills animation ****************************/



/***************** skills counter*********************/



window.addEventListener ('scroll',()=>{

   

    if( window.scrollY >=skills_section.offsetTop - skills_section.offsetHeight * 0.4){
       c1.style = `animation: progress1 1.2s linear forwards;` 
       c2.style = `animation: progress2 1.2s linear forwards;`
       c3.style = `animation: progress3 1.2s linear forwards;`
       
       setInterval(()=>{
    
        if(counter <= outer1.getAttribute("data-skill")){
            counter++;
            prog1.innerHTML = `${counter-1}%`
            
        }else{clearInterval()};
        
        },25);
        
        setInterval(()=>{
            
            if(counter <= outer2.getAttribute("data-skill")){
                counter++;
                prog2.innerHTML = `${counter}%`
            }else{clearInterval()};
            },25);
        
        
            setInterval(()=>{
            
                if(counter <= outer3.getAttribute("data-skill")){
                    counter++;
                    prog3.innerHTML = `${counter+1}%`
                    
                }else{clearInterval()};
                },25);
    }
  
})
    




/******************main-btn*******************/

mainbtn.onclick = function(){
    window.scroll({
    top:sections[2].offsetTop,
    behavior: "smooth",
    
})}



/******************navlinks************************/

window.onscroll = function () {
    let scrollpos = document.documentElement.scrollTop;
   
    sections.forEach((section) => {
        if (scrollpos >= section.offsetTop - section.offsetHeight * 0.2   &&  scrollpos <section.offsetTop + section.offsetHeight - section.offsetHeight * 0.2 ) {
          
          
            let sectionid = section.attributes.id.value;
          
             links.forEach( link =>{

                if(link.getAttribute("href") === "#" + section.getAttribute("id")){


                    links.forEach(temp =>{
                        temp.classList.remove("active");
                    })
                    
                    link.classList.toggle("active");


                }







             })


        }

  
    }

    )
}