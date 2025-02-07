// API to dada fetch
const loadPhone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json()
    const phones = data.data;
    displayPhones(phones);
}
// API data display
const displayPhones = phones =>{
    
}



loadPhone();
