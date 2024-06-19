
//image slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


//when focused on another button then active button property disable 
const serviceButtons = document.querySelectorAll('.servicebtn');

serviceButtons.forEach(button => {
  button.addEventListener('click', function () {
    document.querySelector('.activebtn').classList.remove('activebtn');
    this.classList.add('activebtn');
  });
});


//project section image gallery
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

let allImages = [
  "image/i10.png",
  "image/i11.jpg",

]; // Array of additional images to load

let currentIndex = 0;

function loadMore() {
  const container = document.getElementById("allImagesContainer");
  const loadMoreButton = document.getElementById("loadMoreButton");

  const newImages = allImages.slice(currentIndex, currentIndex + 3);

  newImages.forEach(image => {
    const img = document.createElement("img");
    img.src = image;
    img.alt = "Image " + (currentIndex + 1);
    container.appendChild(img);
    currentIndex++;
  });

  // Hide the "Load More" button if no more images to load
  // if (currentIndex >= allImages.length) {
  //   loadMoreButton.style.display = "none";
  // }
}

//our project active link change
var menuItems = document.querySelectorAll('#projectmenu li');

menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    menuItems.forEach(function (item) {
      item.classList.remove('activeproject');
    });
    item.classList.add('activeproject');
  });
});

// client slider
let slidesIndex = 0;
showclientSlides();
function showclientSlides() {
  let i;
  let slides = document.getElementsByClassName("clientslide");
  let dots = document.getElementsByClassName("dot-client");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slidesIndex++;
  if (slidesIndex > slides.length) { slidesIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slidesIndex - 1].style.display = "block";
  dots[slidesIndex - 1].className += " active";
  setTimeout(showclientSlides, 2000); // Change image every 2 seconds
}

//header tab change
var menuItems = document.querySelectorAll('#topnav li');

menuItems.forEach(function (item) {
  item.addEventListener('click', function () {
    menuItems.forEach(function (item) {
      item.classList.remove('activetab');
    });
    item.classList.add('activetab');
  });
});