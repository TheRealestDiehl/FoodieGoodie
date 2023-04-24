

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

        var selected_elem =selected.parentElement.parentElement.parentElement.childNodes[1];

        selected_elem.innerText = selected.textContent;
    })
})

var custom_value = document.querySelectorAll("#quantity");
// console.log(custom_value[0]);
custom_value.forEach(function(cus_val){
  cus_val.addEventListener('input',function(){
    var val = parseFloat(cus_val.value);
    if (val > 20){
        cus_val.value = 20;
    }else if (val < 1){
      cus_val.value = 1
    }
})
})