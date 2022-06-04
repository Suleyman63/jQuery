// $(function () {
//   $(".text").append("orhan");
//   $("button").css({ color: "red" });
//   $("li:even").css({ color: "purple" });
//   $("li:odd").css({ color: "blue" });
//   $("li:nth-child(3").css({ color: "green" });
//   $("button:first-child").css({ color: "green" });
//   $("button:last-child").css({ color: "blue" });
// });

// var text = $(".text");
// $(function () {
//   $(".hide").click(function () {
//     text.hide(1000);
//   });
//   $(".show").click(function () {
//     text.show(1000);
//   });
//   $(".show").click(function () {
//     text.show();
//   });

//   $(".toggle").click(function () {
//     text.toggle(500);
//   });
//   $(".open-close").click(function () {
//     text.slideUp(500).slideDown(500);
//   });
//   $(".add").click(function () {
//     text.append("ibrahim");
//     text.prepend("orhan");
//   });

//   $(".delete").click(function () {
//     $("li:first-child").remove();
//   });
//   $(".add-class").click(function () {
//     text.addClass("ekle");
//   });
//   $(".delete").click(function () {
//     text.removeClass("ekle");
//   });
//   $(".change-class").click(function () {
//     text.toggleClass("ekle");
//   });
// });

// var kutu1 = $(".box1");
// var kutu2 = $(".box2");
// var pozition1 = kutu1.position();
// var left1 = pozition1.left;
// var pozition2 = kutu2.position();
// var left2 = pozition2.left;

// $(function () {
//   $(".anim-start").click(function () {
//     kutu1.css({ position: "relative" });
//     while (left1 <= 1100) {
//       kutu1.animate({
//         left: "+=20",
//       });
//       left1 += 50;
//     }
//     kutu2.css({ position: "relative" });
//     while (left2 <= 1100) {
//       kutu2.animate({
//         left: "+=20",
//       });
//       left2 += 50;
//     }
//   });
// });

// var time = setInterval(kac, 1000);

// function kac() {
//   var d = new Date();
//   var hour = d.getHours();
//   var minute = d.getMinutes();
//   var second = d.getSeconds();

//   $(".yuvarlak-saat").text(hour);
//   $(".yuvarlak-dakika").text(minute);
//   $(".yuvarlak-saniye").text(second);
// }
