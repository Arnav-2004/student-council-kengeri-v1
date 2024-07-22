
 
//menu fix 
(function ($) {


// BACK TO TOP BUTTON
 $(function(){
  $('#back-to-top').each(function () {

    var $this = $(this);

    $this.on('click', function (event) {
      event.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(function () {
      if ($(this).scrollTop() > 300) {
        $this.fadeIn(200);
      } else if ($(this).scrollTop() < 250) {
        $this.fadeOut(200);
      }
    });

  });
  
  $('.carousel').carousel({
  interval: 6000,
  cycle: true,
  pause: "false"
  }); 
  });




//header fix 

window.onscroll = function() {myFunction()};

var headerr = document.getElementById("myHeader");
var sticky = headerr.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    headerr.classList.add("sticky");
  } else {
    headerr.classList.remove("sticky");
  }
}

//header fix 


//site-all-content



//counter slider


$(document).ready(function () {
    var itemsMainDiv = ('.MultiCarousel');
    var itemsDiv = ('.MultiCarousel-inner');
    var itemWidth = "";

    $('.leftLst, .rightLst').click(function () {
        var condition = $(this).hasClass("leftLst");
        if (condition)
            click(0, this);
        else
            click(1, this)
    });

    ResCarouselSize();




    $(window).resize(function () {
        ResCarouselSize();
    });

    //this function define the size of the items
    function ResCarouselSize() {
        var incno = 0;
        var dataItems = ("data-items");
        var itemClass = ('.item');
        var id = 0;
        var btnParentSb = '';
        var itemsSplit = '';
        var sampwidth = $(itemsMainDiv).width();
        var bodyWidth = $('body').width();
        $(itemsDiv).each(function () {
            id = id + 1;
            var itemNumbers = $(this).find(itemClass).length;
            btnParentSb = $(this).parent().attr(dataItems);
            itemsSplit = btnParentSb.split(',');
            $(this).parent().attr("id", "MultiCarousel" + id);


            if (bodyWidth >= 1200) {
                incno = itemsSplit[3];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 992) {
                incno = itemsSplit[2];
                itemWidth = sampwidth / incno;
            }
            else if (bodyWidth >= 768) {
                incno = itemsSplit[1];
                itemWidth = sampwidth / incno;
            }
            else {
                incno = itemsSplit[0];
                itemWidth = sampwidth / incno;
            }
            $(this).css({ 'transform': 'translateX(0px)', 'width': itemWidth * itemNumbers });
            $(this).find(itemClass).each(function () {
                $(this).outerWidth(itemWidth);
            });

            $(".leftLst").addClass("over");
            $(".rightLst").removeClass("over");

        });
    }


    //this function used to move the items
    function ResCarousel(e, el, s) {
        var leftBtn = ('.leftLst');
        var rightBtn = ('.rightLst');
        var translateXval = '';
        var divStyle = $(el + ' ' + itemsDiv).css('transform');
        var values = divStyle.match(/-?[\d\.]+/g);
        var xds = Math.abs(values[4]);
        if (e == 0) {
            translateXval = parseInt(xds) - parseInt(itemWidth * s);
            $(el + ' ' + rightBtn).removeClass("over");

            if (translateXval <= itemWidth / 2) {
                translateXval = 0;
                $(el + ' ' + leftBtn).addClass("over");
            }
        }
        else if (e == 1) {
            var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
            translateXval = parseInt(xds) + parseInt(itemWidth * s);
            $(el + ' ' + leftBtn).removeClass("over");

            if (translateXval >= itemsCondition - itemWidth / 2) {
                translateXval = itemsCondition;
                $(el + ' ' + rightBtn).addClass("over");
            }
        }
        $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
    }

    //It is used to get some elements from btn
    function click(ell, ee) {
        var Parent = "#" + $(ee).parent().attr("id");
        var slide = $(Parent).attr("data-slide");
        ResCarousel(ell, Parent, slide);
    }

});


//counter slider


    $(document).ready(function() {
     
      $("#owl-demo-1").owlCarousel({
     
          autoPlay: 9000, //Set AutoPlay to 3 seconds
     
          items : 5,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,1]
     
      });
     
    });


    $(document).ready(function() {
     
      $("#owl-demo-2").owlCarousel({
     
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1]
     
      });
     
    });


    $(document).ready(function() {
     
      $("#owl-demo-3").owlCarousel({
     
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2]
     
      });
     
    });
	
	
	
    $(document).ready(function() {
     
      $("#owl-demo-4").owlCarousel({
     
          autoPlay: 8000, //Set AutoPlay to 3 seconds
     
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1]
     
      });
	  
     
    });
	
	
	 $(document).ready(function() {
     
      $("#owl-demo-5").owlCarousel({
     	
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     		stopOnHover : false,
          items : 6,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3]
     
      });
     
    });
	
	
	
		 $(document).ready(function() {
     
      $("#owl-demo-42").owlCarousel({
     
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3]
     
      });
     
    });
	
	
		 $(document).ready(function() {
     
      $("#owl-demo-41").owlCarousel({
     
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     
          items : 5,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3]
     
      });
     
    });
	
	
	
	
		 $(document).ready(function() {
     
      $("#owl-demo-6").owlCarousel({
     
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3]
     
      });
     
    });


 $(document).ready(function() {
     
      $("#owl-demo-7").owlCarousel({
     
          autoPlay: 9000, //Set AutoPlay to 3 seconds
     
          items : 5,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,1]
     
      });
     
    });


 $(document).ready(function() {
     
      $("#owl-demo-8").owlCarousel({
     
          autoPlay: 9000, //Set AutoPlay to 3 seconds
     
          items : 5,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,1]
     
      });
     
    });


 $(document).ready(function() {
     
      $("#owl-demo-9").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 2,
          itemsDesktop : [1199,2],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,1]
     
      });
     
    });

$(document).ready(function() {
     
      $("#owl-demo-10").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 6,
          itemsDesktop : [1199,5],
          itemsDesktopSmall : [979,4],
		  itemsSmall : [600,1]
     
      });
     
    });


$(document).ready(function() {
     
      $("#owl-demo-11").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1],
		  itemsSmall : [600,1]
     
      });
     
    });


$(document).ready(function() {
     
      $("#owl-demo-12").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,1]
     
      });
     
    });



$(document).ready(function() {
     
      $("#owl-demo-13").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,1]
     
      });
     
    });
$(document).ready(function() {
     
      $("#owl-demo-13-Alumni").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 2,
          itemsDesktop : [1199,2],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,1]
     
      });
     
    });



$(document).ready(function() {
     
      $("#owl-demo-14").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,1]
     
      });
     
    });




$(document).ready(function() {
     
      $("#owl-demo-15").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,1]
     
      });
     
    });



$(document).ready(function() {
     
      $("#owl-demo-16").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,1]
     
      });
     
    });


$(document).ready(function() {
     
      $("#owl-demo-17").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 5,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,2]
     
      });
     
    });
	

$(document).ready(function() {
     
      $("#owl-demo-18").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,2]
     
      });
     
    });
		
	$(document).ready(function() {
     
      $("#owl-demo-33").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1],
		  itemsSmall : [600,1]
     
      });
     
    });		

$(document).ready(function() {
     
      $("#owl-demo-20").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,2]
     
      });
     
    });
				
		


$(document).ready(function() {
     
      $("#owl-demo-22").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 5,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });
$(document).ready(function() {
     
      $("#owl-demo-23").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 3,
          itemsDesktop : [1199,2],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });	
	
	
	
	
	$(document).ready(function() {
     
      $("#owl-demo-24").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1],
		  itemsSmall : [600,1]
     
      });
     
    });	
	
	
$(document).ready(function() {
     
      $("#owl-demo-43").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });	

	
	$(document).ready(function() {
     
      $("#owl-demo-25").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,2]
     
      });
     
    });	
	$(document).ready(function() {
     
      $("#owl-demo-26").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 5,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });		
		$(document).ready(function() {
     
      $("#owl-demo-27").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,4],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,2]
     
      });
     
    });	
	
	$(document).ready(function() {
     
      $("#owl-demo-32").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });	
	
	
	
	$(document).ready(function() {
     
      $("#owl-demo-19").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
          items : 1,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [979,1],
		  itemsSmall : [600,1]
     
      });
     
    });	
	
				$(document).ready(function() {
     
      $("#owl-demo-21").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });	
	
	
		
$(document).ready(function() {
     
      $("#owl-demo-28").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });	
$(document).ready(function() {
     
      $("#owl-demo-29").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 3,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,1]
     
      });
     
    });		
	

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


var modal = document.getElementById('myModall2');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
    modal.style.display = "block";
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}










	



$(document).ready(function() {
     
      $("#owl-demo-34").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 5,
          itemsDesktop : [1199,5],
          itemsDesktopSmall : [979,4],
		  itemsSmall : [600,3]
     
      });
     
    });	
	
	
	
$(document).ready(function() {
     
      $("#owl-demo-35").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });			


$(document).ready(function() {
     
      $("#owl-demo-36").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 3,
          itemsDesktop : [1199,2],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });	

$(document).ready(function() {
     
      $("#owl-demo-37").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,2]
     
      });
     
    });	






$(document).ready(function() {
     
      $("#owl-demo-39").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
		  itemsSmall : [600,2]
     
      });
     
    });	



$(document).ready(function() {
     
      $("#owl-demo-40").owlCarousel({
     
          autoPlay: 4000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,2],
		  itemsSmall : [600,2]
     
      });
     
    });	






	
//counter


	$.fn.jQuerySimpleCounter = function( options ) {
	    var settings = $.extend({
	        start:  0,
	        end:    100,
	        easing: 'swing',
	        duration: 400,
	        complete: ''
	    }, options );

	    var thisElement = $(this);

	    $({count: settings.start}).animate({count: settings.end}, {
			duration: settings.duration,
			easing: settings.easing,
			step: function() {
				var mathCount = Math.ceil(this.count);
				thisElement.text(mathCount);
			},
			complete: settings.complete
		});
	};


$('#number1').jQuerySimpleCounter({end: 12,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 55,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 359,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 246,duration: 2500});



  	/* AUTHOR LINK */
     $('.about-me-img').hover(function(){
            $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
        }, function(){
            $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
        });
  


//counter





//news section CALENDAR


if (typeof jQuery == 'undefined') {
    throw new Error('jQuery is not loaded');
}

/**
 * Create calendar
 *
 * @param options
 * @returns {*}
 */
$.fn.zabuto_calendar = function (options) {
    var opts = $.extend({}, $.fn.zabuto_calendar_defaults(), options);
    var languageSettings = $.fn.zabuto_calendar_language(opts.language);
    opts = $.extend({}, opts, languageSettings);

    this.each(function () {
        var $calendarElement = $(this);
        $calendarElement.attr('id', "zabuto_calendar_" + Math.floor(Math.random() * 99999).toString(36));

        $calendarElement.data('initYear', opts.year);
        $calendarElement.data('initMonth', opts.month);
        $calendarElement.data('monthLabels', opts.month_labels);
        $calendarElement.data('weekStartsOn', opts.weekstartson);
        $calendarElement.data('navIcons', opts.nav_icon);
        $calendarElement.data('dowLabels', opts.dow_labels);
        $calendarElement.data('showToday', opts.today);
        $calendarElement.data('showDays', opts.show_days);
        $calendarElement.data('showPrevious', opts.show_previous);
        $calendarElement.data('showNext', opts.show_next);
        $calendarElement.data('cellBorder', opts.cell_border);
        $calendarElement.data('jsonData', opts.data);
        $calendarElement.data('ajaxSettings', opts.ajax);
        $calendarElement.data('legendList', opts.legend);
        $calendarElement.data('actionFunction', opts.action);
        $calendarElement.data('actionNavFunction', opts.action_nav);

        drawCalendar();

        function drawCalendar() {
            var dateInitYear = parseInt($calendarElement.data('initYear'));
            var dateInitMonth = parseInt($calendarElement.data('initMonth')) - 1;
            var dateInitObj = new Date(dateInitYear, dateInitMonth, 1, 0, 0, 0, 0);
            $calendarElement.data('initDate', dateInitObj);

            var tableClassHtml = ($calendarElement.data('cellBorder') === true) ? ' table-bordered' : '';

            $tableObj = $('<table class="table' + tableClassHtml + '"></table>');
            $tableObj = drawTable($calendarElement, $tableObj, dateInitObj.getFullYear(), dateInitObj.getMonth());

            $legendObj = drawLegend($calendarElement);

            var $containerHtml = $('<div class="zabuto_calendar" id="' + $calendarElement.attr('id') + '"></div>');
            $containerHtml.append($tableObj);
            $containerHtml.append($legendObj);

            $calendarElement.append($containerHtml);

            var jsonData = $calendarElement.data('jsonData');
            if (false !== jsonData) {
                checkEvents($calendarElement, dateInitObj.getFullYear(), dateInitObj.getMonth());
            }
        }

        function drawTable($calendarElement, $tableObj, year, month) {
            var dateCurrObj = new Date(year, month, 1, 0, 0, 0, 0);
            $calendarElement.data('currDate', dateCurrObj);

            $tableObj.empty();
            $tableObj = appendMonthHeader($calendarElement, $tableObj, year, month);
            $tableObj = appendDayOfWeekHeader($calendarElement, $tableObj);
            $tableObj = appendDaysOfMonth($calendarElement, $tableObj, year, month);
            checkEvents($calendarElement, year, month);
            return $tableObj;
        }

        function drawLegend($calendarElement) {
            var $legendObj = $('<div class="legend" id="' + $calendarElement.attr('id') + '_legend"></div>');
            var legend = $calendarElement.data('legendList');
            if (typeof(legend) == 'object' && legend.length > 0) {
                $(legend).each(function (index, item) {
                    if (typeof(item) == 'object') {
                        if ('type' in item) {
                            var itemLabel = '';
                            if ('label' in item) {
                                itemLabel = item.label;
                            }

                            switch (item.type) {
                                case 'text':
                                    if (itemLabel !== '') {
                                        var itemBadge = '';
                                        if ('badge' in item) {
                                            if (typeof(item.classname) === 'undefined') {
                                                var badgeClassName = 'badge-event';
                                            } else {
                                                var badgeClassName = item.classname;
                                            }
                                            itemBadge = '<span class="badge ' + badgeClassName + '">' + item.badge + '</span> ';
                                        }
                                        $legendObj.append('<span class="legend-' + item.type + '">' + itemBadge + itemLabel + '</span>');
                                    }
                                    break;
                                case 'block':
                                    if (itemLabel !== '') {
                                        itemLabel = '<span>' + itemLabel + '</span>';
                                    }
                                    if (typeof(item.classname) === 'undefined') {
                                        var listClassName = 'event';
                                    } else {
                                        var listClassName = 'event-styled ' + item.classname;
                                    }
                                    $legendObj.append('<span class="legend-' + item.type + '"><ul class="legend"><li class="' + listClassName + '"></li></u>' + itemLabel + '</span>');
                                    break;
                                case 'list':
                                    if ('list' in item && typeof(item.list) == 'object' && item.list.length > 0) {
                                        var $legendUl = $('<ul class="legend"></u>');
                                        $(item.list).each(function (listIndex, listClassName) {
                                            $legendUl.append('<li class="' + listClassName + '"></li>');
                                        });
                                        $legendObj.append($legendUl);
                                    }
                                    break;
                                case 'spacer':
                                    $legendObj.append('<span class="legend-' + item.type + '"> </span>');
                                    break;

                            }
                        }
                    }
                });
            }

            return $legendObj;
        }

        function appendMonthHeader($calendarElement, $tableObj, year, month) {
            var navIcons = $calendarElement.data('navIcons');
            var $prevMonthNavIcon = $('<span><span class="glyphicon glyphicon-chevron-left"></span></span>');
            var $nextMonthNavIcon = $('<span><span class="glyphicon glyphicon-chevron-right"></span></span>');
            if (typeof(navIcons) === 'object') {
                if ('prev' in navIcons) {
                    $prevMonthNavIcon.html(navIcons.prev);
                }
                if ('next' in navIcons) {
                    $nextMonthNavIcon.html(navIcons.next);
                }
            }

            var prevIsValid = $calendarElement.data('showPrevious');
            if (typeof(prevIsValid) === 'number' || prevIsValid === false) {
                prevIsValid = checkMonthLimit($calendarElement.data('showPrevious'), true);
            }

            var $prevMonthNav = $('<div class="calendar-month-navigation"></div>');
            $prevMonthNav.attr('id', $calendarElement.attr('id') + '_nav-prev');
            $prevMonthNav.data('navigation', 'prev');
            if (prevIsValid !== false) {
                prevMonth = (month - 1);
                prevYear = year;
                if (prevMonth == -1) {
                    prevYear = (prevYear - 1);
                    prevMonth = 11;
                }
                $prevMonthNav.data('to', {year: prevYear, month: (prevMonth + 1)});
                $prevMonthNav.append($prevMonthNavIcon);
                if (typeof($calendarElement.data('actionNavFunction')) === 'function') {
                    $prevMonthNav.click($calendarElement.data('actionNavFunction'));
                }
                $prevMonthNav.click(function (e) {
                    drawTable($calendarElement, $tableObj, prevYear, prevMonth);
                });
            }

            var nextIsValid = $calendarElement.data('showNext');
            if (typeof(nextIsValid) === 'number' || nextIsValid === false) {
                nextIsValid = checkMonthLimit($calendarElement.data('showNext'), false);
            }

            var $nextMonthNav = $('<div class="calendar-month-navigation"></div>');
            $nextMonthNav.attr('id', $calendarElement.attr('id') + '_nav-next');
            $nextMonthNav.data('navigation', 'next');
            if (nextIsValid !== false) {
                nextMonth = (month + 1);
                nextYear = year;
                if (nextMonth == 12) {
                    nextYear = (nextYear + 1);
                    nextMonth = 0;
                }
                $nextMonthNav.data('to', {year: nextYear, month: (nextMonth + 1)});
                $nextMonthNav.append($nextMonthNavIcon);
                if (typeof($calendarElement.data('actionNavFunction')) === 'function') {
                    $nextMonthNav.click($calendarElement.data('actionNavFunction'));
                }
                $nextMonthNav.click(function (e) {
                    drawTable($calendarElement, $tableObj, nextYear, nextMonth);
                });
            }

            var monthLabels = $calendarElement.data('monthLabels');

            var $prevMonthCell = $('<th></th>').append($prevMonthNav);
            var $nextMonthCell = $('<th></th>').append($nextMonthNav);

            var $currMonthLabel = $('<span>' + monthLabels[month] + ' ' + year + '</span>');
            $currMonthLabel.dblclick(function () {
                var dateInitObj = $calendarElement.data('initDate');
                drawTable($calendarElement, $tableObj, dateInitObj.getFullYear(), dateInitObj.getMonth());
            });

            var $currMonthCell = $('<th colspan="5"></th>');
            $currMonthCell.append($currMonthLabel);

            var $monthHeaderRow = $('<tr class="calendar-month-header"></tr>');
            $monthHeaderRow.append($prevMonthCell, $currMonthCell, $nextMonthCell);

            $tableObj.append($monthHeaderRow);
            return $tableObj;
        }

        function appendDayOfWeekHeader($calendarElement, $tableObj) {
            if ($calendarElement.data('showDays') === true) {
                var weekStartsOn = $calendarElement.data('weekStartsOn');
                var dowLabels = $calendarElement.data('dowLabels');
                if (weekStartsOn === 0) {
                    var dowFull = $.extend([], dowLabels);
                    var sunArray = new Array(dowFull.pop());
                    dowLabels = sunArray.concat(dowFull);
                }

                var $dowHeaderRow = $('<tr class="calendar-dow-header"></tr>');
                $(dowLabels).each(function (index, value) {
                    $dowHeaderRow.append('<th>' + value + '</th>');
                });
                $tableObj.append($dowHeaderRow);
            }
            return $tableObj;
        }

        function appendDaysOfMonth($calendarElement, $tableObj, year, month) {
            var ajaxSettings = $calendarElement.data('ajaxSettings');
            var weeksInMonth = calcWeeksInMonth(year, month);
            var lastDayinMonth = calcLastDayInMonth(year, month);
            var firstDow = calcDayOfWeek(year, month, 1);
            var lastDow = calcDayOfWeek(year, month, lastDayinMonth);
            var currDayOfMonth = 1;

            var weekStartsOn = $calendarElement.data('weekStartsOn');
            if (weekStartsOn === 0) {
                if (lastDow == 6) {
                    weeksInMonth++;
                }
                if (firstDow == 6 && (lastDow == 0 || lastDow == 1 || lastDow == 5)) {
                    weeksInMonth--;
                }
                firstDow++;
                if (firstDow == 7) {
                    firstDow = 0;
                }
            }

            for (var wk = 0; wk < weeksInMonth; wk++) {
                var $dowRow = $('<tr class="calendar-dow"></tr>');
                for (var dow = 0; dow < 7; dow++) {
                    if (dow < firstDow || currDayOfMonth > lastDayinMonth) {
                        $dowRow.append('<td></td>');
                    } else {
                        var dateId = $calendarElement.attr('id') + '_' + dateAsString(year, month, currDayOfMonth);
                        var dayId = dateId + '_day';

                        var $dayElement = $('<div id="' + dayId + '" class="day" >' + currDayOfMonth + '</div>');
                        $dayElement.data('day', currDayOfMonth);

                        if ($calendarElement.data('showToday') === true) {
                            if (isToday(year, month, currDayOfMonth)) {
                                $dayElement.html('<span class="badge badge-today">' + currDayOfMonth + '</span>');
                            }
                        }

                        var $dowElement = $('<td id="' + dateId + '"></td>');
                        $dowElement.append($dayElement);

                        $dowElement.data('date', dateAsString(year, month, currDayOfMonth));
                        $dowElement.data('hasEvent', false);

                        if (typeof($calendarElement.data('actionFunction')) === 'function') {
                            $dowElement.addClass('dow-clickable');
                            $dowElement.click(function () {
                                $calendarElement.data('selectedDate', $(this).data('date'));
                            });
                            $dowElement.click($calendarElement.data('actionFunction'));
                        }

                        $dowRow.append($dowElement);

                        currDayOfMonth++;
                    }
                    if (dow == 6) {
                        firstDow = 0;
                    }
                }

                $tableObj.append($dowRow);
            }
            return $tableObj;
        }

        /* ----- Modal functions ----- */

        function createModal(id, title, body, footer) {
            var $modalHeaderButton = $('<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>');
            var $modalHeaderTitle = $('<h4 class="modal-title" id="' + id + '_modal_title">' + title + '</h4>');

            var $modalHeader = $('<div class="modal-header"></div>');
            $modalHeader.append($modalHeaderButton);
            $modalHeader.append($modalHeaderTitle);

            var $modalBody = $('<div class="modal-body" id="' + id + '_modal_body">' + body + '</div>');

            var $modalFooter = $('<div class="modal-footer" id="' + id + '_modal_footer"></div>');
            if (typeof(footer) !== 'undefined') {
                var $modalFooterAddOn = $('<div>' + footer + '</div>');
                $modalFooter.append($modalFooterAddOn);
            }

            var $modalContent = $('<div class="modal-content"></div>');
            $modalContent.append($modalHeader);
            $modalContent.append($modalBody);
            $modalContent.append($modalFooter);

            var $modalDialog = $('<div class="modal-dialog"></div>');
            $modalDialog.append($modalContent);

            var $modalFade = $('<div class="modal fade" id="' + id + '_modal" tabindex="-1" role="dialog" aria-labelledby="' + id + '_modal_title" aria-hidden="true"></div>');
            $modalFade.append($modalDialog);

            $modalFade.data('dateId', id);
            $modalFade.attr("dateId", id);

            return $modalFade;
        }

        /* ----- Event functions ----- */

        function checkEvents($calendarElement, year, month) {
            var jsonData = $calendarElement.data('jsonData');
            var ajaxSettings = $calendarElement.data('ajaxSettings');

            $calendarElement.data('events', false);

            if (false !== jsonData) {
                return jsonEvents($calendarElement);
            } else if (false !== ajaxSettings) {
                return ajaxEvents($calendarElement, year, month);
            }

            return true;
        }

        function jsonEvents($calendarElement) {
            var jsonData = $calendarElement.data('jsonData');
            $calendarElement.data('events', jsonData);
            drawEvents($calendarElement, 'json');
            return true;
        }

        function ajaxEvents($calendarElement, year, month) {
            var ajaxSettings = $calendarElement.data('ajaxSettings');

            if (typeof(ajaxSettings) != 'object' || typeof(ajaxSettings.url) == 'undefined') {
                alert('Invalid calendar event settings');
                return false;
            }

            var data = {year: year, month: (month + 1)};

            $.ajax({
                type: 'GET',
                url: ajaxSettings.url,
                data: data,
                dataType: 'json'
            }).done(function (response) {
                var events = [];
                $.each(response, function (k, v) {
                    events.push(response[k]);
                });
                $calendarElement.data('events', events);
                drawEvents($calendarElement, 'ajax');
            });

            return true;
        }

        function drawEvents($calendarElement, type) {
            var jsonData = $calendarElement.data('jsonData');
            var ajaxSettings = $calendarElement.data('ajaxSettings');

            var events = $calendarElement.data('events');
            if (events !== false) {
                $(events).each(function (index, value) {
                    var id = $calendarElement.attr('id') + '_' + value.date;
                    var $dowElement = $('#' + id);
                    var $dayElement = $('#' + id + '_day');

                    $dowElement.data('hasEvent', true);

                    if (typeof(value.title) !== 'undefined') {
                        $dowElement.attr('title', value.title);
                    }

                    if (typeof(value.classname) === 'undefined') {
                        $dowElement.addClass('event');
                    } else {
                        $dowElement.addClass('event-styled');
                        $dayElement.addClass(value.classname);
                    }

                    if (typeof(value.badge) !== 'undefined' && value.badge !== false) {
                        var badgeClass = (value.badge === true) ? '' : ' badge-' + value.badge;
                        var dayLabel = $dayElement.data('day');
                        $dayElement.html('<span class="badge badge-event' + badgeClass + '">' + dayLabel + '</span>');
                    }

                    if (typeof(value.body) !== 'undefined') {
                        var modalUse = false;
                        if (type === 'json' && typeof(value.modal) !== 'undefined' && value.modal === true) {
                            modalUse = true;
                        } else if (type === 'ajax' && 'modal' in ajaxSettings && ajaxSettings.modal === true) {
                            modalUse = true;
                        }

                        if (modalUse === true) {
                            $dowElement.addClass('event-clickable');

                            var $modalElement = createModal(id, value.title, value.body, value.footer);
                            $('body').append($modalElement);

                            $('#' + id).click(function () {
                                $('#' + id + '_modal').modal();
                            });
                        }
                    }
                });
            }
        }

        /* ----- Helper functions ----- */

        function isToday(year, month, day) {
            var todayObj = new Date();
            var dateObj = new Date(year, month, day);
            return (dateObj.toDateString() == todayObj.toDateString());
        }

        function dateAsString(year, month, day) {
            d = (day < 10) ? '0' + day : day;
            m = month + 1;
            m = (m < 10) ? '0' + m : m;
            return year + '-' + m + '-' + d;
        }

        function calcDayOfWeek(year, month, day) {
            var dateObj = new Date(year, month, day, 0, 0, 0, 0);
            var dow = dateObj.getDay();
            if (dow == 0) {
                dow = 6;
            } else {
                dow--;
            }
            return dow;
        }

        function calcLastDayInMonth(year, month) {
            var day = 28;
            while (checkValidDate(year, month + 1, day + 1)) {
                day++;
            }
            return day;
        }

        function calcWeeksInMonth(year, month) {
            var daysInMonth = calcLastDayInMonth(year, month);
            var firstDow = calcDayOfWeek(year, month, 1);
            var lastDow = calcDayOfWeek(year, month, daysInMonth);
            var days = daysInMonth;
            var correct = (firstDow - lastDow);
            if (correct > 0) {
                days += correct;
            }
            return Math.ceil(days / 7);
        }

        function checkValidDate(y, m, d) {
            return m > 0 && m < 13 && y > 0 && y < 32768 && d > 0 && d <= (new Date(y, m, 0)).getDate();
        }

        function checkMonthLimit(count, invert) {
            if (count === false) {
                count = 0;
            }
            var d1 = $calendarElement.data('currDate');
            var d2 = $calendarElement.data('initDate');

            var months;
            months = (d2.getFullYear() - d1.getFullYear()) * 12;
            months -= d1.getMonth() + 1;
            months += d2.getMonth();

            if (invert === true) {
                if (months < (parseInt(count) - 1)) {
                    return true;
                }
            } else {
                if (months >= (0 - parseInt(count))) {
                    return true;
                }
            }
            return false;
        }
    }); // each()

    return this;
};

/**
 * Default settings
 *
 * @returns object
 *   language:          string,
 *   year:              integer,
 *   month:             integer,
 *   show_previous:     boolean|integer,
 *   show_next:         boolean|integer,
 *   cell_border:       boolean,
 *   today:             boolean,
 *   show_days:         boolean,
 *   weekstartson:      integer (0 = Sunday, 1 = Monday),
 *   nav_icon:          object: prev: string, next: string
 *   ajax:              object: url: string, modal: boolean,
 *   legend:            object array, [{type: string, label: string, classname: string}]
 *   action:            function
 *   action_nav:        function
 */
$.fn.zabuto_calendar_defaults = function () {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var settings = {
        language: false,
        year: year,
        month: month,
        show_previous: true,
        show_next: true,
        cell_border: false,
        today: false,
        show_days: true,
        weekstartson: 1,
        nav_icon: false,
        data: false,
        ajax: false,
        legend: false,
        action: false,
        action_nav: false
    };
    return settings;
};

/**
 * Language settings
 *
 * @param lang
 * @returns {{month_labels: Array, dow_labels: Array}}
 */
$.fn.zabuto_calendar_language = function (lang) {
    if (typeof(lang) == 'undefined' || lang === false) {
        lang = 'en';
    }

    switch (lang.toLowerCase()) {
     

        case 'en':
            return {
                month_labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                dow_labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            };
            break;

     
    }

};


   $(document).ready(function () {
    $("#my-calendar").zabuto_calendar({
      legend: [
        {type: "text", label: "Special event", badge: "00"},
        {type: "block", label: "Regular event", classname: "purple"},
        {type: "spacer"},
        {type: "text", label: "Bad"},
        {type: "list", list: ["grade-1", "grade-2", "grade-3", "grade-4"]},
        {type: "text", label: "Good"}
      ],
      ajax: {
        url: "show_data.php?grade=1"
      }
    });
  });



//news section CALENDAR



})(jQuery);



