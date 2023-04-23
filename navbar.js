function search(){
    let filter = document.getElementById ('find').ariaValueMax.toUpperCase();

    let item = document.querySelectorAll('.product');

    let l = document.getElementsByTagName('h3');

    for(var i = o;i<=l.length; i++){
        let a=item[i].getElementsByTagName('h3')[0];

        let value=a.innerHTML || a.innerText || a.textContent;


        if (value.toLocaleUpperCase().indexOf(filter)> -1 ){
            item[i].style.display = "";

        }
        else 
    }
}



