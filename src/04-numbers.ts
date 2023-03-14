(() => {
    let productPrice = 100;
    productPrice = 2;
    console.log('productPrice', productPrice);

    let customerAge:number = 28;
    // customerAge = customerAge + "1";
    customerAge = customerAge + 1;
    console.log('customerAge', customerAge);

    let productInStock:number = 2;
    console.log('productoInStock', productInStock);
    if ( productInStock > 10 ) {
        console.log('Está funcionando');
    }

    let discount = parseInt('123');    
    console.log('discount', discount);
    if ( discount < 200 ) {
        console.log("Apply");
    }
    else {
        console.log("Not apply");
    }

    let hex = 0xfff;
    console.log('hex', hex);
    let bin = 0b1010;
    console.log('bin', bin);

})();