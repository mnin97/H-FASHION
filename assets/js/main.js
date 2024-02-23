


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
$(".main-slide .side-util .slide1-play").on("click",function(){
  mainSlide.autoplay.start()
})

$(".main-slide .slide1-play").on("click",function(){
  $(".btn-autoplay").css("display","inline-block")
  $(this).css("display","none")
})

$(".main-slide .btn-autoplay").on("click",function(){
  $(".slide1-play").css("display","inline-block")
  $(this).css("display","none")
})



const brandnameSlide = new Swiper(".brand-news .banner-name-slide .swiper", {
  slidesPerView: 3,
  loop:true,
  centeredSlides:true,
  navigation : {
    nextEl : '.next', 
    prevEl : '.prev', 
	},
});



const brandParenttSlide = new Swiper(".brand-news .parent-slide", {
  loop: true,
  speed: 500,
});


brandnameSlide.on("slideChange",function(){
  brandParenttSlide.slideToLoop(this.realIndex);
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
    nextEl:'.style-book .next', 
    prevEl:'.style-book .prev', 
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
  $(".style-book .slide-play").css("display","inline-block")
  styleSlide1.autoplay.stop()
})

$(".style-book .slide-play").on("click",function(){
  $(this).css("display" ,"none")
  $(".style-book .autoplay").css("display","inline-block")
  styleSlide1.autoplay.start()
})


const newProductSlide = new Swiper(".new-product .swiper", {
  
  // loop: true,
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
  
  // loop: true,
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


  $(".header .bottom .item").hover(function(){
    $(this).find(".sub").addClass("on")
    
  },
  function(){  
    $(this).find(".sub").removeClass("on")
  }
  )
  $(".header .bottom .item").hover(function(){
    $(".header").toggleClass('bg')
  })


  //밑에 헤더 고정시키기
  let bottomFix = $(".header .bottom").offset().top;

  $(window).scroll(function(){
    let windowScroll = $(this).scrollTop();
    if(bottomFix <= windowScroll){
      $(".header .bottom").addClass("fix")
    } else{
      $(".header .bottom").removeClass("fix")
    }
    
  })



  let currentIndex = 0; // 인덱스 초기화

  function rankList() {
      let rankingList = $("#rankingList");
      let subs = rankingList.find(".sub");
      let moreView = rankingList.find(".more-view");
      
      // 모든 요소에서 "on" 클래스 제거
      subs.removeClass("on");
      moreView.removeClass("on");
  
      // 현재 인덱스에 "on" 클래스 추가
      subs.eq(currentIndex).addClass("on");
      moreView.eq(currentIndex).addClass("on");
  
      // 다음 반복을 위해 인덱스 증가
      currentIndex = (currentIndex + 1) % subs.length;
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

$('.title-box a').click(function(){
  tabName1 = $(this).data('tab');
  $(this).addClass('on').siblings().removeClass('on')

  $(tabName1).addClass('active').siblings().removeClass('active');
})
$('.tab-item a').click(function(e){
  e.preventDefault();
  tabName2 = $(this).data('tab');
  $(this).parent().addClass('on').siblings().removeClass('on')

  $(tabName2).addClass('on').siblings().removeClass('on');
})


$(".recommend-area .play").on("click",function(){
  $(".stop").css("display","inline-block")
  $(this).css("display","none")
})

$(".recommend-area .stop").on("click",function(){
  $(".play").css("display","inline-block")
  $(this).css("display","none")
})





$(window).on("scroll", function() {
  var footerOffset = $(".footer").offset().top;
  var windowScrollTop = $(this).scrollTop();
  var windowHeight = $(window).height();

  
  var footerVisible = (footerOffset < windowScrollTop + windowHeight);

  
  if (footerVisible) {
    $(".footer-fixed").addClass("fix");
  } else {
    $(".footer-fixed").removeClass("fix");
  }
});

$(".footer-fixed .top").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, "slow"); 
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


// $(".new-product .tab-list .tab-item").on("click", function() {
  
//   $(".new-product .tab-list .tab-item").removeClass("on");
  
  
//   $(this).addClass("on");
// });




$(".footer .link-join").on("click", function() {

  $(this).toggleClass("active");


  $(".open-list").slideToggle();
});


$(".market").on("click", function() {
  alert("로그인 후 이용 부탁드립니다.");
});