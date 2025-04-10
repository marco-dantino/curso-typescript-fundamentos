(() => {
  const login = (
    data: {
      email: string,
      password: string
    }) => {
    console.log(data.email, data.password);
  }

  login({
    email: "marco@gmail.com",
    password: "3332123"
  });

  type Sizes = "S" | "M" | "L" | "XL";

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  addProduct({
    title: "P1",
    createdAt: new Date,
    stock: 12
  });
  addProduct({
    title: "P2",
    createdAt: new Date,
    stock: 14,
    size: "L"
  });

  console.log(products);
})();
