const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute('src', siteContent["nav"]["img-src"]);

// header
let nav = document.querySelector('nav');
let navOption1 = document.createElement('a');
let navOption1A = document.createTextNode('Blog');
let navOption2 = document.createElement('a');
let navOption2B = document.createTextNode('Legal');
navOption1.prepend(navOption1A);
nav.appendChild(navOption1);
navOption2.prepend(navOption2B);
nav.appendChild(navOption2);

let navItems = nav.querySelectorAll('a');
navItems[0].textContent = siteContent['nav']['nav-item-1']
navItems[0].style.color = 'green';
navItems[1].textContent = siteContent['nav']['nav-item-2']
navItems[1].style.color = 'green';
navItems[2].textContent = siteContent['nav']['nav-item-3']
navItems[2].style.color = 'green';
navItems[3].textContent = siteContent['nav']['nav-item-4']
navItems[3].style.color = 'green';
navItems[4].textContent = siteContent['nav']['nav-item-5']
navItems[4].style.color = 'green';
navItems[5].textContent = siteContent['nav']['nav-item-6']
navItems[5].style.color = 'green';
navItems[6].style.color = 'green';
navItems[7].style.color = 'green';

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);
logo.addEventListener('mouseenter', function(event){
  event.target.style.display = "none";

  setTimeout( function() {
    event.target.style.display = "initial"
  }, 1000);

}, false);

// cta
let ctaH1 = document.querySelector('h1')
ctaH1.textContent = siteContent['cta']['h1']
ctaH1.style.color ='green';


let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];
ctaButton.style.color = 'darkblue';

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src']
ctaImg.addEventListener('mouseenter', function(event) {
  event.target.style.display = "none";

  setTimeout( () => {
    event.target.style.display = "initial"
  }, 500);
}, false);



// main content
let txtCont = document.querySelectorAll('.text-content')
txtCont[0].querySelector('h4').textContent = siteContent['main-content']['features-h4']
txtCont[0].querySelector('p').textContent = siteContent['main-content']['features-content']
txtCont[1].querySelector('h4').textContent = siteContent['main-content']['about-h4']
txtCont[1].querySelector('p').textContent = siteContent['main-content']['about-content']
txtCont[2].querySelector('h4').textContent = siteContent['main-content']['services-h4']
txtCont[2].querySelector('p').textContent = siteContent['main-content']['services-content']
txtCont[3].querySelector('h4').textContent = siteContent['main-content']['product-h4']
txtCont[3].querySelector('p').textContent = siteContent['main-content']['product-content']
txtCont[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4']
txtCont[4].querySelector('p').textContent = siteContent['main-content']['vision-content']
txtCont[0].style.color = "red";
txtCont[1].style.color = "blue";
txtCont[2].style.color = "green";
txtCont[3].style.color = "purple";
txtCont[4].style.color = "orange";
txtCont[0].style.textAlign = "center";
txtCont[1].style.textAlign = "center";
txtCont[2].style.textAlign = "center";
txtCont[3].style.textAlign = "center";
txtCont[4].style.textAlign = "center";

let midImg = document.getElementById('middle-img');
midImg.src = siteContent['main-content']['middle-img-src']

const mainSection = document.getElementById('mainContent')
//console.log(mainSection);



let sectionCloner = document.createElement('button');
sectionCloner.style.border = '1px double black';
sectionCloner.style.color ="darkblue";
sectionCloner.style.fontSize = '16px';
sectionCloner.style.backgroundColor = 'white';
sectionCloner.style.width = '170px';
sectionCloner.style.height = '35px';
sectionCloner.style.marginTop = '30px';
sectionCloner.style.marginBottom ='60px';
sectionCloner.style.marginLeft = "40%";
sectionCloner.style.cursor = "pointer";
sectionCloner.addEventListener('mouseenter', event => {
  event.target.style.backgroundColor = "black";
  event.target.style.color = "white";
  setTimeout( () => {
    event.target.style.backgroundColor = "initial";
    event.target.style.color = "darkblue";
  }, 500)
})
sectionCloner.onclick = function () {

  let newDivCont = document.createElement('div');
  newDivCont.className = 'clone-content';
  let newDiv = document.createElement('div');
  newDiv.className = 'text-content';
  let newDivElem1 = document.createElement('h4');
  newDiv.prepend(newDivElem1);
  let newDivElem1Text = document.createTextNode('Features');
  newDivElem1.prepend(newDivElem1Text);
  let newDivElem2 = document.createElement('p');
  newDiv.appendChild(newDivElem2);
  let newDivElem2Text = document.createTextNode('Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
  newDivElem2.prepend(newDivElem2Text);
  document.getElementById('mainContent').appendChild(newDiv);
  newDivCont.prepend(newDiv);

  let newDivCont2 = document.createElement('div');
  newDivCont2.className = 'clone-content';
  let newDiv2 = document.createElement('div');
  newDiv2.className = 'text-content';
  let newDivElem3 = document.createElement('h4');
  newDiv2.prepend(newDivElem3);
  let newDivElem3Text = document.createTextNode('About');
  newDivElem3.prepend(newDivElem3Text);
  let newDivElem4 = document.createElement('p');
  newDiv2.appendChild(newDivElem4);
  let newDivElem4Text = document.createTextNode('About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
  newDivElem4.prepend(newDivElem4Text);
  document.getElementById('mainContent').appendChild(newDiv2);
  newDivCont2.prepend(newDiv2);
  console.log(newDivCont2)
 }


  let newDivCont = document.createElement('div');
  newDivCont.className = 'clone-content';
  let newDiv = document.createElement('div');
  newDiv.className = 'text-content';
  let newDivElem1 = document.createElement('h4');
  newDiv.prepend(newDivElem1);
  let newDivElem1Text = document.createTextNode('Features');
  newDivElem1.prepend(newDivElem1Text);
  let newDivElem2 = document.createElement('p');
  newDiv.appendChild(newDivElem2);
  let newDivElem2Text = document.createTextNode('Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
  newDivElem2.prepend(newDivElem2Text);
  document.getElementById('mainContent').appendChild(newDiv);
  newDivCont.prepend(newDiv);
  console.log(newDivCont)


  let newDivCont2 = document.createElement('div');
  newDivCont2.className = 'clone-content';
  let newDiv2 = document.createElement('div');
  newDiv2.className = 'text-content';
  let newDivElem3 = document.createElement('h4');
  newDiv2.prepend(newDivElem3);
  let newDivElem3Text = document.createTextNode('About');
  newDivElem3.prepend(newDivElem3Text);
  let newDivElem4 = document.createElement('p');
  newDiv2.appendChild(newDivElem4);
  let newDivElem4Text = document.createTextNode('About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.')
  newDivElem4.prepend(newDivElem4Text);
  document.getElementById('mainContent').appendChild(newDiv2);
  newDivCont2.prepend(newDiv2);
  console.log(newDivCont2)

  const newDiv3 = newDiv + newDiv2;




let sectionClonerText = document.createTextNode('Clone sections.');
sectionCloner.prepend(sectionClonerText);
mainSection.prepend(sectionCloner)
//console.log(sectionClonerText);

document.getElementById('topContent').style.borderTop = "2px solid black"
document.getElementById('topContent').style.paddingTop = "50px"

// contact
let contact = document.querySelector('.contact');

let contactH4 = contact.querySelector('h4')
contactH4.textContent = siteContent['contact']['contact-h4']
contactH4.style.color = "orange";
contactH4.style.textAlign = "center";

let contactP = contact.querySelectorAll('p');
contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']
contactP[0].style.color = "red";
contactP[1].style.color = "red";
contactP[2].style.color = "red";
contactP[0].style.textAlign = 'center';
contactP[1].style.textAlign = 'center';
contactP[2].style.textAlign = 'center';

// footer
let footer = document.getElementsByTagName('footer')
footer[0].querySelector('p').textContent = siteContent['footer']['copyright']
footer[0].style.color = "purple";
footer[0].style.textAlign = 'center';