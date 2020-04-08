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

function setCharAt(str,index,chr) {
  if(index > str.length-1) return str;
  return str.substr(0,index) + chr + str.substr(index+1);
}

// header
  let nav = document.querySelector('nav');
  let navOption1 = document.createElement('a');
  let navOption1Text = document.createTextNode('Blog');
  let navOption2 = document.createElement('a');
  let navOption2Text = document.createTextNode('Legal');

  navOption1.prepend(navOption1Text);
  nav.appendChild(navOption1);
  navOption2.prepend(navOption2Text);
  nav.appendChild(navOption2);

  let navItems = nav.querySelectorAll('a');
  let logo = document.getElementById("logo-img");

  navItems[0].textContent = siteContent['nav']['nav-item-1'];
  navItems[0].style.color = 'green';
  navItems[1].textContent = siteContent['nav']['nav-item-2'];
  navItems[1].style.color = 'green';
  navItems[2].textContent = siteContent['nav']['nav-item-3'];
  navItems[2].style.color = 'green';
  navItems[3].textContent = siteContent['nav']['nav-item-4'];
  navItems[3].style.color = 'green';
  navItems[4].textContent = siteContent['nav']['nav-item-5'];
  navItems[4].style.color = 'green';
  navItems[5].textContent = siteContent['nav']['nav-item-6'];
  navItems[5].style.color = 'green';
  navItems[6].style.color = 'green';
  navItems[7].style.color = 'green';    
  logo.setAttribute('src', siteContent["nav"]["img-src"]);

  logo.addEventListener('mouseenter', (event) => {
    event.target.style.display = "none";
    setTimeout( () => {
      event.target.style.display = "initial"
    }, 1000);
  }, false);

// cta
  let ctaH1 = document.querySelector('h1');
  let ctaButton = document.querySelector('button');
  let ctaImg = document.getElementById('cta-img');  

  ctaH1.innerText = setCharAt(siteContent['cta']['h1'], 3, '\r\n');
  ctaH1.style.color ='green';
  ctaButton.innerText = siteContent['cta']['button'];
  ctaButton.style.color = 'darkblue';
  ctaImg.src = siteContent['cta']['img-src']; 

  // click on picture to make it disappear for .5 second(s) 
  ctaImg.addEventListener('click', (event) => {
    event.target.style.visibility = "hidden";
    setTimeout( () => {
      event.target.style.visibility = "initial";
    }, 500);
  });

// main content
  let txtCont = document.querySelectorAll('.text-content');
  let midImg = document.getElementById('middle-img');

  txtCont[0].querySelector('h4').textContent = siteContent['main-content']['features-h4'];
  txtCont[0].querySelector('p').textContent = siteContent['main-content']['features-content'];
  txtCont[0].style.color = "red";
  txtCont[0].style.textAlign = "center";
  txtCont[1].querySelector('h4').textContent = siteContent['main-content']['about-h4'];
  txtCont[1].querySelector('p').textContent = siteContent['main-content']['about-content'];
  txtCont[1].style.color = "blue";
  txtCont[1].style.textAlign = "center";
  txtCont[2].querySelector('h4').textContent = siteContent['main-content']['services-h4'];
  txtCont[2].querySelector('p').textContent = siteContent['main-content']['services-content'];
  txtCont[2].style.color = "purple";
  txtCont[2].style.textAlign = "center";
  txtCont[3].querySelector('h4').textContent = siteContent['main-content']['product-h4'];
  txtCont[3].querySelector('p').textContent = siteContent['main-content']['product-content'];
  txtCont[3].style.color = "cyan";
  txtCont[3].style.textAlign = "center";
  txtCont[4].querySelector('h4').textContent = siteContent['main-content']['vision-h4'];
  txtCont[4].querySelector('p').textContent = siteContent['main-content']['vision-content'];
  txtCont[4].style.color = "brown";
  txtCont[4].style.textAlign = "center";  
  midImg.src = siteContent['main-content']['middle-img-src'];

  // section buttons
  document.getElementById('topContent').style.borderTop = "2px solid black"
  document.getElementById('topContent').style.paddingTop = "50px"

  const mainSection = document.getElementById('mainContent');
  let sectionButtonContainer = document.createElement('div');
  let sectionClonerContainer = document.createElement('div');
  let sectionButtonContainerInner2 = document.createElement('div');
  
  sectionButtonContainer.style.display = "flex";
  sectionButtonContainer.style.justifyContent = "space-around";
  sectionButtonContainer.style.alignItems = "center";
  sectionButtonContainer.style.paddingBottom = "40px";

  sectionClonerContainer.style.display = "flex";
  sectionClonerContainer.style.flexDirection = "column";
  sectionClonerContainer.style.justifyContent = "center";
  sectionClonerContainer.style.alignItems = "center";
  sectionClonerContainer.style.color = "dodgerblue";
  sectionClonerContainer.style.border = "2px double magenta";
  sectionClonerContainer.style.height = "275px";
  sectionClonerContainer.style.width = "49%";

  sectionButtonContainerInner2.style.display = "flex";
  sectionButtonContainerInner2.style.justifyContent = "center";
  sectionButtonContainerInner2.style.alignItems = "center";

  sectionButtonContainer.appendChild(sectionClonerContainer)
  // sectionButtonContainer.appendChild(sectionButtonContainerInner2)
  mainSection.prepend(sectionButtonContainer);

    // section cloner
      let sectionClonerH4 = document.createElement('h4');
      let sectionClonerH4Text = document.createTextNode('Section Cloner');
      let sectionClonerP = document.createElement('p');
      let sectionClonerPText = document.createTextNode('This button will copy the following section then append it after.');
      let sectionClonerButton = document.createElement('button');
      let sectionClonerButtonText = document.createTextNode('Clone section.');
      function sectionClonerFunction() {
        let newDivCont = document.createElement('div');
        let newDiv = document.createElement('div');
        let newDivElem1 = document.createElement('h4');
        let newDivElem1Text = document.createTextNode('Features');
        let newDivElem2 = document.createElement('p');
        let newDivElem2Text = document.createTextNode('Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');
        let newDiv2Cont = document.createElement('div');
        let newDiv2 = document.createElement('div');
        let newDiv2Elem1 = document.createElement('h4');
        let newDiv2Elem1Text = document.createTextNode('About');
        let newDiv2Elem2 = document.createElement('p');
        let newDiv2Elem2Text = document.createTextNode('About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');
        let newDiv3Cont = document.createElement('div');
        let newDiv3 = document.createElement('div');
        let newDiv3Elem1 = document.createElement('h4');
        let newDiv3Elem1Text = document.createTextNode('Services');
        let newDiv3Elem2 = document.createElement('p');
        let newDiv3Elem2Text = document.createTextNode('Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');
        let newDiv4Cont = document.createElement('div');
        let newDiv4 = document.createElement('div');
        let newDiv4Elem1 = document.createElement('h4');
        let newDiv4Elem1Text = document.createTextNode('Product');
        let newDiv4Elem2 = document.createElement('p');
        let newDiv4Elem2Text = document.createTextNode('Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');
        let newDiv5Cont = document.createElement('div');
        let newDiv5 = document.createElement('div');
        let newDiv5Elem1 = document.createElement('h4');
        let newDiv5Elem1Text = document.createTextNode('Vision');
        let newDiv5Elem2 = document.createElement('p');
        let newDiv5Elem2Text = document.createTextNode('Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.');
        
        newDivCont.className = 'clone-content';
        newDivCont.style.color = 'red';  
        newDiv.className = 'text-content';

        newDiv2Cont.className = 'clone-content';
        newDiv2Cont.style.color = 'blue';  
        newDiv2.className = 'text-content';

        newDiv3Cont.className = 'clone-content';
        newDiv3Cont.style.color = 'purple';  
        newDiv3.className = 'text-content';    
        newDiv3Elem2.style.paddingRight = '20px';

        newDiv4Cont.className = 'clone-content';
        newDiv4Cont.style.color = 'cyan';  
        newDiv4.className = 'text-content';
        newDiv4Elem2.style.paddingRight = '20px';

        newDiv5Cont.className = 'clone-content';
        newDiv5Cont.style.color = 'brown';  
        newDiv5.className = 'text-content';
        newDiv5Elem2.style.paddingRight = '20px';

        newDivElem1.prepend(newDivElem1Text);
        newDivElem2.prepend(newDivElem2Text);
        newDiv.appendChild(newDivElem1);          
        newDiv.appendChild(newDivElem2);      
        newDivCont.prepend(newDiv);

        newDiv2Elem1.prepend(newDiv2Elem1Text);  
        newDiv2Elem2.prepend(newDiv2Elem2Text);
        newDiv2.appendChild(newDiv2Elem1); 
        newDiv2.appendChild(newDiv2Elem2);      
        newDiv2Cont.prepend(newDiv2);

        newDiv3Elem1.prepend(newDiv3Elem1Text);  
        newDiv3Elem2.prepend(newDiv3Elem2Text);
        newDiv3.appendChild(newDiv3Elem1); 
        newDiv3.appendChild(newDiv3Elem2);      
        newDiv3Cont.prepend(newDiv3);

        newDiv4Elem1.prepend(newDiv4Elem1Text);  
        newDiv4Elem2.prepend(newDiv4Elem2Text);
        newDiv4.appendChild(newDiv4Elem1); 
        newDiv4.appendChild(newDiv4Elem2);      
        newDiv4Cont.prepend(newDiv4);

        newDiv5Elem1.prepend(newDiv5Elem1Text);  
        newDiv5Elem2.prepend(newDiv5Elem2Text);
        newDiv5.appendChild(newDiv5Elem1); 
        newDiv5.appendChild(newDiv5Elem2);      
        newDiv5Cont.prepend(newDiv5);    
        
        let newDivImage = document.createElement('img');
        
        newDivImage.src = siteContent['main-content']['middle-img-src'];
        newDivImage.style.display = "block";
        newDivImage.style.marginTop = "30px";
        newDivImage.style.marginBottom = "45px";
        
        let outerCont1 = document.createElement('div');
        let outerCont2 = document.createElement('div');
        
        outerCont1.style.display = "flex";
        outerCont1.style.justifyContent = "space-around"
        outerCont1.style.textAlign = "center";
        outerCont1.style.marginTop = "50px";
        outerCont1.style.borderTop = "2px solid black";
        outerCont1.style.paddingTop = "50px"
        outerCont2.style.display = "flex";
        outerCont2.style.justifyContent = "space-around";
        outerCont2.style.textAlign = "center";
        outerCont2.style.marginTop = "50px";

        outerCont1.appendChild(newDivCont);
        outerCont1.appendChild(newDiv2Cont);
        outerCont2.appendChild(newDiv3Cont);
        outerCont2.appendChild(newDiv4Cont);
        outerCont2.appendChild(newDiv5Cont);
      
        let cloneContainer = document.createElement('div');

        cloneContainer.appendChild(outerCont1);
        cloneContainer.appendChild(newDivImage);
        cloneContainer.appendChild(outerCont2);


        document.getElementById('mainContent').appendChild(cloneContainer);

        sectionClonerButton.style.color = "yellow";
        sectionClonerButton.style.backgroundColor = "darkblue";

      }      

      sectionClonerH4.style.fontSize = "32px";
      sectionClonerH4.style.textDecoration = "underline";    
      sectionClonerP.style.width = "35%";
      sectionClonerP.style.textAlign = "center";
      sectionClonerP.style.paddingTop = "15px";
      sectionClonerP.style.fontSize = "17px";
      sectionClonerP.style.lineHeight = "1.5";
      sectionClonerButton.style.border = '1px double black';
      sectionClonerButton.style.color ="darkblue";
      sectionClonerButton.style.fontSize = '16px';
      sectionClonerButton.style.backgroundColor = 'white';
      sectionClonerButton.style.width = '170px';
      sectionClonerButton.style.height = '35px';
      sectionClonerButton.style.marginTop = '30px';
      sectionClonerButton.style.cursor = "pointer";

      sectionClonerButton.addEventListener('mouseenter', (event) => {
        event.target.style.backgroundColor = "black";
        event.target.style.color = "white";
        // setTimeout( () => {
        //   event.target.style.backgroundColor = "initial";
        //   event.target.style.color = "darkblue";
        // }, 500)
      });
      sectionClonerButton.addEventListener('mouseleave', (event) => {
        event.target.style.backgroundColor = "initial";
        event.target.style.color = "darkblue";
      })
      sectionClonerButton.addEventListener('click', sectionClonerFunction); 

      sectionClonerH4.appendChild(sectionClonerH4Text);
      sectionClonerP.appendChild(sectionClonerPText);       
      sectionClonerButton.prepend(sectionClonerButtonText);

      sectionClonerContainer.appendChild(sectionClonerH4) 
      sectionClonerContainer.appendChild(sectionClonerP) 
      sectionClonerContainer.appendChild(sectionClonerButton)    
    

// contact
  

  let contact = document.querySelector('.contact');
  let contactH4 = contact.querySelector('h4');
  let contactP = contact.querySelectorAll('p');

  contactH4.textContent = siteContent['contact']['contact-h4']
  contactH4.style.color = "orange";
  contactH4.style.textAlign = "center"; 
  
  contactP[0].innerText =  setCharAt(siteContent['contact']['address'], 18,'\r\n'); 
  contactP[0].style.color = "red";
  contactP[0].style.textAlign = 'center';
  contactP[1].textContent = siteContent['contact']['phone']
  contactP[1].style.color = "red";
  contactP[1].style.textAlign = 'center';
  contactP[2].textContent = siteContent['contact']['email']
  contactP[2].style.color = "red";
  contactP[2].style.textAlign = 'center';


// footer
  let footer = document.getElementsByTagName('footer')

  footer[0].querySelector('p').textContent = siteContent['footer']['copyright']
  footer[0].style.color = "purple";
  footer[0].style.textAlign = 'center';