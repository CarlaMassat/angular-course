export interface Product {
    descripcion: string;
    price: number;

}

interface TaxCalculationOptions {
    tax: number,
    products: Product[]
}

const phone: Product = {
    descripcion: 'Nokia A1',
    price: 150.0,   
}

const tablet: Product = {
    descripcion: 'Ipad Air',
    price: 250.0,  
}

const taxtCalculation = (options: TaxCalculationOptions): number[] => {
    let total = 0;

    options.products.forEach(product => {
        total+= product.price
    });

    return [total, total * options.tax]

 }

const shoppingCart = [phone, tablet];
const tax = 0.15

const result = taxtCalculation({
    products:shoppingCart,
    tax
})

console.log('Total',result[0])
console.log('Tax',result[1])

