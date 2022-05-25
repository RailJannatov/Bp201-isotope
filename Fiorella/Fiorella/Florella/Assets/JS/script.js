//---------HOME
var homedropdowncontent = document.querySelector("#home-sdb-drpdwn-content");

var homedropdown = document.querySelector("#home-sdb-drpdwn");


homedropdown.addEventListener("click", () => {
    if (homedropdowncontent.style.position == "absolute") {
        homedropdowncontent.style = "position:relative; visibility:visible";
    }
    else {
        homedropdowncontent.style = "position:absolute; visibility:hidden";
    }

}
)

//---------PAGES
var pagesdropdowncontent = document.querySelector("#pages-sdb-drpdwn-content");

var pagesdropdown = document.querySelector("#pages-sdb-drpdwn");


pagesdropdown.addEventListener("click", () => {
    if (pagesdropdowncontent.style.position == "absolute") {
        pagesdropdowncontent.style = "position:relative; visibility:visible";
    }
    else {
        pagesdropdowncontent.style = "position:absolute; visibility:hidden";
    }

}
)
//---------SHOP
var shopdropdowncontent = document.querySelector("#shop-sdb-drpdwn-content");

var shopdropdown = document.querySelector("#shop-sdb-drpdwn");


shopdropdown.addEventListener("click", () => {
    if (shopdropdowncontent.style.position == "absolute") {
        shopdropdowncontent.style = "position:relative; visibility:visible";
    }
    else {
        shopdropdowncontent.style = "position:absolute; visibility:hidden";
    }

}
)

// var product_types_dropdown = document.querySelector("#prdct-types-drpdwn");
// var product_types_inner_dropdown = document.querySelector(".prdct-types-inner-drpdwn");
// console.log(product_types_inner_dropdown);
// product_types_dropdown.addEventListener("click", () => {
//     if (product_types_inner_dropdown.style.position == "absolute") {
//         product_types_inner_dropdown.style = "position:relative; visibility:visible;";
//     }
//     else {
//         product_types_inner_dropdown.style = "position:absolute; visibility:hidden;";
//     }
// })


//---------PORTFOLIO
var portfoliodropdowncontent = document.querySelector("#portfolio-sdb-drpdwn-content");

var portfoliodropdown = document.querySelector("#portfolio-sdb-drpdwn");


portfoliodropdown.addEventListener("click", () => {
    if (portfoliodropdowncontent.style.position == "absolute") {
        portfoliodropdowncontent.style = "position:relative; visibility:visible";
    }
    else {
        portfoliodropdowncontent.style = "position:absolute; visibility:hidden";
    }

}
)
//---------BLOG
var blogdropdowncontent = document.querySelector("#blog-sdb-drpdwn-content");

var blogdropdown = document.querySelector("#blog-sdb-drpdwn");


blogdropdown.addEventListener("click", () => {
    if (blogdropdowncontent.style.position == "absolute") {
        blogdropdowncontent.style = "position:relative; visibility:visible";
    }
    else {
        blogdropdowncontent.style = "position:absolute; visibility:hidden";
    }

}
)


//---------ELEMENTS
var elementsdropdowncontent = document.querySelector("#elements-sdb-drpdwn-content");

var elementsdropdown = document.querySelector("#elements-sdb-drpdwn");


elementsdropdown.addEventListener("click", () => {
    if (elementsdropdowncontent.style.position == "absolute") {
        elementsdropdowncontent.style = "position:relative; visibility:visible";
    }
    else {
        elementsdropdowncontent.style = "position:absolute; visibility:hidden";
    }

}
)

var hamburger_icon = document.querySelector("#hamburger-icon");
var sidebar = document.querySelector("#sidebar");

hamburger_icon.addEventListener("click", () => {
    if (sidebar.style == "visibility:hidden;") {
        sidebar.style = "visibility:visible;";
        hamburger_icon.style = "visibility:hidden;"
    }
    else {
        sidebar.style = "visibility:hidden;";
    }
})

//----SLIDER

var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
    SlideShow(slidePosition += n);
}

//  images controls
function currentSlide(n) {
    SlideShow(slidePosition = n);
}

function SlideShow(n) {
    var i;
    var slides = document.getElementsByClassName("Containers");
    var circles = document.getElementsByClassName("dots");
    if (n > slides.length) { slidePosition = 1 }
    if (n < 1) { slidePosition = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" enable", "");
    }
    slides[slidePosition - 1].style.display = "block";
    circles[slidePosition - 1].className += " enable";

}
setInterval(function () {
    plusSlides(1)
}, 5000);


$(".test").isotope({
    itemSelector:".nested-card",
    layoutMode: 'fitRows'
})

$(".my-list li").click(function(){
//   $(".my-list li").removeClass("active");
//   $(this).addClass("active");

   var selector = $(this).attr("data-filter");
   $(".test").isotope({
      filter:selector
})
})