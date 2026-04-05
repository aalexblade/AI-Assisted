// function to calculate the area of a circle
function calculateCircleArea(radius) {
   return Math.PI * radius * radius;
}   

//funciton to validete an email address using regex
function validateEmail(email) {
   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return regex.test(email);
}

// function to fetch data from an API and log the response
async function fetchData(url) {
    try {   
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }       
}

