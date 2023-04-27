$(function () {
    $("#navi").load("./navbar.html");
    // $("#card_bank").load("./card.html");
});

const add_order = document.getElementById("gP_Order");
            add_order.addEventListener('click',function(){
            
                window.location.href = "./card.html"
            })