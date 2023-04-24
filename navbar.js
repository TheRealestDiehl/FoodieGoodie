function search(){
    let filter = document.getElementById ('find').ariaValueMax.toUpperCase();

    let item = document.querySelectorAll('.product');

    let l = document.getElementsByTagName('h3');

    for(var i = o;i<=l.length; i++){
        let a=item[i].getElementsByTagName('h3')[0];

        let value=a.innerHTML || a.innerText || a.textContent;


        if (value.toLocaleUpperCase().indexOf(filter)> -1 ){
            item[i].style.display = "";

        }else{
            item[i].style.display = "none";
        }

    
}

}




// function myFunction() {
//     // Declare variables
//     var input, filter, ul, li, a, i, txtValue;
//     input = document.getElementById('myInput');
//     filter = input.value.toUpperCase();
//     ul = document.getElementById("myUL");
//     li = ul.getElementsByTagName('div');
  
//     // Loop through all list items, and hide those who don't match the search query
//     for (i = 0; i < li.length; i++) {
//       a = li[i].getElementsByTagName("a")[0];
//       txtValue = a.textContent || a.innerText;
//       if (txtValue.toUpperCase().indexOf(filter) > -1) {
//         li[i].style.display = "";
//       } else {
//         li[i].style.display = "none";
//       }
//     }
//   }