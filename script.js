let qty= document.querySelector("#qtyInput");
function decrement(){
    if(qty.value<=1){
        qty.value=1;
    }else{
        qty.value=parseInt(qty.value)-1;
    }
}
function increment(){
    qty.value=parseInt(qty.value)+1;
}
function addcart()

{
    var h5= document.getElementById("result");
   h5.textContent="Embrace Sideboard with Color Yellow and Size added to cart";
   h5.style.backgroundColor = "rgb(118, 244, 118)";
   h5.style.borderRadius="5px";
   h5.style.padding="10px";
}
