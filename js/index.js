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
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navItems = document.querySelectorAll('a')
navItems[0].textContent = "Home"
navItems[1].textContent = "Product"
navItems[2].textContent = "Vision"
navItems[3].textContent = "Features"
navItems[4].textContent = "About"
navItems[5].textContent = "Contact"

navItems[0].style.color = 'green'
navItems[1].style.color = 'green'
navItems[2].style.color = 'green'
navItems[3].style.color = 'green'
navItems[4].style.color = 'green'
navItems[5].style.color = 'green'


const firstItem = document.createElement('a')
firstItem.textContent = "First"
firstItem.href= "#"
firstItem.style.color = 'green'
document.querySelector('nav').prepend(firstItem)

const lastItem = document.createElement('a')
lastItem.textContent = "Last"
lastItem.href= "#"
lastItem.style.color = 'green'
document.querySelector('nav').appendChild(lastItem)

let bigText = document.querySelector('h1')
bigText.textContent = "DOM IS AWESOME"


let getStarted = document.querySelector('button')
getStarted.textContent = "Get Started"

let domImage = document.getElementById('cta-img')
domImage.src = "img/header-img.png"

let subHeaders = document.querySelectorAll('h4')

subHeaders[0].textContent = "Features"
subHeaders[1].textContent = "About"
subHeaders[2].textContent = "Services"
subHeaders[3].textContent = "Product"
subHeaders[4].textContent = "Vision"
subHeaders[5].textContent = "Contact"

let loremIpsum = document.querySelectorAll('.text-content p')

loremIpsum[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
loremIpsum[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
loremIpsum[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
loremIpsum[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
loremIpsum[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

let midImage = document.getElementById('middle-img')

midImage.src = "img/mid-page-accent.jpg"

let footerContent = document.querySelectorAll(".contact p")

footerContent[0].textContent = "123 Way 456 Street Somewhere, USA"
footerContent[1].textContent = "1 (888) 888-8888"
footerContent[2].textContent = "sales@greatidea.io"

let realFooter = document.querySelector('footer p')

realFooter.textContent = "Copyright Great Idea! 2018"

//hello world

