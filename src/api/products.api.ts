export async function getProducts(){
    const url="https://port-0-express-server-17xco2nlsidlckv.sel5.cloudtype.app/products"
    const options = {method:"GET"};

    const response = await fetch (url, options);
    const data = await response.json();
    console.log(data);
}

getProducts();