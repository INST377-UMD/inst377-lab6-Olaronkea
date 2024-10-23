function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from ) + from).toFixed(fixed) * 1;
}

const lat1 = getRandomInRange(30, 35, 3);
const lon1 = getRandomInRange(-100, -90, 3);

const lat2 = getRandomInRange(30, 35, 3);
const lon2 = getRandomInRange(-100, -90, 3);

const lat3 = getRandomInRange(30, 35, 3);
const lon3 = getRandomInRange(-100, -90, 3);

const map = L.map('map').setView([32.5, -95], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap contributors'
}).addTo(map);

const marker1 = L.marker([lat1, lon1]).addTo(map);
const marker2 = L.marker([lat2, lon2]).addTo(map);
const marker3 = L.marker([lat3, lon3]).addTo(map);

document.getElementById('coords1').textContent = `(${lat1}, ${lon1})`;
document.getElementById('coords2').textContent = `(${lat2}, ${lon2})`;
document.getElementById('coords3').textContent = `(${lat3}, ${lon3})`;

async function fetchLocality(lat, lon, markerId) {
    const apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en
`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        document.getElementById(markerId).textContent = data.localality || "Locality not found ";
    } catch (error) {
        console.error('Error fetching locality data:', error);
    }
    }
    
    fetchLocality(lat1, lon1, 'locality1');
    fetchLocality(lat2, lon2, 'locality2');
    fetchLocality(lat3, lon3, 'locality3');
