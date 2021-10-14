/**
 * @author Sujith K S <mesujithks3@gmail.com>
 */


//Hiding the Preloader
$('body').css("overflow", "hidden");
$(window).on('load', () => {
  $('.loader').fadeOut();
  $('.loader-body').delay(350).fadeOut('slow');
  $('body').delay(350).css({ 'overflow': 'visible' });
});



$(document).ready(() => {



  //NavBar Drop Shadow on scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 10) {
      $('.nav-bar').addClass('floatingNav');
    } else {
      $('.nav-bar').removeClass('floatingNav');
    }
  });


  // Menu bar for Mobile
  $('.ham').click(function clickMenu() {

    //Making Side Menu Bar Visible/Invisible On Menu Click
    $('.nav-elements').toggleClass('nav-visible');


    //Making Side Menu Invisible when clicked on any link/btn in menu
    if ($('.nav-elements').hasClass('nav-visible')) {
      $('body').css("overflow", "hidden");
      $('.nav-link').click(() => {
        $('.ham').click();
        $('.ham').removesClass('active');
      })
      $('.nav-btn').click(() => {
        $('.ham').click();
        $('.ham').removesClass('active');
      })
    }
    else {
      $('body').css("overflow", "visible");
    }

  });


  


  //Showing & Hiding Card Content on Click
  $('.project-card').click(function () {

    let thisCard = $(this), thisCardContent = $(this).children('.card-content');

    thisCardContent.toggleClass('view-card-details');

    $('.card-content').not(thisCardContent).removeClass('view-card-details');

  });


});
