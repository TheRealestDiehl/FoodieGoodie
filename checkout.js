$(function(){
    $("#navi").load("./navbar.html");
    $("#checklist").load("./checklist.html",function(){

      var images = document.getElementsByTagName('img');
      var images = document.getElementsByClassName("card-img-top");
      images[0].src = "./src/public/meat/beef.png";
      images[1].src = "./src/public/fruits/strawberry.jpeg";
      images[2].src = "./src/public/vegetables/spinach.jpeg";
  
      var meat_name  = document.getElementsByClassName("card-title");
      meat_name[0].childNodes[0].nodeValue = "Beef";
      meat_name[1].childNodes[0].nodeValue = "Strawberry";
      meat_name[2].childNodes[0].nodeValue = "Spinach";
  
  
      var textsss = document.getElementsByClassName("side_1");
      textsss[0].childNodes[0].nodeValue = "$9.99/lb";
      textsss[1].childNodes[0].nodeValue = "$5.29/lb";
      textsss[2].childNodes[0].nodeValue = "$3.19";
      
      var customize = document.querySelectorAll(".dropdown");
      customize.forEach(function (custo) {
        custo.remove();
      });
    });

//For the Food boxes on the checkout page
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
