$(document).ready(function(){
    $("footer div").html('This website was last modifed on:'+ document.lastModified);
    $("[href='#']").hover(function(){
        alert("Concerts sell out quickly so act fast!");
    })
});