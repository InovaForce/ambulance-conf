//api.js (to handle fetch requests)
// api.ts (to handle fetch requests)
const baseUrl= "https://669ab9c99ba098ed6100a050.mockapi.io/infinitychassis/";

export const get = async (endpoint) => {
    const response = await fetch(baseUrl + endpoint);
    const data = await response.json();
    return data;
}