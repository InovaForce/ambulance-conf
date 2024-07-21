//api.js (to handle fetch requests)
// api.ts (to handle fetch requests)
const baseUrl = "https://669ab9c99ba098ed6100a050.mockapi.io/infinitychassis/";

export const getAllInformation = async () => {
    const response = await fetch(`${baseUrl}vehiclefeatures-medicalequipments`);
    const data = await response.json();
    console.log(data);
    return data;
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["infinitychassis.com"],
  },
};