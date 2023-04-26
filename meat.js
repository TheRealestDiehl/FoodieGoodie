
  
  $(function(){
    $("#navi").load("./navbar.html"); 
    $("#list").load("./list.html",function(){
      
    
    var images = document.getElementsByTagName('img');
    var images = document.getElementsByClassName("card-img-top");
    images[0].src = "./src/public/meat/beef.png";
    images[1].src = "./src/public/meat/chicken.png";
    images[2].src = "./src/public/meat/turkey.jpeg";
    images[3].src = "./src/public/meat/pork.jpeg";
    images[4].src = "./src/public/meat/mutton.jpeg";
    images[5].src = "./src/public/meat/venison.jpeg";

    var meat_name  = document.getElementsByClassName("card-title");
    meat_name[0].childNodes[0].nodeValue = "Beef";
    meat_name[1].childNodes[0].nodeValue = "Chicken";
    meat_name[2].childNodes[0].nodeValue = "Turkey";
    meat_name[3].childNodes[0].nodeValue = "Pork";
    meat_name[4].childNodes[0].nodeValue = "Mutton";
    meat_name[5].childNodes[0].nodeValue = "Venison";


    var textsss = document.getElementsByClassName("side_1");
    textsss[0].childNodes[0].nodeValue = "$9.99/lb";
    textsss[1].childNodes[0].nodeValue = "$8.99/lb";
    textsss[2].childNodes[0].nodeValue = "$8.99/lb";
    textsss[3].childNodes[0].nodeValue = "$10.99/lb";
    textsss[4].childNodes[0].nodeValue = "$13.99/lb";
    textsss[5].childNodes[0].nodeValue = "$15.99/lb";

     //removing the customizing dropdown list
    // var customize = document.querySelectorAll(".dropdown");
    // customize.forEach(function(custo){
    //     custo.remove();
    // })

    });
    $(document).on('input', '#myInput', function() {
      var query = $(this).val().toLowerCase();
      $('.card-title').each(function() {
        var text = $(this).text().toLowerCase();
        if (text.indexOf(query) === -1) {
          $(this).closest('.contains').hide();
        } else {
          $(this).closest('.contains').show();
        }
      });
    });

  });



