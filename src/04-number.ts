(() => {

  let productPrice = 100;
  console.log("productPrice: ", productPrice);

  let customerAge: number = 28;
  customerAge += 1;
  console.log("customerAge: ", customerAge);

  let productInStock: number;

  console.log("productInStock: ", productInStock);

  if(productInStock > 10){
    console.log("is greater than 10");
  }

  let discount = parseInt("100");
  console.log("discount: ", discount)
  if(discount <= 200){
    console.log("apply");
  } else console.log("not apply")
})();
