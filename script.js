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
        const response = await fetch('https://api.quran.com/api/v4/verses/random', {
            method: 'GET', // or 'POST' or any other HTTP method
            headers: {
              'Accept': 'application/json',
              // You may need to include other headers like 'Content-Type' if you are sending data in the request
            },
          });

        if (!response.ok) {
           throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const responseData = await response.json(0);

        console.log(responseData); // Log the data to the console

        const verse = responseData.data ? responseData.data[0] : responseData[0];

        verseSection.innerHTML += `<h2>${responseData.verse.verse_key}</h2>`;

        if (!verse) {
            throw new Error('No verse data found in the response.');
        }
       
    } catch (error) {
        console.error('Error fetching and processing data:', error);
    } finally {
        loadingIcon.classList.add('hidden'); // Hide the loading icon regardless of success or failure
    }
});


// // the total number of surahs in the Quran
// const TOTAL_SURAHS = 114;

// // declares the number of ayahs based on the chosen surah
// let totalAyahs;

// // declares the randomly chosen surah 
// let surahNumber;

// // declares the randomly chosen ayah
// let ayahNumber;

// // declares the Arabic ayah from the surah
// let ayah;

// // declares the translated ayah from Arabic
// let translatedAyah;

// // the Quran API link
// const SURAH_URL = 'https://api.alquran.cloud/v1/surah/';

// // declares the API call for the translation
// let newSurahURL;

// // the part of the link for the English translation
// let eng = 'en.sahih';

// // gets a random ayah on startup 
// getRandomAyah();

// // gets a random ayah from the Quran API and displays it
// async function randomAyah() {
//     showLoader();

//     surahNumber = Math.floor(Math.random() * (TOTAL_SURAHS - 1)) + 1;
//     newSurahURL = SURAH_URL + surahNumber;

//     const response = await fetch(newSurahURL);
//     const chapterJSON = await response.json();

//     totalAyahs = chapterJSON.data.numberOfAyahs;
    
//     ayahNumber = Math.floor(Math.random() * totalAyahs);
   
//     ayah = chapterJSON.data.ayahs[ayahNumber].text;

//     translateAyah();

//     return Promise.resolve('Getting the ayah works!');
// }

// // translates the random ayah
// async function translateAyah() {
//     newSurahURL += '/' + eng;

//     const response = await fetch(newSurahURL);
//     const chapterJSON2 = await response.json();
    
//     translatedAyah = chapterJSON2.data.ayahs[ayahNumber].text;

//     printToHTML();

//     return Promise.resolve('Getting the translation works!');
// }

// // prints the random ayah and translation to the HTML file
// function printToHTML() {
//     // hides the loader and displays the text
//     document.getElementById('loadingCircle').style.display = 'none';
//     document.getElementById('verse').style.display = 'block';
//     document.getElementById('translation').style.display = 'block';

//     document.getElementById('verse').innerHTML = ayah;
//     document.getElementById('translation').innerHTML = (surahNumber + ':' + (ayahNumber + 1)).bold();
//     document.getElementById('translation').innerHTML += ' ' + translatedAyah;
// }

// // shows a loader while the JSON loads
// function showLoader() {
//     document.getElementById('loadingCircle').style.display = 'block';
//     document.getElementById('verse').style.display = 'none';
//     document.getElementById('translation').style.display = 'none';
// }

// // gets a random ayah
// async function getRandomAyah() {
//     randomAyah()
// }
