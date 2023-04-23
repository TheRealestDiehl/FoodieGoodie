

$(function(){
    $("#navi").load("./navbar.html"); 
  });

var loadedHtml;

  $(function(){
    $("#list").load("./list.html",function(){
      

    var images = document.getElementsByTagName('img');
    var images = document.getElementsByClassName("card-img-top");
    images[0].src = "./src/public/fruits/banana.jpeg";
    images[1].src = "./src/public/fruits/strawberry.jpeg";
    images[2].src = "./src/public/fruits/Grape.jpeg";
    images[3].src = "./src/public/fruits/Apple.jpeg";
    images[4].src = "./src/public/fruits/Watermelon.jpeg";
    images[5].src = "./src/public/fruits/oranges.jpeg";


    var meat_name  = document.getElementsByClassName("card-title");
    meat_name[0].childNodes[0].nodeValue = "Banana";
    meat_name[1].childNodes[0].nodeValue = "Strawberry";
    meat_name[2].childNodes[0].nodeValue = "Grape";
    meat_name[3].childNodes[0].nodeValue = "Apple";
    meat_name[4].childNodes[0].nodeValue = "Watermelon";
    meat_name[5].childNodes[0].nodeValue = "Orange";

    var textsss = document.getElementsByClassName("side_1");
    textsss[0].childNodes[0].nodeValue = "$1.19/lb";
    textsss[1].childNodes[0].nodeValue = "$5.29/lb";
    textsss[2].childNodes[0].nodeValue = "$2.59/lb";
    textsss[3].childNodes[0].nodeValue = "$3.99/lb";
    textsss[4].childNodes[0].nodeValue = "$5.49/lb";
    textsss[5].childNodes[0].nodeValue = "$3.78/lb";

    //removing the customizing dropdown list
    var customize = document.querySelectorAll(".dropdown");
    customize.forEach(function(custo){
        custo.remove();
    });

    })
  });

