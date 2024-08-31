 function showCartItem(arr){
    document.querySelector('#emptyCartBG').classList.add('d-none')
    arr.forEach(element => {
        document.getElementById('cartItems').innerHTML+=`
        <div class="col">
                    <h6>${element.eleName}</h6>
                    <div class="cost  row ">
                        <div class="stock_number  col-2">1x</div>
                        <div class="stock_cost    col-2">${element.elePrice}</div>
                        <div class="total_cost    col-2">$ ${element.elePrice}*${element.eleNumber}</div>

                    </div>
                    <br>

        
        `
    });
}


export {showCartItem} ;