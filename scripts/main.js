//prevent default on link
var hereButton = ('here')
hereButton.click.(function(event){
//prevent link refreshing the page
	event.preventDefault();
//show message
	alert("This link has been clicked but it doesn't go anywhere");
}

//main navigation

//var navButton = document.querySelector('.nav-btn')
//when users click on nav button
//Add active class to indicate the page is accessed
//navButton.onclick = function () {
  //check the navigation button class for active
  //var pageOpen = navButton.classList.contains('active');
  //if it is the opposite add the class active
  //if(!pageOpen) {
    //navButton.classList.add('active');

  //}
  //if the class is active remove active
  //else {
    //navButton.classList.remove('active');
  //}
//}

//hamburger menu

//grab hamburger
 var hamburger = document.querySelector('#hamburger');
//grab mobile navigation selection
  var mNav = document.querySelector('.mobile');
//when user clicks on hamburger
// check if the hamburger menu exists on the page
  // before adding the click listener
if(hamburger) {
  hamburger.onclick = function(){
  		//check the mobile navigation class for active
    var status = mNav.classList.contains('active');
    	//if it is the opposite add the class active
    if(!status) {
      mNav.classList.add('active');
    }
    	//if the class is active remove active
    else {
      mNav.classList.remove('active');
    }
  };
}

//Favorites by genre alert box
  
var bookGenre = document.querySelector('#genre');
//When user clicks on Favorites by genre link is click
//Alert box will say under construction
bookGenre.onclick = function () {
    alert("This page is under construction");
  }


//Hide footer on scroll

function footer()
    {
        var scroll = $(window).scrollTop(); 
        if(scroll > 50)
        { 
            $("#fan-info").addClass("show");
        }
        else
        {
            $("#fan-info").removeClass("show");
        }
        
    //     clearTimeout($.data(this, 'scrollTimer'));
    //     $.data(this, 'scrollTimer', setTimeout(function() {
    //         if ($('.fan-info').is(':hover')) {
    //         footer();
    //     }
    //         else
    //         {
    //           $(".fan-info").fadeOut("slow");
    //         }
    // }, 2000));s
    }

    // function sometingElse() {}

$(window).scroll(function(event) {
  
    footer();

    // somethingElse();
});

//Book of the month selection box changes the book info with user selection

  //Grab all of the monthly book elements
var books = $('.monthly-book');
	//Grab the select box
var selectBox = $('#month');
	//Create a listener on the select box
	selectBox.change(function() {
  	// alert( "Handler for .change() called." );

  	//Check value of selection
  		var value = $( this ).val().toLowerCase();
  		//console.log(value);
		//Create for loop to look at list
			for (var i = 0; i < books.length; i++) {
				// if( books[i].classList.contains(value) ) {
				if( $(books[i]).hasClass(value) ) {
				$(books[i]).addClass('active');
					} else {
							$(books[i]).removeClass('active');
						}
					};
				// If there is a match add an active class
			});

  //Suggestion page

