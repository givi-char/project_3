
let slideIndex = 1;
showSlides(slideIndex);


setInterval(function(){
    showSlides(slideIndex += 1);
}, 3000);


function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }   
    slides[slideIndex - 1].style.display = "block"; 
}



var items = document.getElementsByClassName('service');
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener('mouseenter', enterFunction);
  items[i].addEventListener('mouseleave', leaveFunction);

}

function enterFunction(e) {
  document.getElementById('service-description'+this.id).style.display="block";
  document.getElementById('service-description'+this.id).style.color='#FAFAFA';
  document.getElementById('service-title'+this.id).style.color='#FAFAFA';
  this.style.backgroundColor='#15263E'

}

function leaveFunction(e) {
    document.getElementById('service-description'+this.id).style.display="none";
    document.getElementById('service-description'+this.id).style.color="black";
    document.getElementById('service-title'+this.id).style.color="black";

    this.style.backgroundColor='#FAFAFA'
  }

var items = document.getElementsByClassName('logo-box');
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('mouseenter', changeLogoEnter);
  items[i].addEventListener('mouseleave', changeLogoLeave);
}

function changeLogoEnter(e) {
    document.getElementById('logo-detail'+this.id).style.display="block";
    document.getElementById('logo-image'+this.id).style.display="none";

  }
  
function changeLogoLeave(e) {
    document.getElementById('logo-detail'+this.id).style.display="none";
    document.getElementById('logo-image'+this.id).style.display="block";

}


// page 6

let squares = document.getElementsByClassName('square');
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('mouseenter', squareEnter);
    squares[i].addEventListener('mouseleave', squareLeave);
}

function squareEnter(e) {
    document.getElementById('project-desctiption'+this.id).style.display="block";
    document.getElementById('project-image'+this.id).style.display="none";
}
  
function squareLeave(e) {
    document.getElementById('project-desctiption'+this.id).style.display="none";
    document.getElementById('project-image'+this.id).style.display="block";
}




var categories = document.getElementsByClassName('list-name');
for (var i = 0; i < categories.length; i++) {
    categories[i].addEventListener('click', showCategory);
}
function showCategory(e){
    let index = Number(this.id[8]);
        if(index===0){
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.display="block";
            }
        }else{
            for (var i = 0; i < squares.length; i++) {
                if(i+1 === index){
                    squares[i].style.display="block";

                }else{
                    squares[i].style.display="none";
                }
            }

        }
}


// page 5

var slides = document.getElementsByClassName('click');
for (var i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', slideRecomendation);
}

function slideRecomendation(e){
    var recId = this.id;
    var recomendations = document.getElementsByClassName('recomendation');
    for (var i = 0; i < recomendations.length; i++) {
        recomendations[i].style.display="none";
    }
    document.getElementById('rec'+recId.slice(10,11)).style.display="block";


}