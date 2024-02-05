// // script.js
const generateButton = document.getElementById('generate');
const verseSection = document.getElementById('verse');
const meaningSection = document.getElementById('meaning');
const scholarsSection = document.getElementById('scholars');
const loadingIcon = document.getElementById('loading-icon');


// generateButton.addEventListener('click', async () => {
//     try {
//         loadingIcon.classList.remove('hidden'); // Show the loading icon
//         const response = await fetch('https://api.quran.com/api/v4/verses/random', {
//             method: 'GET', // or 'POST' or any other HTTP method
//             headers: {
//               'Accept': 'application/json',
//               // You may need to include other headers like 'Content-Type' if you are sending data in the request
//             },
//           });

//         if (!response.ok) {
//            throw new Error(`Failed to fetch data. Status: ${response.status}`);
//         }

//         const responseData = await response.json(0);

//         console.log(responseData); // Log the data to the console

//         const verse = responseData.data ? responseData.data[0] : responseData[0];

//         verseSection.innerHTML += `<h2>${responseData.verse.id}</h2>`;

//         if (!verse) {
//             throw new Error('No verse data found in the response.');
//         }
       
//     } catch (error) {
//         console.error('Error fetching and processing data:', error);
//     } finally {
//         loadingIcon.classList.add('hidden'); // Hide the loading icon regardless of success or failure
//     }
// });


// generateButton.addEventListener('click', async () => {
//     try {
//         loadingIcon.classList.remove('hidden'); // Show the loading icon
//         const response = await fetch('https://api.quran.com/api/v4/verses/random', {
//             method: 'GET',
//             headers: {
//               'Accept': 'application/json',
//             },
//           });

//         if (!response.ok) {
//            throw new Error(`Failed to fetch data. Status: ${response.status}`);
//         }

//         const responseData = await response.json();
//         console.log(responseData);
//         if (!responseData.data || !responseData.data[0]) {
//             throw new Error('No verse data found in the response.');
//         }

//         const verse = responseData.data[0];
//         console.log(verse);

//         // Extract the Arabic text of the verse
//         const arabicText = verse.text;

//         // Display the Arabic text on the page
//         verseSection.innerHTML += `<h2>${arabicText}</h2>`;

//     } catch (error) {
//         console.error('Error fetching and processing data:', error);
//     } finally {
//         loadingIcon.classList.add('hidden'); // Hide the loading icon regardless of success or failure
//     }

generateButton.addEventListener('click', async () => {
    try {
        loadingIcon.classList.remove('hidden'); // Show the loading icon
        const response = await fetch('https://api.quran.com/api/v4/verses/random', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          });
          console.log(response);
        if (!response.ok) {
           throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const responseData = await response.json();

        if (!responseData.data || !responseData.data[0]) {
            throw new Error('No verse data found in the response.');
        }

        const verse = responseData.data[0];
        

        // Extract the Arabic text of the verse
        const arabicText = verse.text;

        // Extract the translation of the verse
        const translation = verse.translation;

        // Display the Arabic text and translation on the page
        verseSection.innerHTML += `<h2>${arabicText}</h2>`;
        meaningSection.innerHTML += `<h2>${translation}</h2>`;

    } catch (error) {
        console.error('Error fetching and processing data:', error);
    } finally {
        loadingIcon.classList.add('hidden'); // Hide the loading icon regardless of success or failure
    }
});