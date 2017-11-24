
$(document).ready(function () {
   var modalLink = $(".modal__link")


   modalLink.on("click", function () {
     console.log("clicked");

     var modal =  $(this).next()
     console.log(modal);
     modal.removeClass("hide");


   })


   var modal = modalLink.next()
   console.log(modal);

   modal.on("click", function () {

     $(this).addClass("hide")
   }).children.next().click(function(e) {
  return false;});


})






//
// $(document).ready(function () {
//       $(".modal__link").on("click", function () {
//           console.log("clicked");
//
//           var modal =  $(this).next()
//
//           modal.removeClass("hide");
//       });
// });
//
// var modal = document.getElementById('myModal');
//
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.classList.add("hide");
//     }
// }
