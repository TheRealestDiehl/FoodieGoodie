
$(function(){
    $("#navi").load("./navbar.html"); 
  });

  
  $(function(){
    $("#list").load("./list.html")
  })


  // window.onload = function(){
  //   var images = document.getElementsByTagName('img');
  //   images[0].src = "./src/public/minions.jpeg";
  //   images[1].src = "./src/public/minions.jpeg";
  //   images[2].src = "./src/public/minions.jpeg";
  //   images[3].src = "./src/public/minions.jpeg";
  //   images[4].src = "./src/public/minions.jpeg";
  //   images[5].src = "./src/public/minions.jpeg";

  // }

  window.onload = function(){
    var images = document.getElementsByTagName('img');
    var images = document.getElementsByClassName("card-img-top");
    images[0].src = "./src/public/meat/beef.png";
    images[1].src = "./src/public/meat/chicken.png";
    images[2].src = "./src/public/meat/turkey.jpeg";
    images[3].src = "./src/public/meat/pork.jpeg";
    images[4].src = "./src/public/meat/mutton.jpeg";
    images[5].src = "./src/public//meat/venison.jpeg";

    // var textss = document.querySelector(".side_1");
    // var priceNode = textss.childNodes[0];
    // priceNode.nodeValue = "hahah";
    // var priceNodes = textss.childNodes[1];
    // priceNodes.nodeValue = "hahazh";

    var meat_name  = document.getElementsByClassName("card-title");
    meat_name[0].childNodes[0].nodeValue = "Beef";
    meat_name[1].childNodes[0].nodeValue = "Chicken";
    meat_name[2].childNodes[0].nodeValue = "Turkey";
    meat_name[3].childNodes[0].nodeValue = "Pork";
    meat_name[4].childNodes[0].nodeValue = "Mutton";
    meat_name[5].childNodes[0].nodeValue = "Venison";




    var textsss = document.getElementsByClassName("side_1");
    textsss[0].childNodes[0].nodeValue = "$9.99";
    textsss[1].childNodes[0].nodeValue = "$8.99";
    textsss[2].childNodes[0].nodeValue = "$8.99";
    textsss[3].childNodes[0].nodeValue = "$10.99";
    textsss[4].childNodes[0].nodeValue = "$13.99";
    textsss[5].childNodes[0].nodeValue = "$15.99";
   

  }

