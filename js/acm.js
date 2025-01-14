/*!
* Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
* Code licensed under the Apache License v2.0.
* For details, see http://www.apache.org/licenses/LICENSE-2.0.
*/

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    // Handler for all page-scroll links
    $('body').on('click', '.page-scroll a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Specific handler for the ACM button
    $('body').on('click', '.navbar-brand', function (event) {
        var $anchor = $(this);
        var targetTop = $($anchor.attr('href')).offset().top - 250;

        $('html, body').stop().animate({
            scrollTop: targetTop
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


// Floating label headings for the contact form
$(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});

// ------------------------------------------------
// Handles the Distinguished Speakers Slideshow
// ------------------------------------------------
var DSslideNum = 0;
var allDSSlides = document.querySelector("#dsSlideshow .slides");
var totalDSImages = document.querySelectorAll("#dsSlideshow img").length;
var DSisPaused = false;
var DStimeout;

// Handles sliding and timing of distinguished speaker images.
function showDSSlides() {
    if (!DSisPaused) {
        var slideOffset = -DSslideNum * 100;
        allDSSlides.style.transform = `translateX(${slideOffset}%)`;
        DSslideNum++;
        // Return to first image when completed.
        if (DSslideNum >= totalDSImages) {
            DSslideNum = 0;
        }
        // Adds timing between each sliding animation.
        DStimeout = setTimeout(showDSSlides, 5000);
    }
}
// Handles pausing of the distinguished speaker slides when hovered over.
function pauseSlides() {
    DSisPaused = true;
    clearTimeout(DStimeout);
}
// Handles pausing of the distinguished speaker slides when no longer hovered over.
function resumeSlides() {
    DSisPaused = false;
    clearTimeout(DStimeout);
    DStimeout = setTimeout(showDSSlides, 2000);
}

// Listeners for Distinguished Speakers Slides
allDSSlides.addEventListener('mouseenter', pauseSlides);
allDSSlides.addEventListener('mouseleave', resumeSlides);
showDSSlides();

// ------------------------------------------------
// Handles the Past Events Slideshow
// ------------------------------------------------
var peSlideNum = 0;
var allPESlides = document.querySelector("#peSlideshow .slides");
var totalPEImages = document.querySelectorAll("#peSlideshow img").length;
var peIsPaused = false;
var PEtimeout;
var peCaption = document.querySelector("#peSlideshow h3");

// Handles sliding and timing of past event images.
function showPastEventSlides() {
    if (!peIsPaused) {
        var slideOffset2 = -peSlideNum * 100;
        allPESlides.style.transform = `translateX(${slideOffset2}%)`;
        updatePECaption(peSlideNum);
        peSlideNum++;
        // Return to first image when completed.
        if (peSlideNum >= totalPEImages) {
            peSlideNum = 0;
        }
        // Adds timing between each sliding animation.
        PEtimeout = setTimeout(showPastEventSlides, 5000);
    }
}
// Handles pausing of the past event slides when hovered over.
function pausePESlides() {
    peIsPaused = true;
    clearTimeout(PEtimeout);
}

// Handles resuming of the past event slides when no longer hovered over.
function resumePESlides() {
    peIsPaused = false;
    clearTimeout(PEtimeout);
    PEtimeout = setTimeout(showPastEventSlides, 2000);
}

// Responsible for updating the text of the caption under the Past Events section.
function updatePECaption(peSlideNum) {
    if (peSlideNum < 5) {
        peCaption.textContent = "Marc Gonzalez - Cyber Security for DoD Vendors @Site2";
    } else if (peSlideNum === 5) {
        peCaption.textContent = "Josh David and Dr. Stephen Mansour Ph.D presentation on APL & Function/Array Paradigm as a tool of thought for software development";
    } else if (peSlideNum == 6) {
        peCaption.innerHTML = "DISTINGUISHED SPEAKER 2019: JOSIAH DYKSTRA, PH.D <br> Pictured from left to right: Liam O'Hare, Patrick Gioino, Josiah Dykstra Ph.D, Michael Wass, Alexa Baldon, Micael Delevan.";
    } else if (peSlideNum >= 7 && peSlideNum <= 10) {
        peCaption.textContent = "DISTINGUISHED SPEAKER 2019: JOSIAH DYKSTRA, PH.D";
    } else if (peSlideNum >= 11 && peSlideNum <= 13) {
        peCaption.textContent = "SUMMER 2019 INTERNSHIP TALK";
    } else if (peSlideNum >= 14 && peSlideNum <= 16) {
        peCaption.textContent = "DISTINGUISHED ACM SPEAKER 2018: BIPLAV SHRIVASTAVA, PH.D.";
    } else if (peSlideNum >= 17 && peSlideNum <= 19) {
        peCaption.textContent = "ELECTRONIC MAKERSPACE TALK AT THE CTTC";
    } else if (peSlideNum === 20) {
        peCaption.textContent = "IBM TALK FROM LOUIS BALZANI";
    } else if (peSlideNum === 21) {
        peCaption.textContent = "DISTINGUISHED ACM SPEAKER: MICHAEL MACEDONIA, PH.D.";
    } else if (peSlideNum >= 22 && peSlideNum <= 23) {
        peCaption.textContent = "TALK FROM FEBRUARY 23, 2016";
    } else if (peSlideNum === 24) {
        peCaption.textContent = "BRENDAN WALKER'S TALK ON AZURE AND HALO DEVELOPMENT";
    } else if (peSlideNum >= 25 && peSlideNum <= 33) {
        peCaption.textContent = "SCOTT TILLEY'S TALK ON AGILE SOFTWARE DEVELOPMENT";
    } else if (peSlideNum === 34) {
        peCaption.textContent = "OUR TRIP TO METLIFE";
    }
}

// Listeners for Past Event Slides
allPESlides.addEventListener('mouseenter', pausePESlides);
allPESlides.addEventListener('mouseleave', resumePESlides);
showPastEventSlides();