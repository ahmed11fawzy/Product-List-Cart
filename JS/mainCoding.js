let dessertArr=[
    {
       "image": {
            "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
            "mobile": "./assets/images/image-waffle-mobile.jpg",
            "tablet": "./assets/images/image-waffle-tablet.jpg",
            "desktop": "./assets/images/image-waffle-desktop.jpg"
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "image": {
            "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
            "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
            "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
            "mobile": "./assets/images/image-macaron-mobile.jpg",
            "tablet": "./assets/images/image-macaron-tablet.jpg",
            "desktop": "./assets/images/image-macaron-desktop.jpg"
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
            "mobile": "./assets/images/image-tiramisu-mobile.jpg",
            "tablet": "./assets/images/image-tiramisu-tablet.jpg",
            "desktop": "./assets/images/image-tiramisu-desktop.jpg"
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
            "mobile": "./assets/images/image-baklava-mobile.jpg",
            "tablet": "./assets/images/image-baklava-tablet.jpg",
            "desktop": "./assets/images/image-baklava-desktop.jpg"
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
            "mobile": "./assets/images/image-meringue-mobile.jpg",
            "tablet": "./assets/images/image-meringue-tablet.jpg",
            "desktop": "./assets/images/image-meringue-desktop.jpg"
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
            "mobile": "./assets/images/image-cake-mobile.jpg",
            "tablet": "./assets/images/image-cake-tablet.jpg",
            "desktop": "./assets/images/image-cake-desktop.jpg"
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
            "mobile": "./assets/images/image-brownie-mobile.jpg",
            "tablet": "./assets/images/image-brownie-tablet.jpg",
            "desktop": "./assets/images/image-brownie-desktop.jpg"
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "image": {
            "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
            "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
            "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
            "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]
let addToCart;

dessertArr.forEach(element => {
    
  document.getElementById("item_list").innerHTML +=  `<div class=" col-md-6 col-lg-4 col-sm-6 ">
      <div class="card border border-0 ">
        <div class="position-relative">
          <img src="${element.image.desktop}" class="card-img-top  " alt="...">
          <div class="overContent position-absolute top-100 start-50 translate-middle bg-info rounded rounded-pill w-75 text-center d-flex justify-content-center align-items-center  " >
              <div class="cart-logo  " ><i class="fa-solid fa-cart-plus"></i> Add To cart </div>
              <div class="add_toCart position-absolute top-0 w-100 text-center rounded rounded-pill  h-100 d-flex align-items-center justify-content-center " >
              <i  class="fa-regular fa-plus col-5 addToCart  "></i>
              <i  class="fa-solid fa-circle-minus col-5 removeFromCart  "></i>
              </div>
          </div>
        </div>
            <div class="card-body mt-3">
                <p class="card-text mb-0 text-secondary fs-6  ">${element.category}.</p>
                <h5 class="card-title mt-0 ">${element.name.split(' ').slice(0, 3).join(" ")} </h5>
                <p class="price">${element.price}$ </p>  
                </div>
      </div
    </div>
    `;

    
          
});

// ! select all ele with class 'addTo Cart '

let addIcons=document.querySelectorAll('.addToCart')
let removeIcons=document.querySelectorAll('.removeFromCart')
let iconList=[];
let removeList=[];
iconList=Array.from(addIcons);
let removeFromCart=Array.from(removeIcons);

// console.log(removeFromCart);

let cartItem=[];
let cartUniqItems=[];
let box=[];
let NOCI=0; // NOCI => number of cart item
document.querySelector('.card_header > span').innerText=`(${NOCI})`

// ! parsing ele name and price to object 

function parsingToObject (name,price,image){
    let eleName;
    let elePrice;
    let eleNum;
    let eleImage;
    eleName =name ;
    elePrice =price;
    eleNum=1; 
    eleImage=image;
    return {eleName,elePrice,eleNum,eleImage};
}

// ? adding selected ele to cart 

iconList.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        
        
        let itemNumber =iconList.indexOf(e.target);
        // console.log(itemNumber);
        // console.log(dessertArr[itemNumber].name);

        let cartElement=new parsingToObject(dessertArr[itemNumber].name,dessertArr[itemNumber].price,dessertArr[itemNumber].image.thumbnail)
        
        
        
        console.log(cartElement);
        box.push(cartElement);
        console.log('this is box arr',box);
        addTooCart(cartElement);

        NOCI=box.length;
        document.querySelector('.card_header > span').innerText=`(${NOCI})`

        showCartItem();
        
        

    })
})


let matEle;

function addTooCart(ele){

    if(cartItem.length > 0){
        if(box.includes(ele)){
            
            let ci=box.filter(item=>item.name==ele.name);
        
            // ele.eleNum=ci.length;
            if(cartItem.find(item=>item.eleName==ele.eleName))
            {
                cartItem.forEach(e=>{
                    if(ele.eleName==e.eleName){
                        e.eleNum++;
                        ci=[];
                    }
                    
                })
            }
            else{
                cartItem.push(ele)
            }
            console.log('the unique item  ',cartItem);
        }
        else
        {
            box.push(ele);
        }            
        
    
    }    
    else{
        cartItem.push(ele)
        console.log('new element was added');
    }

}

// ? removing element from the cart 

function removeElemFromCart(ele){
    if(cartItem.find((item)=>item.eleName==ele.eleName)){
        NOCI--;
        console.log('the number of cart item is : ', NOCI);
        cartItem.forEach(item=>{
            if(item.eleName==ele.eleName){
                if(item.eleNum > 1){
                    cartItem.forEach(e=>{
                        if(e.eleName==ele.eleName){
                            e.eleNum--;
                        }
                    })
                    console.log('the cartItems after remove',cartItem)
                }
                else{
                    cartItem=cartItem.filter(e=>e.eleName!==ele.eleName); 
                    console.log(' there is only one element and i removed it  ',cartItem)       
                    showCartItem();
                    totalSalary.innerText=`$ 0`;
                }

            }
            else{
                console.log('some thing wrong ')
            }

        
            showCartItem();
        document.querySelector('.card_header > span').innerText=`(${NOCI})`;


        })
        
       
    }
    else{
        console.log('this element doesn\'t exist in the cart ')
    }
}




removeFromCart.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        console.log(e.target)
        let removedItemNumber =removeFromCart.indexOf(e.target);
         
        // console.log(removedItemNumber);
        // console.log(dessertArr[removedItemNumber].name);

        let removedElement=new parsingToObject(dessertArr[removedItemNumber].name,dessertArr[removedItemNumber].price)
        
        removeElemFromCart(removedElement);

    })


})







//document.querySelector('#emptyCartBG').classList.add('d-none');


// ! represent cart Items

let shoppingCart=document.querySelector('#cartItems');
let totalSalary=document.querySelector('#Total_Salary');
const cartFooter=document.querySelector('#cart_footer');
let orderSalary=0;
let closeIcons = [];

function showCartItem(){
    if(cartItem.length>0){
        cartFooter.classList.remove('d-none');
        document.querySelector('#emptyCartBG').classList.add('d-none');
        shoppingCart.innerHTML='';

    cartItem.forEach(element => {
        shoppingCart.innerHTML +=`
        <div class="col pt-4 ">
                    <h6>${element.eleName}</h6>
                    <div class="cost  row gx-0 ">
                        <div class="stock_number col-1">${element.eleNum}x</div>
                        <div class="stock_cost   text-center col-2">@$ ${element.elePrice}</div>
                        <div class="total_cost   col-2">$ ${element.elePrice*element.eleNum}</div>
                        <div id='close_icon' class="  ms-auto d-flex justify-content-center align-items-center  col-1"> 
                            <i class="fa-regular fa-circle-xmark  close "></i>

                        </div> 
                    </div>
                     

        </div>
        `
        
        closeIcons=Array.from(document.querySelectorAll('.close'));
        
        console.log(closeIcons);    
        redOfCartItem();
        calcSalary();
    

    });


    }
    else{
        box=[];
        shoppingCart.innerHTML='';
        document.querySelector('#emptyCartBG').classList.remove('d-none');
        cartFooter.classList.add('d-none');

    }
    
    
}


function calcSalary(){
    orderSalary=0;
    if(cartItem.length>=1){
        cartItem.forEach(element => {
            orderSalary+=element.elePrice*element.eleNum;
        });
        totalSalary.innerText=`$ ${orderSalary}`;
    }
    else{
        totalSalary.innerText=`$ 0`;
    }
}
   


// ! get redOf cart item by clicking on close icon


function redOfCartItem(){
    closeIcons.forEach((elem)=>{
        elem.addEventListener('click',(e)=>{
            console.log(e.target)
            let removedItemNumber =closeIcons.indexOf(e.target);
            
            NOCI-=cartItem[removedItemNumber].eleNum;
            console.log('the number of cart item is : ', NOCI);
            document.querySelector('.card_header > span').innerText=`(${NOCI})`;

            cartItem=cartItem.filter(e=>e.eleName!==cartItem[removedItemNumber].eleName);

            console.log('after close'+cartItem);
            showCartItem();
            calcSalary();
        })
    
    
    })
}




// ! show  confirmed order  

const confirmButton=document.querySelector('#ConfirmButton');

confirmButton.addEventListener('click',()=>{

    cartItem.forEach(item=>{
        document.querySelector('#kosmTerstegen').innerHTML+=`<div class="col my-3 cartItemList">
                            <div class="row  ">
                                <div class="col-md-2  ">
                                    <img src="${item.eleImage}" class="img-fluid rounded rounded-2 " alt="" srcset="">
                                </div>
                                <div class="col-md-6 ">
                                    <h6>${item.eleName}</h6>
                                    <div class="row " > 
                                        <p class="col-3 stock_number ">${item.eleNum} <span>x</span> </p>
                                        <p class="col-4">@ ${item.elePrice} </p>
                                    </div>
                                    
                                </div>
                                <div class="col-md-4    d-flex align-items-center justify-content-end ">
                                    <p class=" fw-bold ">
                                        ${item.elePrice*item.eleNum}$
                                    </p>
                                    
                                </div>
                            </div>
                            
                        </div>`
    })
    calcConfirmedSalary();
    document.querySelector('#ConfirmedCart').classList.remove('d-none');


})



document.querySelector('#endOrderButton').addEventListener('click',e=>{
    NOCI=0;
    document.querySelector('#ConfirmedCart').classList.add('d-none');
    cartItem=[];
    showCartItem();
    document.querySelector('.card_header > span').innerText=`(${NOCI})`;
    document.querySelector('#kosmTerstegen').innerHTML=``;
})


const finalSalary =document.querySelector('#confirmedSalary')
function calcConfirmedSalary(){
    let confirmedSalary=cartItem.reduce((total,element)=>total+element.elePrice*element.eleNum,0)    
    finalSalary.innerText=`$ ${confirmedSalary}`




}


document.querySelector('#exit').addEventListener('click',e=>{
    document.querySelector('#ConfirmedCart').classList.add('d-none');
    document.querySelector('#kosmTerstegen').innerHTML=``;

})


/* function calcSalary() {
    const orderSalary = cartItem.reduce((total, item) => total + item.elePrice * item.eleNum, 0);
    totalSalary.innerText = `$ ${orderSalary.toFixed(2)}`;
} */

// tuple 
/*
let tupleArray=[];
tupleArray.push('a7a');
tupleArray.push(55);
tupleArray.push({"0":55});
tupleArray.push(['est',33,'est']);



console.log(tupleArray);
*/




/* `
<div class="col">
                    <h6>${dessertArr[itemNumber].name}</h6>
                    <div class="cost  row ">
                        <div class="stock_number  col-2">1x</div>
                        <div class="stock_cost    col-2">@ $dessertArr[itemNumber].price</div>
                        <div class="total_cost    col-2">$ $dessertArr[itemNumber].price</div>

                    </div>
                    <br>

` */









// ! empty cart design
/*  
<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15"/><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"/><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"/><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16"/><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"/><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"/><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"/><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"/></svg>

*/


