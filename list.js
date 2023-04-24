

var add_Order = document.querySelectorAll(".add_to_order");
      add_Order.forEach(function(btn){
        btn.addEventListener("click",function(event){ 
          event.preventDefault();
          if(confirm("Are you sure?")){
            console.log("hahah");
            var check = document.querySelectorAll(".card-title");
            check.forEach(function(card_checks){
              console.log(card_checks);
            })
          }
        })
      })

var select = document.querySelectorAll(".select");
select.forEach(function(selected){
    selected.addEventListener('click',function(event){
        event.preventDefault();
        // console.log(selected.textContent)
        var selected_elem =selected.parentElement.parentElement.parentElement.childNodes[1];
        // console.log(selected_elem.innerText);
        selected_elem.innerText = selected.textContent;
    })
})

// var custom_value = document.querySelectorAll("#quantity");
// console.log(custom_value[0]);
// custom_value[0].addEventListener('input',function(){
//     var val = parseFloat(custom_value[0].value);
//     console.log(val)
//     if (val > 20){
//         val = 20;
//     }else if(val < 1){
//         val = 1;
//     }
//     // console.log(val);
// })

// custom_value.forEach(function(val){
//     console.log(custom_value.value);
// })