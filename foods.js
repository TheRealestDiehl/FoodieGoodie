$(function(){
    $("#navi").load("./navbar.html"); 
  });


  $(function(){
    $("#list").load("./list.html",function(){
      
    
    var images = document.getElementsByTagName('img');
    var images = document.getElementsByClassName("card-img-top");
    images[0].src = "./src/public/foods/egg_sandwitch.jpeg";
    images[1].src = "./src/public/foods/mac_cheese.jpeg";
    images[2].src = "./src/public/foods/chicken_burger.jpeg";
    images[3].src = "./src/public/foods/fried_dumplings.jpeg";
    images[4].src = "./src/public/foods/beef_spaghetti.jpeg";
    images[5].src = "./src/public/foods/butter_chicken.jpeg";

    var meat_name  = document.getElementsByClassName("card-title");
    meat_name[0].childNodes[0].nodeValue = "Egg Sandwich";
    meat_name[1].childNodes[0].nodeValue = "Mac & Cheese";
    meat_name[2].childNodes[0].nodeValue = "Chichek Burger";
    meat_name[3].childNodes[0].nodeValue = "Fried Chicken Dumplings";
    meat_name[4].childNodes[0].nodeValue = "Beef Spaghetti";
    meat_name[5].childNodes[0].nodeValue = "Butter Chicken";




    var textsss = document.getElementsByClassName("side_1");
    textsss[0].childNodes[0].nodeValue = "$5.99";
    textsss[1].childNodes[0].nodeValue = "$4.99";
    textsss[2].childNodes[0].nodeValue = "$8.99";
    textsss[3].childNodes[0].nodeValue = "$10.99";
    textsss[4].childNodes[0].nodeValue = "$13.99";
    textsss[5].childNodes[0].nodeValue = "$15.99";

   

    })
  });