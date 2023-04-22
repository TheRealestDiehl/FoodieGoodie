
$(function(){
    $("#navi").load("./navbar.html"); 
  });

  

  $(function(){
    $("#list").load("./list.html")
  })


  window.onload = function(){
    var images = document.getElementsByTagName('img');
    var images = document.getElementsByClassName("card-img-top");
    images[0].src = "./src/public/vegetables/brocolli.jpeg";
    images[1].src = "./src/public/vegetables/kale.jpeg";
    images[2].src = "./src/public/vegetables/spinach.jpeg";
    images[3].src = "./src/public/vegetables/carrot.jpeg";
    images[4].src = "./src/public/vegetables/bell pepper.jpeg";
    images[5].src = "./src/public/vegetables/peas.jpeg";

    // var textss = document.querySelector(".side_1");
    // var priceNode = textss.childNodes[0];
    // priceNode.nodeValue = "hahah";
    // var priceNodes = textss.childNodes[1];
    // priceNodes.nodeValue = "hahazh";

    var meat_name  = document.getElementsByClassName("card-title");
    meat_name[0].childNodes[0].nodeValue = "Broccoli";
    meat_name[1].childNodes[0].nodeValue = "Kale";
    meat_name[2].childNodes[0].nodeValue = "Spinach";
    meat_name[3].childNodes[0].nodeValue = "Carrots";
    meat_name[4].childNodes[0].nodeValue = "Bell Pepper";
    meat_name[5].childNodes[0].nodeValue = "Peas";




    var textsss = document.getElementsByClassName("side_1");
    textsss[0].childNodes[0].nodeValue = "$3.99/lb";
    textsss[1].childNodes[0].nodeValue = "$2.29/lb";
    textsss[2].childNodes[0].nodeValue = "$3.19/lb";
    textsss[3].childNodes[0].nodeValue = "$1.69/lb";
    textsss[4].childNodes[0].nodeValue = "$3.79/lb";
    textsss[5].childNodes[0].nodeValue = "$1.29/lb";
   

  }



