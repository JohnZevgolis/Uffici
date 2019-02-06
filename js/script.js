$(function() {

	footer();
	dropdown();
	mainMenu();
	modal();
    SetUpGridCols();
    gift();
    scrollDown();
    fadeEffect();
    plainBtn();
    ufficiCuisine();
    ufficiCuisineBtn();	
	reveal();
	marginTop();

})

$(window).resize(function() {
	footer();
	marginTop();
	SetUpGridCols();
})

$(window).scroll(function() {
	reveal();
})

$(window).on("load",function() {
	marginTop();
})

var width;
var headerHeight;

function scrollDown() {
	if($(".scroll-down").length) {
		$(".scroll-down").click(function() {
			$("html,body").animate({scrollTop: $(this).parent().next("section").offset().top-headerHeight},500,"linear");
		})
	}
}

function footer() {
	width=$(window).width()+getScrollBarWidth()
	var footer=$("footer").outerHeight();
	if(width>991) {
		$(".footer-height").css("height",footer);
	} else {
		$(".footer-height").css("height","auto");
	}

}

function getScrollBarWidth() {
    var inner = document.createElement('p');
    inner.style.width = "100%";
    inner.style.height = "200px";

    var outer = document.createElement('div');
    outer.style.position = "absolute";
    outer.style.top = "0px";
    outer.style.left = "0px";
    outer.style.visibility = "hidden";
    outer.style.width = "200px";
    outer.style.height = "150px";
    outer.style.overflow = "hidden";
    outer.appendChild(inner);

    document.body.appendChild(outer);
    var w1 = inner.offsetWidth;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    if (w1 === w2) w2 = outer.clientWidth;

    document.body.removeChild(outer);

    return (w1 - w2);
};

function dropdown() {

	$(".mydropdown").each(function() {

		var counter = 0;
		var delay = 0;

		$(this).find("a,.dropdown-divider").each(function() {
			if(counter == 0) {
				delay = 0;
			} else {
				delay += .04;
			}

			$(this).css("transition-delay",delay+"s");
			counter++;
		});

	})

	$('body').click(function (e) {
		var dropdown = $(".mydropdown");

		if(e.target.id != dropdown.attr('id') && !dropdown.has(e.target).length && dropdown.is(":visible")) {
	      dropdown.removeClass("scale-dropdown");
	      $(".mydropdown a,.mydropdown .dropdown-divider").removeClass("scale-divider");
	    }
    });

	$(".relative.dropdown-btn > a").click(function(e) {
		e.preventDefault();
		e.stopPropagation();
		$(".mydropdown").addClass("scale-dropdown");
		$(".mydropdown a,.mydropdown .dropdown-divider").addClass("scale-divider");
	});

}

function reveal() {

	var flag = false;
	headerHeight = $("header").height();

	if(flag==false) {
        var windowBottom = $(window).height() + $(window).scrollTop();

        $(".lg-section,.sm-section .bg-section").each(function() {
            var itemBottom = $(this).offset().top - headerHeight + $(this).outerHeight();
            if(width>768) {
                 itemBottom = $(this).offset().top + $(this).outerHeight();
            } else {
                itemBottom = $(this).offset().top - headerHeight + $(this).outerHeight();
            }

            if(windowBottom>itemBottom) {
                $(this).find(".justify-content-start .layer").addClass("fadeInLeft");
                $(this).find(".justify-content-end .layer").addClass("fadeInRight");
                $(this).find(".layer.fromTop,.layer.fromBottom").addClass("fadeInTop");
            }

        })
    }

   if($(".lg-section").last().find(".layer").hasClass("fadeInRight")) {
        flag = true;
    }

}

function mainMenu() {

	var counter = 0;
	var delay = 0;

	$(".main-menu .navbar-nav > .nav-item > .main-menu-item,.main-menu .social-media .nav-item").each(function() {
		if(counter == 0) {
			delay = 0;
		} else {
			delay += .04;
		}

		$(this).css("transition-delay",delay+"s");
		counter++;
	})

	$('body').click(function (e) {
		var dropdown = $(".main-menu");

		if(!dropdown.has(e.target).length && dropdown.is(":visible")) {
		    $(".main-menu").stop().animate({"left":"-100%"},500,function() {
				$(".close-btn .top-bar").removeClass("move-top-bar");
				$(".close-btn .bottom-bar").removeClass("move-bottom-bar");
				$(".main-menu .navbar-nav .nav-link,.main-menu .social-media .nav-item").removeClass("fadeInLeft");
			});
	    }
    });

    $(".mynavbar .navbar-toggler,.mynavbar .menu-item").click(function(e) {
    	e.stopPropagation();
    	$(".mynavbar .navbar-toggler .icon-bar").addClass("fadeOutRight");
		$(".main-menu").stop().animate({"left":"0"},500,function() {
			$(".close-btn .top-bar").addClass("move-top-bar");
			$(".close-btn .bottom-bar").addClass("move-bottom-bar");
			$(".main-menu .navbar-nav .nav-link,.main-menu .social-media .nav-item").addClass("fadeInLeft");
			$(".mynavbar .navbar-toggler .icon-bar").removeClass("fadeOutRight");
		});
	})

	$(".main-menu .close-btn").click(function(e) {
		e.stopPropagation();

		$(".main-menu").stop().animate({"left":"-100%"},500,function() {
			$(".close-btn .top-bar").removeClass("move-top-bar");
			$(".close-btn .bottom-bar").removeClass("move-bottom-bar");
			$(".main-menu .navbar-nav .nav-link,.main-menu .social-media .nav-item").removeClass("fadeInLeft");
		});
	})
	
}

function modal() {
	$("#myModal").on('show.bs.modal', function () {
        if($(".main-menu").is(":visible")) {
        	$(".main-menu").stop().animate({"left":"-100%"},500);
        }
    });
}

function marginTop() {
	$(".margin-top").css("margin-top", headerHeight);
}

function SetUpGridCols() {
    $('.grid_col').matchHeight
    ({
        byRow: false,
        property: 'height',
        target: null,
        remove: false
    });
}

function gift() {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
      triggerElement: ".gift-image",
      duration: "80%",
      triggerHook: 1
    })
    .setTween(TweenMax.from(".gift-image",6,{y:"200px",ease:SlowMo.easeOut}))
    .addTo(controller);
}

function fadeEffect() {
	if($(".fade-effect").length) {
		$(".fade-effect img,.fade-effect h2,.fade-effect p,.fade-effect .borders").waypoint(function() {
			$(this.element).addClass("fire");
		}, {offset: "65%"})
	}	
}

function plainBtn() {
	$(".plain button").click(function() {
		$(this).find("i").toggleClass("rotate180");
	})
}

function ufficiCuisine() {
	$(".uffici_cuisine_menu .nav-link").click(function(e) {
		e.preventDefault();

		var ajaxUrl = $(this).attr("href");
		var sectionId = $(this).attr("data-section");
		var header;

		if(!$(this).parent("header").siblings(".z-index.relative").hasClass("margin-top")) {
			header = $("header").outerHeight();
		} else {
			header = "";
		}

		$.ajax({
            type: "GET", 
            url: ajaxUrl, 
            success: function () {

		        window.location.href = ajaxUrl+"#section="+sectionId;

		        moveToSection(header);

            }
        });  

    });

	moveToSection(null);
   
}

function moveToSection(header) {
	if(window.location.hash.length) {
		var section = location.hash.slice(1).split("=")[1];
			
		$("html,body").animate({scrollTop:$("section[data-section='"+section+"']").offset().top - header}, 800, function() {
			$("section[data-section='"+section+"']").find(".collapse").slideDown(400);
			$("section[data-section='"+section+"']").find("button i").addClass("rotate180");
		});
	} 
}

function ufficiCuisineBtn() {
	$(".uffici_cuisine_btn").click(function() {
		$(this).next().slideToggle();
	})
}