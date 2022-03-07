function vuPlans() {
    return `<div class = 'plans'>
    <div class="box_of_plans">
      <div><h2 style="font-weight: 500; margin-bottom: 0;"> 1 MONTH </h2>SUBSCRIPTION</div>
      <div> <h2 style="font-weight: 500; margin-bottom: 0;">RS. 599.00</h2>  /per month </div>
      <div ><p style="color: #e5b95f; margin-bottom: 0;">ONE TIME PAYMENT</p><h2 style="font-weight: 500">RS. 599.00</h2> </div> 
      <div>
       <a href="../addToCart/addToCart.html"><button onclick="addToCart(599)">ADD TO CART</button></a> 
      </div>
    </div>
    <div class="box_of_plans">
      <div><h2 style="font-weight: 500; margin-bottom: 0;"> 3 MONTHS </h2>SUBSCRIPTION</div>
      <div> <h2 style="font-weight: 500; margin-bottom: 0;">RS. 533.00</h2>  /per month </div>
      <div ><p style="color: #e5b95f; margin-bottom: 0;">ONE TIME PAYMENT (11% OFF)</p><h2 style="font-weight: 500">RS. 1,599.00 <s>Rs. 1,797</s> </h2></div> 
      <div>
        <a href="../addToCart/addToCart.html"><button onclick="addToCart(1599)">ADD TO CART</button></a>
        
      </div>
    </div>
  </div>`
}

export default vuPlans;