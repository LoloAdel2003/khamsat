$(document).ready(function(){
    // sidebar
    $("#menueitem").click(function(){
     if( $(".sidebar").css("right") !="0px"){
         $(".sidebar").animate({
             right:"0"
         },200)
         $(".page").addClass("overlay")
         
     }
     else {
        $(".page").removeClass("overlay")
     }
     
    })
 
 //    })
 //    search input 
    $(".left .fa-search").click(function(){
     $(this).toggleClass("bg-gray bg-dark");
     $(this).toggleClass("searchBorder")
     $(".searchInput1").toggleClass("searchInput")
    })
 
 //    section five 
 $(".inner-section").click(function(){
     if($(this).find("p").css("display")=="none"){
     $(this).find("span").css("color","#52b035")}
     else{
         $(this).find("span").css("color","#333")
     }
     $(this).find("p").slideToggle(500)
     $(this).find("i").toggleClass("fa-chevron-left fa-chevron-down")
 })
 //sidebar
 $(".cl").click(function(){
     if($(this).find("span").css("color")=="#444"){
         $(this).find("span").css("color","#52b035")}
         else{
             $(this).find("span").css("color","#444")}
             $(this).next().slideToggle(200)
             $(this).find("i:last-child").toggleClass("fa-chevron-left fa-chevron-down")
 
 
 
          
 })

//  $('*').click(function(){
//     if($(this).id != "searchBorder" &&$(this).id != "searchInput1"  ){
//       $("#searchInput1").removeClass("searchInput") 
//       $("#searchInput1").removeClass(searchInput)  
 
//     }
//  })
 })
 
 let sidebar=document.getElementById("sidebar")
 let page=document.getElementById("page")
 let search=document.getElementById("searchInput1")
 let searchIcon=document.getElementById("searchBorder")
 
 
 window.addEventListener("click",function(e){
 if(sidebar.style.right=="0px" && e.target.id !="searchplace" && !(e.target.classList.contains("xxxx") )){   //عند الضغط على التصنيفات
  
         sidebar.style.right="-255px"
         page.classList.remove("overlay")
     
    
 }
 if(e.target.id != "searchBorder" && e.target.id != "searchInput1"){    // نضيف شرط لو بتحتووي
     search.classList.remove("searchInput")
     searchIcon.classList.remove("searchBorder")
     searchIcon.classList.remove("bg-gray")

     searchIcon.classList.add("bg-dark ")
//  searchIcon.styl/e.backgroundColor
 }
 }
 
 
 )
 
 
 