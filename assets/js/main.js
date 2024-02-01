


// 첫번째 메인 슬라이드
const mainSlide = new Swiper(".main-slide .swiper", {
 slidesPerView:"auto",  
 centeredSlides:true,
 speed:1000,
 loop:true,
 spaceBetween:"20",
  navigation: {
    prevEl: ".prev",
    nextEl: ".next",
  },
  pagination: {
    el: ".main-slide .swiper-pagination",
  },
  autoplay: {
    delay: 3000, 
    disableOnInteraction: false, 
  },
});

$(".main-slide .side-util .btn-autoplay").on("click",function(){
  mainSlide.autoplay.stop()
})
$(".main-slide .side-util .play").on("click",function(){
  mainSlide.autoplay.start()
})
const brandnameSlide = new Swiper(".brand-news .banner-name-slide .swiper", {
  slidesPerView: "3",
  loop:true,
  centeredSlides:true,
  navigation : {
    nextEl : '.next', 
    prevEl : '.prev', 
	},
});

brandnameSlide.on("slideChange",function(){
  brandParenttSlide.slideToLoop(this.realIndex);
})


const brandParenttSlide = new Swiper(".brand-news .parent-slide", {
  loop: true,
  speed: 500,
});

brandParenttSlide.on("slideChange",function(){
  brandnameSlide.slideToLoop(this.realIndex);
  
})


const brandChildSlide = new Swiper(".brand-news .child-slide", {
      loop: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
      },
      nested:true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
});


const styleSlide1 = new Swiper('.style-book .slide1',{
  navigation : {
    nextEl : '.style-book .next', 
    prevEl : '.style-book .prev', 
	},
  loop:true,
  allowTouchMove:false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
})


const styleSlide2 = new Swiper('.style-book .slide2',{
  allowTouchMove:false
})

styleSlide1.on("slideChange",function(){
  styleSlide2.slideToLoop(this.realIndex);
})



$(".style-book .autoplay").on("click",function(){
  $(this).css("display" ,"none")
  $(".style-book .play").css("display","inline-block")
  styleSlide1.autoplay.stop()
})

$(".style-book .play").on("click",function(){
  $(this).css("display" ,"none")
  $(".style-book .autoplay").css("display","inline-block")
  styleSlide1.autoplay.start()
})


const newProductSlide = new Swiper(".new-product .swiper", {
  
  loop: true,
  spaceBetween:20,
  navigation : {
    nextEl : '.next-btn', 
    prevEl : '.prev-btn', 
	},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,   
          },
  slidesPerView: "5",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});







const recommenSlide = new Swiper(".recommend-area .swiper", {
  
  loop: true,
  spaceBetween:20,
  navigation : {
    nextEl : '.next', 
    prevEl : '.prev', 
	},
  pagination: {
    el: ".swiper-pagination",
    clickable: true,   
          },
  slidesPerView: "5",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

$(".stop").on("click",function(){
  recommenSlide.autoplay.stop()
})

$(".play").on("click",function(){
  recommenSlide.autoplay.start()
})


  // 검색창 열기
  $(".header .search").on("click", function() {
    $(".search-zone").addClass("on");
    $("body").addClass("scroll-lock")
  });
  
  //검색창 닫기
  $(".search-zone .search-close").on("click",function(){
    $(".search-zone").removeClass("on");
    $("body").removeClass("scroll-lock")
  })

  //카테고리 호버
  // 질문 리스트에 갭15를 줘서 그런지 마우스가 벗어나면 뚝뚝 끊기는 느낌이듬
  $(".header .bottom .item").hover(function(){
    $(this).find(".sub").addClass("on")
  },
  function(){  
    $(this).find(".sub").removeClass("on")
  }
  )




//랭크 리스트 자동 슬라이드
var currentIndex = 0; // 인덱스 초기화

function rankList() {
    var $rankingList = $("#rankingList");
    var $subs = $rankingList.find(".sub");
    var $moreView = $rankingList.find(".more-view");
    
    // 모든 요소에서 "on" 클래스 제거
    $subs.removeClass("on");
    $moreView.removeClass("on");

    // 현재 인덱스에 "on" 클래스 추가
    $subs.eq(currentIndex).addClass("on");
    $moreView.eq(currentIndex).addClass("on");

    // 다음 반복을 위해 인덱스 증가
    currentIndex = (currentIndex + 1) % $subs.length;
}

// 초기에 함수 실행
rankList();

// 3초마다 함수 실행하는 간격 설정
setInterval(rankList, 3000);


// 상품 호버 이벤트
$(".box1, .box2").hover(
  function() {
    $(this).find(".over-view").addClass("on");
  },
  function() {
    $(this).find(".over-view").removeClass("on");
  }
);


//카테고리 클릭

const firstSwiper = $(".new-product #slide1");
const secondSwiper = $(".new-product #slide2");

const brandSwiper = $(".new-product2 #slide1");
const brand2Swiper = $(".new-product2 #slide2");

$(".new-product .title1").on("click",function(){
  $(this).addClass("on")
  $(".new-product .title2").removeClass("on")
  const tabId = $(this).data('tab');
  
  $(".cont-brand").removeClass("active")
  $(tabId).addClass("active")

 
  
  
  firstSwiper.addClass("slide1")
  secondSwiper.removeClass("slide1")
  
})



$(".new-product #slide1 .tab-list, .new-product #slide1 .tab-list").on("click", ".tab-item a", function (e) {
  e.preventDefault();

  // 모든 브랜드 숨기기
  $(".cont").removeClass("on");

  // 클릭한 탭에 해당하는 브랜드만 보이기
  const targetBrandId = $(this).data('tab');
  $(targetBrandId).addClass("on");
});

$(".new-product #slide2 .tab-list").on("click", ".tab-item a", function (e) {
  e.preventDefault();

  // 모든 브랜드 숨기기
  $(".cont").removeClass("on");

  // 클릭한 탭에 해당하는 브랜드만 보이기
  const targetBrandId = $(this).data('tab');
  $(targetBrandId).addClass("on");
});



$(".new-product .title2").on("click",function(){
  $(this).addClass("on")
  $(".new-product .title1").removeClass("on")

  const tabId = $(this).data('tab');
  
 
  $(".cont-brand").removeClass("active");
  $(tabId).addClass("active");

  secondSwiper.addClass("slide1")
  firstSwiper.removeClass("slide1")
})





$(".recommend-area .play").on("click",function(){
  $(".stop").css("display","inline-block")
  $(this).css("display","none")
})

$(".recommend-area .stop").on("click",function(){
  $(".play").css("display","inline-block")
  $(this).css("display","none")
})

$(".main-slide .side-util .btn-autoplay").on("click", function () {
  $(this).css("display", "none"); 
  $(".play").addClass("active");
});


$(".play").on("click", function () {
  $(this).removeClass("active")
  $(".main-slide .side-util .btn-autoplay").css("display" , "block")
});

$(document).on("scroll", function() {
  var scrollPosition = $(this).scrollTop();
  console.log(scrollPosition);
  if(scrollPosition >= 5852){
    $(".footer-fixed").addClass("fix")
  }else{
    $(".footer-fixed").removeClass("fix") 
  }
});


$(".footer-fixed .top").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, "slow"); // Scroll to the top smoothly
});


$('.you-tube-play').click(function() {
  openYouTubePopup();
  $('.video-pop-up').show();
  $('body').css('overflow', 'hidden'); // 스크롤 방지
});

$('.close').click(function() {
  closeYouTubePopup();
  $('.video-pop-up').hide();
  $('body').css('overflow', ''); // 스크롤 허용
});
function openYouTubePopup() {
  $("#videoPopup").show();
  $("#cmmnCnrHtvVideo2").attr("src", "https://www.youtube.com/embed/i0W9aulmSKc?autoplay=1&rel=0&playsinline=1&mute=1&enablejsapi=1&origin=https%3A%2F%2Fwww.hfashionmall.com&widgetid=4");
}

function closeYouTubePopup() {
  $("#videoPopup").hide();
  $("#cmmnCnrHtvVideo2").attr("src", "");
}


$(".new-product .tab-list .tab-item").on("click", function() {
  
  $(".new-product .tab-list .tab-item").removeClass("on");
  
  
  $(this).addClass("on");
});




$(".footer .link-join").on("click", function() {

  $(this).toggleClass("active");


  $(".open-list").slideToggle();
});
