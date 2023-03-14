(() => {
    let product = 'Hola mundo';
    console.log('product',product);

    let productTitle = "I'am a title";
    console.log("productTitle", productTitle);

    let productDescription = 'Oh! look!! A product';
    console.log('productDescription', productDescription);

    let productPrice = 100;

    const concatStrings = `
        Title: ${productTitle}
        Description: ${productDescription}
        Price: ${productPrice}
    `;

    console.log(concatStrings);
})();