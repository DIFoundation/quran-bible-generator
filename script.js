// // script.js
// const generateButton = document.getElementById('generate');
// const verseSection = document.getElementById('verse');
// const meaningSection = document.getElementById('meaning');
// const scholarsSection = document.getElementById('scholars');

// generateButton.addEventListener('click', async () => {
//     try {
//         const response = await fetch('https://api.quran.com/api/v4/verses/random');
        
//         if (!response.ok) {
//             throw new Error(`Failed to fetch data. Status: ${response.status}`);
//         }

//         const data = await response.json(0);

//         console.log(data); // Log the data to the console

//         const verse = data.data[0]; // Assuming the data structure has a 'data' property

//         verseSection.innerHTML = `<h2>${verse.data}</h2>`;
//         meaningSection.innerHTML = `<h3>Meaning:</h3> <p>${verse.translation.text}</p>`;

//         // Placeholder for fetchScholarComments function
//         const scholarComments = await fetchScholarComments(verse.verseKey);
//         scholarsSection.innerHTML = `<h3>Scholar Comments:</h3> <ul>${scholarComments.map(comment => `<li>${comment}</li>`).join('')}</ul>`;
//     } catch (error) {
//         console.error('Error fetching and processing data:', error);
//     }
// });

// // Placeholder for fetchScholarComments function
// async function fetchScholarComments(verseKey) {
//     // Replace this with actual implementation if needed
//     return [];
// }


// script.js
const generateButton = document.getElementById('generate');
const verseSection = document.getElementById('verse');
const meaningSection = document.getElementById('meaning');
const scholarsSection = document.getElementById('scholars');
const loadingIcon = document.getElementById('loading-icon');


generateButton.addEventListener('click', async () => {
    try {
        loadingIcon.classList.remove('hidden'); // Show the loading icon
        const response = await fetch('https://api.quran.com/api/v4/verses/random');

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const responseData = await response.json();

        console.log(responseData); // Log the data to the console

        const verse = responseData.data ? responseData.data[0] : responseData[0];

        if (!verse) {
            throw new Error('No verse data found in the response.');
        }

        verseSection.innerHTML = `<h2>${verse.text}</h2>`;
        meaningSection.innerHTML = `<h3>Meaning:</h3> <p>${verse.translation.text}</p>`;

       
    } catch (error) {
        console.error('Error fetching and processing data:', error);
    } finally {
        loadingIcon.classList.add('hidden'); // Hide the loading icon regardless of success or failure
    }
});
