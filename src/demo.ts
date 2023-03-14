import fetch from "node-fetch";

(()=> {
  async function getProducts() {
    try {
      const rta = await fetch('http://api.escuelajs.co/api/v1/products');
      const data = await rta.json();
      console.log('---------------------------------');
      console.log(data);
      console.log('---------------------------------');
    } catch (error) {
      console.log(error);      
    }
  }
  // let myCart = [];
  // let products:object[] = [];
  // const limit = 2;

  // async function getProducts() {
  //   const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
  //     method: 'GET'
  //   });
  //   const data = await rta.json();
  //   products.concat(data);
  //   console.log('---------------------------------');
  //   console.log(data);
  //   console.log('---------------------------------');
  // }
  // function getTotal() {
  //   let total = 0;
  //   for (let i = 0; i < products.length; i++) {
  //     total += products[i].price;
  //   }
  //   return total;
  // }
  // function addProduct(index) {
  //   if (getTotal() <= limit) {
  //     myCart.push(products[index]);
  //   }
  // }

  getProducts();
  // // addProduct(1);
  // // addProduct(2);
  // const total = getTotal();
  // console.log(total);
})();