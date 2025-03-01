$(document).ready(function(){
   $("#menueitem").click(function(){
    if( $(".sidebar").css("right") !="0px"){
        $(".sidebar").animate({
            right:"0"
        },200)
        $(".page").addClass("overlay")
        // $("#menueitem").css({
        //     backgroundColor:"#ccc"
        // }) 
    }
    
   })
   $(".cl").click(function(){
    $(this).next().toggle()
    $(".iconx").toggleClass("fa-chevron-down fa-chevron-left")
   
   })
   $(".left .fa-search").click(function(){
    $(this).toggleClass("searchBorder").css({backgroundColor:"#888"})
    $(".searchInput1").toggleClass("searchInput")
   })
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
if(e.target.id != "searchBorder"){    // نضيف شرط لو بتحتووي
    search.classList.remove("searchInput")
    searchIcon.classList.remove("searchBorder")

searchIcon.style.backgroundColor="#444"
}
}


)


