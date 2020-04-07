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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// nav
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

// cta
let ctaH1 = document.querySelector('h1')
ctaH1.textContent = siteContent['cta']['h1']

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button']

let ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src']


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

let midImg = document.getElementById('middle-img');
midImg.src = siteContent['main-content']['middle-img-src']

// contact
let contact = document.querySelector('.contact');

let contactH4 = contact.querySelector('h4')
contactH4.textContent = siteContent['contact']['contact-h4']

let contactP = contact.querySelectorAll('p');
contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']

// footer
let footer = document.getElementsByTagName('footer')
footer[0].querySelector('p').textContent = siteContent['footer']['copyright']