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
        

//         // Extract the Arabic text of the verse
//         const arabicText = verse.text;

//         // Extract the translation of the verse
//         const translation = verse.translation;

//         // Display the Arabic text and translation on the page
//         verseSection.innerHTML += `<h2>${arabicText}</h2>`;
//         meaningSection.innerHTML += `<h2>${translation}</h2>`;

//     } catch (error) {
//         console.error('Error fetching and processing data:', error);
//     } finally {
//         loadingIcon.classList.add('hidden'); // Hide the loading icon regardless of success or failure
//     }
// });

// API LEARNING
// fetch("https://api.quran.com/api/v4/verses/random")
//     .then(response => {
//         if(!response.ok){
//             throw new Error("Super Eagles");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error));



async function fetchData() {
    try {
        const response = await fetch("http://api.alquran.cloud/v1/ayah/random")

        if (!response.ok) {
            throw new Error("Super Eagles");
        }

        const data = await response.json();
        const sss = data.data.text;
        const aaa = document.getElementById("vvv");

        console.log(data.data);
        aaa.innerHTML = sss
        aaa.style.fontSize = "30px"

    } catch (error) {
        console.error(error);
    }
}
