
var Swraa=Array.from (document.querySelectorAll(".swra"));
var Main =document.querySelector(".Main");

for(var i=0; i<Swraa.length; i++)
{
     
 Swraa[i].addEventListener("click",function(e){
   var  imgsc = e.target.getAttribute("src")
   Main.setAttribute ("src",imgsc)
    })
}

   







// Swraa.addEventListener ("click",function(){
//     console.log("hii");
   // })
 



// Swraa.forEach(function(element) {
//   element.addEventListener("click", function() {
//     console.log("hii");
//   });
// });


















