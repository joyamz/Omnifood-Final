console.log('Hello World!');

///////////////////////////////////////////////////////////
// Set current year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
year.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav"); 
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click' , function() {
    headerEl.classList.toggle('nav-open');
});


///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click', function (e){
        e.preventDefault();
        const href = link.getAttribute('href');

        //Scroll back to top
        if (href === "#") window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        //Scroll to other links
        if (href !== "#" && href.startsWith('#')) {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({behavior: "smooth"});
        }

        //Close mobile navigation
        if (link.classList.contains('main-nav-link'))
        headerEl.classList.toggle('nav-open');
    });
});
    
//////////////////////////////////////////////////////////
//Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");


const obs = new IntersectionObserver(
  function (entries){
const ent = entries[0];
console.log(ent);

if(ent.isIntersecting === false){
  document.body.classList.add('sticky');
  }

  if(ent.isIntersecting === true){
    document.body.classList.remove('sticky');
    }
}, 
{
  //In the viewport
root: null,
threshold: 0,
rootMargin: '-80px',
});
obs.observe(sectionHeroEl);


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  
  // https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js
  
  /*
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 4.8rem;
  }
  
  .no-flexbox-gap .list-item:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  
  .no-flexbox-gap .list-icon:not(:last-child) {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .delivered-faces {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .meal-attribute:not(:last-child) {
    margin-bottom: 2rem;
  }
  
  .no-flexbox-gap .meal-icon {
    margin-right: 1.6rem;
  }
  
  .no-flexbox-gap .footer-row div:not(:last-child) {
    margin-right: 6.4rem;
  }
  
  .no-flexbox-gap .social-links li:not(:last-child) {
    margin-right: 2.4rem;
  }
  
  .no-flexbox-gap .footer-nav li:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  
  @media (max-width: 75em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 3.2rem;
    }
  }
  
  @media (max-width: 59em) {
    .no-flexbox-gap .main-nav-list li:not(:last-child) {
      margin-right: 0;
      margin-bottom: 4.8rem;
    }
  }
  */



  //////////////////////////////////////////////////////////
//My cart



let userSection = document.querySelector(".userSection");

let isShow = true;
function clickBtn() {
    if (isShow){
        userSection.style.display = 'none';
        isShow = false;
    }else {
        userSection.style.display = "grid";
        isShow = true;
    }
    

}


// var cart_open_close = document.getElementById(".cart_open_close");
// function showHideCart() {
//   cart_open_close.classList.toggle("hide");
  
// }




var product_total_amt = document.getElementById('product_total_amt');
var total_amt = document.getElementById('total_amt');
var discountCode = document.getElementById("coupon_code");


const decreaseNumber = (incdec , itemprice) => {
    var decNum = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
    // console.log(decNum.value);

    if (decNum.value <= 0 ) {
        decNum.value = 0;
    } else {
        decNum.value = parseInt (decNum.value) -1;
        itemprice.innerHTML =  0;

        product_total_amt.innerHTML =  0 ;
        total_amt.innerHTML = 0;
    }
}


// Starter meal plan

const increaseNumber = (incdec, itemprice) => {
    var incNum = document.getElementById(incdec);
    var itemprice = document.getElementById(itemprice);
   
     if (incNum.value == 1 ) {
        incNum.value = 1;
        
    } else {
        incNum.value = parseInt (incNum.value) +1;

        itemprice.innerHTML =  parseInt (itemprice.innerHTML) + 4900 ;
        
        product_total_amt.innerHTML = itemprice.innerHTML ;
        total_amt.innerHTML  =   product_total_amt.innerHTML;
    }
}


// Complete meal plan

const increaseNumber1 = (incdec, itemprice) => {
    var incNum = document.getElementById(incdec);
    var itemprice1 = document.getElementById(itemprice);
   

    if (incNum.value == 1 ) {
        incNum.value = 1;
        
    } else {
        incNum.value = parseInt (incNum.value) +1;

        itemprice1.innerHTML =  parseInt (itemprice1.innerHTML) + 6000 ;
        
        product_total_amt.innerHTML = itemprice1.innerHTML ;
        total_amt.innerHTML  =   product_total_amt.innerHTML;
    }
}

     const discount_code = () => {
        let final_amt = parseInt(total_amt.innerHTML ) ;
        let error = document.getElementById('error');
        if (discountCode.value === 'Meal') {
            alert( "Yay! first meal free" );
        } else {
            alert("Choose correct code");
        }
     }

     const placeOrder = () => {
        alert("Congratulations! order has been placed.");
     }
     


                
                