const adviceId = document.getElementsByClassName('id')[0];
const advice = document.getElementsByClassName('advice')[0];

async function fetchAdvice() {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();      
        document.getElementById('adviceId').innerHTML = data.slip.id;
        document.getElementById('adviceText').innerHTML = data.slip.advice; 
    } catch (error) {
        console.error('Error fetching advice:', error);
    }
}
document.addEventListener('DOMContentLoaded', fetchAdvice);

