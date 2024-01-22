"use strict";

const $ = jQuery;

function eventHandler() {
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// если не используешь методы swiper  - можно обращаться без нее к Swiper
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});


  new Swiper('.headerBlock__slider--js .swiper', {
		slidesPerView: 1,
		spaceBetween: 0,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
    pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})
  const swiperTabs = new Swiper('.tabs-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true
	});

  new Swiper('.sProductSlider__swiper--js', {
		freeMode: true,
    loop: true,
		slidesPerView: 'auto',
		spaceBetween: 10,
		breakpoints: {
			960: {
				spaceBetween: 30,
				// slidesPerView: 4,
			},
		},
	})
  new Swiper('.rev-wrap__swiper--js', {
		freeMode: true,
    loop: false,
		slidesPerView: 1,
		spaceBetween: 20,
		breakpoints: {
			960: {
				spaceBetween: 30,
				// slidesPerView: 4,
			},
		},
	})
  const swiper = new Swiper(".sSearchTrip__swiper--js", {
    slidesPerView: 2,
    grid: {
      rows: 3,
    },
    spaceBetween: 20,
    navigation: {
			nextEl: '.sSearchTrip__swiper .swiper-button-next',
			prevEl: '.sSearchTrip__swiper .swiper-button-prev',
		},
    breakpoints: {
      768: {
        spaceBetween: 30,
        slidesPerView: 3,
        grid: {
          rows: 3,
        },
      },
      1200: {
        slidesPerView: 4,
        grid: {
          rows: 3,
        },
      },

    }
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  });
  const swiperBlog = new Swiper(".sBlog__swiper--js", {
    slidesPerView: 1,
    // grid: {
    //   rows: 3,
    // },
    spaceBetween: 30,
    navigation: {
			nextEl: '.sBlog__swiper .swiper-button-next',
			prevEl: '.sBlog__swiper .swiper-button-prev',
		},
    // breakpoints: {
    //   768: {
    //     spaceBetween: 30,
    //     slidesPerView: 3,
    //     grid: {
    //       rows: 3,
    //     },
    //   },
    //   1200: {
    //     slidesPerView: 4,
    //     grid: {
    //       rows: 3,
    //     },
    //   },
    // }
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		},
  });
  // const swiperCatalog = new Swiper(".sCatalog__swiper--js", {
  //   slidesPerView: 1,
  //   grid: {
  //     rows: 3,
  //   },
  //   spaceBetween: 20,
  //   navigation: {
	// 		nextEl: '.sCatalog__swiper .swiper-button-next',
	// 		prevEl: '.sCatalog__swiper .swiper-button-prev',
	// 	},
  //   breakpoints: {
  //     576: {
  //       spaceBetween: 30,
  //       slidesPerView: 2,
  //       grid: {
  //         rows: 3,
  //       },
  //     },
  //     1200: {
  //       slidesPerView: 3,
  //       grid: {
  //         rows: 3,
  //       },
  //     },
  //   // }
  //   // pagination: {
  //   //   el: ".swiper-pagination",
  //   //   clickable: true,
  //   },
  //   pagination: {
	// 		el: " .swiper-pagination",
	// 		type: "bullets",
	// 		clickable: true,
	// 		renderBullet: function (index, className) {
	// 			return '<span class="' + className + '">' + (index + 1) + '</span>';
	// 		}
	// 	},
  // });
  //     --bs-breakpoint-xs: 0;
    // --bs-breakpoint-sm: 576px;
    // --bs-breakpoint-md: 768px;
    // --bs-breakpoint-lg: 992px;
    // --bs-breakpoint-xl: 1200px;

	$(".custom-select-wrap").each(function () {
		const self = $(this);
		self.find(".custom-select-js").select2({
			allowClear: false,
			dropdownParent: self,
		});
	});
}
if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }

const dataPickers = document.querySelectorAll('.data-picker-wrap');
	for (const dataPickerEll of dataPickers) {
		const dataPicker = dataPickerEll.querySelector('.data-picker--js');
		// const dataPickerIcon = dataPickerEll.querySelector(`.data-picker ~ .icon`);

		new AirDatepicker(dataPicker, {
			autoClose: false,
			// inline: true,
			container: dataPickerEll,
      position: 'top center',
			onShow() {
				dataPicker.classList.add('active');
			},
			onHide() {
				dataPicker.classList.remove('active');
			},
			navTitles: {
				days: 'yyyy <i>MMMM</i>',
			},
		});
	}
  const dataPickerBottom = document.querySelectorAll('.data-picker-wrap');
	for (const dataPickerEll of dataPickers) {
		const dataPicker = dataPickerEll.querySelector('.data-picker--js_bottom');
		// const dataPickerIcon = dataPickerEll.querySelector(`.data-picker ~ .icon`);

		new AirDatepicker(dataPicker, {
			autoClose: false,
			// inline: true,
			container: dataPickerEll,
      position: 'bottom center',
			onShow() {
				dataPicker.classList.add('active');
			},
			onHide() {
				dataPicker.classList.remove('active');
			},
			navTitles: {
				days: 'yyyy <i>MMMM</i>',
			},
		});
	}

  const btnDelArr = document.querySelectorAll(".photo-file-delete-js")

let loadFile = function(event) {
	let eventElem = event.srcElement.parentElement;

	eventElem.querySelector('.img-preview').src = URL.createObjectURL(event.target.files[0]);

	eventElem.querySelector('.img-preview').classList.add("active");
	eventElem.classList.add("border-0")
	if(eventElem.querySelector(".photo-file-delete-js")) {
		eventElem.querySelector(".photo-file-delete-js").classList.remove("d-none")
	}
};

if(btnDelArr.length > 0) {
	btnDelArr.forEach((btnDel) => {
		btnDel.addEventListener("click", function(){
			this.classList.add("d-none");
			
			btnDel.parentElement.querySelector('.img-preview').classList.remove("active")
			btnDel.parentElement.querySelector('.img-preview').src = "";
			btnDel.parentElement.querySelector('[onchange="loadFile(event)"]').value = '';  
			btnDel.parentElement.classList.remove("border-0");
		})
	})
	
}


$('.accordion-js').click(function(){
  $(this).parent().find('.accordion-toggle').slideToggle();
  $(this).toggleClass('active');
})