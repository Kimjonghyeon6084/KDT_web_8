//팁
//1. 모든 버튼에 orange 클래스 제거
//2. 클릭한 버튼에 orange 클래스 추가
//3. 모든 div 안보이게
//4. 원하는 div만 보이게

//product 버튼 눌렀을 때
for (let i = 0; i < 3; i++) {
  $(".tab-button")
    .eq(i)
    .on("click", function () {
      $(".tab-button").removeClass("orange");
      $(".tab-button").eq(i).addClass("orange");
      $(".tab-content").removeClass("show");
      $(".tab-content").eq(i).addClass("show");
    });
}

// //information 버튼 눌렀을 때
// $(".tab-button")
//   .eq(1)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(1).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(1).addClass("show");
//   });

// //shipping 버튼 눌렀을 때
// $(".tab-button")
//   .eq(2)
//   .on("click", function () {
//     $(".tab-button").removeClass("orange");
//     $(".tab-button").eq(2).addClass("orange");
//     $(".tab-content").removeClass("show");
//     $(".tab-content").eq(2).addClass("show");
//   });
