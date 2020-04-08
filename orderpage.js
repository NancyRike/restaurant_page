var menu = []
// var plusItems = document.querySelector("#plusItems")
// var foodItems = document.querySelector("#foodName")
// var orderlist = document.querySelector("#orderlist")
var plusItems = document.getElementById("plusItems")
var foodItems = document.getElementById("foodName")
var orderlist = document.getElementById("orderlist")
let i=0; 
plusItems.addEventListener("submit", function(event){
    event.preventDefault()
    if(foodItems.value !== null && foodItems.value !== ""){
        i++;
        var item = `<div id ="${i}" class="">${foodItems.value} <button id="${i+"-button"}" class = "cancel"><i class="fa fa-window-close"></i></button> </div>`
        orderlist.insertAdjacentHTML("beforeend",item)
        menu.push(foodItems.value)
 
let cancel = document.getElementById(i+"-button");
      if (!cancel) return;
      let n = document.createTextNode("")
      
        cancel.addEventListener("click", function(){
            orderlist.replaceChild(n, orderlist.childNodes[Number(cancel.id.replace('-button', ''))-1])
            
        });
       

    }
    foodItems.value = null
        console.log (menu)
}
)


