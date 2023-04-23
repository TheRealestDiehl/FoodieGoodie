

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
