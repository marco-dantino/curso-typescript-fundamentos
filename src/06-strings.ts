(() => {
  let productTitle = "My amazing product";
  console.log("productTitle ", productTitle);

  productTitle = "My amazing product change";
  console.log("productTitle ", productTitle);

  const productDescription = "My amazing description";
  console.log("productTitle ", productTitle);

  let prodcutPrice = 100;
  let isNew: boolean = false;

  const summary = `
    title: ${productTitle}
    description: ${productDescription}
    price: ${prodcutPrice}
    isNew: ${isNew}
  `;

  console.log(summary);
})();
