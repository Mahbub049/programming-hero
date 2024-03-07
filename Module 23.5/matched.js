const electronicDevices = [
    { id: 1, name: "Phone Master X", price: 599.99, brand: "TechCo", type: "phone" },
    { id: 2, name: "Laptop Pro Elite", price: 1299.99, brand: "InnoTech", type: "laptop" },
    { id: 3, name: "Tablet Plus Ultra", price: 349.99, brand: "GadgetMasters", type: "tablet" },
    { id: 4, name: "Phone Supreme Y", price: 699.99, brand: "TechCo", type: "phone" },
    { id: 5, name: "Ultimate Laptop Air", price: 899.99, brand: "InnoTech", type: "laptop" },
    { id: 6, name: "Super Tablet Lite", price: 199.99, brand: "GadgetMasters", type: "tablet" },
    { id: 7, name: "Phone Pro Max", price: 799.99, brand: "TechCo", type: "phone" },
    { id: 8, name: "Sleek Laptop Touch", price: 1099.99, brand: "InnoTech", type: "laptop" },
    { id: 9, name: "Compact Tablet Nano", price: 249.99, brand: "GadgetMasters", type: "tablet" },
    { id: 10, name: "Phone Express Lite", price: 499.99, brand: "TechCo", type: "phone" }
  ];
  
function matched(items, search){
    const devices = [];
    for(const item of items){
        if(item.name.toLowerCase().includes(search.toLowerCase())){
            devices.push(item);
        }
    }
    return devices

}

const devices = matched(electronicDevices, 'TaBlEt')
console.log(devices);