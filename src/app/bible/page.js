"use client";
import React, { useState } from "react";
const VERSES = [
  { book: 'GEN', chapter: 1, verseStart: 1, verseEnd: 31 },
  { book: 'EXO', chapter: 20, verseStart: 1, verseEnd: 26 },
  { book: 'LEV', chapter: 19, verseStart: 9, verseEnd: 18 },
  { book: 'NUM', chapter: 6, verseStart: 24, verseEnd: 26 },
  { book: 'DEU', chapter: 6, verseStart: 4, verseEnd: 9 },
  { book: 'JOS', chapter: 1, verseStart: 5, verseEnd: 9 },
  { book: 'JUD', chapter: 5, verseStart: 3, verseEnd: 5 },
  { book: 'RUT', chapter: 1, verseStart: 16, verseEnd: 17 },
  { book: '1SA', chapter: 17, verseStart: 45, verseEnd: 47 },
  { book: '2SA', chapter: 22, verseStart: 31, verseEnd: 34 },
  { book: '1KI', chapter: 8, verseStart: 22, verseEnd: 23 },
  { book: '2KI', chapter: 19, verseStart: 14, verseEnd: 19 },
  { book: '1CH', chapter: 16, verseStart: 8, verseEnd: 10 },
  { book: '2CH', chapter: 7, verseStart: 13, verseEnd: 14 },
  { book: 'EZR', chapter: 9, verseStart: 8, verseEnd: 9 },
  { book: 'NEH', chapter: 9, verseStart: 5, verseEnd: 6 },
  { book: 'EST', chapter: 4, verseStart: 14, verseEnd: 16 },
  { book: 'JOB', chapter: 19, verseStart: 25, verseEnd: 27 },
  { book: 'PSA', chapter: 23, verseStart: 1, verseEnd: 6 },
  { book: 'PRO', chapter: 3, verseStart: 5, verseEnd: 6 },
  { book: 'ECC', chapter: 12, verseStart: 13, verseEnd: 14 },
  { book: 'SNG', chapter: 8, verseStart: 6, verseEnd: 7 },
  { book: 'ISA', chapter: 40, verseStart: 28, verseEnd: 31 },
  { book: 'JER', chapter: 29, verseStart: 11, verseEnd: 13 },
  { book: 'LAM', chapter: 3, verseStart: 22, verseEnd: 23 },
  { book: 'EZK', chapter: 36, verseStart: 26, verseEnd: 27 },
  { book: 'DAN', chapter: 12, verseStart: 3, verseEnd: 3 },
  { book: 'HOS', chapter: 6, verseStart: 6, verseEnd: 6 },
  { book: 'JOL', chapter: 2, verseStart: 28, verseEnd: 32 },
  { book: 'AMO', chapter: 5, verseStart: 4, verseEnd: 6 },
  { book: 'OBA', chapter: 1, verseStart: 15, verseEnd: 17 },
  { book: 'JON', chapter: 2, verseStart: 8, verseEnd: 9 },
  { book: 'MIC', chapter: 6, verseStart: 8, verseEnd: 8 },
  { book: 'NAM', chapter: 1, verseStart: 7, verseEnd: 7 },
  { book: 'HAB', chapter: 3, verseStart: 17, verseEnd: 19 },
  { book: 'ZEP', chapter: 3, verseStart: 17, verseEnd: 20 },
  { book: 'HAG', chapter: 2, verseStart: 9, verseEnd: 9 },
  { book: 'ZEC', chapter: 4, verseStart: 6, verseEnd: 6 },
  { book: 'MAL', chapter: 3, verseStart: 10, verseEnd: 12 },
  { book: 'MAT', chapter: 6, verseStart: 9, verseEnd: 13 },
  { book: 'MRK', chapter: 12, verseStart: 29, verseEnd: 31 },
  { book: 'LUK', chapter: 10, verseStart: 27, verseEnd: 28 },
  { book: 'JHN', chapter: 3, verseStart: 16, verseEnd: 18 },
  { book: 'ACT', chapter: 17, verseStart: 24, verseEnd: 28 },
  { book: 'ROM', chapter: 12, verseStart: 1, verseEnd: 2 },
  { book: '1CO', chapter: 13, verseStart: 1, verseEnd: 7 },
  { book: '2CO', chapter: 5, verseStart: 17, verseEnd: 17 },
  { book: 'GAL', chapter: 5, verseStart: 22, verseEnd: 23 },
  { book: 'EPH', chapter: 4, verseStart: 29, verseEnd: 32 },
  { book: 'PHP', chapter: 4, verseStart: 6, verseEnd: 7 },
  { book: 'COL', chapter: 3, verseStart: 16, verseEnd: 17 },
  { book: '1TH', chapter: 5, verseStart: 16, verseEnd: 18 },
  { book: '2TH', chapter: 3, verseStart: 16, verseEnd: 18 },
  { book: '1TI', chapter: 6, verseStart: 6, verseEnd: 10 },
  { book: '2TI', chapter: 4, verseStart: 7, verseEnd: 8 },
  { book: 'TIT', chapter: 2, verseStart: 11, verseEnd: 14 },
  { book: 'PHM', chapter: 1, verseStart: 4, verseEnd: 6 },
  { book: 'HEB', chapter: 13, verseStart: 5, verseEnd: 6 },
  { book: 'JAS', chapter: 1, verseStart: 5, verseEnd: 6 },
  { book: '1PE', chapter: 5, verseStart: 6, verseEnd: 7 },
  { book: '2PE', chapter: 1, verseStart: 3, verseEnd: 4 },
  { book: '1JN', chapter: 1, verseStart: 8, verseEnd: 9 },
  { book: '2JN', chapter: 1, verseStart: 5, verseEnd: 6 },
  { book: '3JN', chapter: 1, verseStart: 2, verseEnd: 4 },
  { book: 'JUD', chapter: 1, verseStart: 20, verseEnd: 21 },
  { book: 'REV', chapter: 22, verseStart: 20, verseEnd: 21 },
];

function getRandomVerse() {
  // Select a random verse object from VERSES array
  const verseObj = VERSES[Math.floor(Math.random() * VERSES.length)];

  // Generate random verse number within the specified range
  const randomVerse = Math.floor(
    Math.random() * (verseObj.verseEnd - verseObj.verseStart + 1) + verseObj.verseStart
  );

  return `${verseObj.book}.${verseObj.chapter}.${randomVerse}`;
}

export default function Bible() {
  const [verse, setVerse] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  const bibleVerse = async () => {
    try {
      const verseId = getRandomVerse(); // Assuming 31102 verses in the Bible
      const bibleId = "65eec8e0b60e656b-01"; // The ID of the English Standard Version translation
      // const response = await fetch(`https://api.scripture.api.bible/v1/bibles​/${bibleId}​/verses​/${verseId}`, {
      const response = await fetch(
        `https://api.scripture.api.bible/v1/bibles/${bibleId}/verses/${verseId}?include-chapter-numbers=false&include-verse-numbers=false`,
        {
          headers: {
            "api-key": "d7313952ea55d0f738560435c0d35a66",
          },
        }
      );
      const data = await response.json();

      setVerse(data.data.content);
      setName(data.data.reference);

    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-24 py-12">
      <div className=" font-extrabold text-5xl font uppercase">
        Bible Generator
      </div>

      <div className=" text-center w-full text-2xl">
        {error && (
          <p className=" text-sm">
            So sorry, the server misunderstand your request:
            <br />
            {error.message}
          </p>
        )}
        {verse && (
          <div className=" text-2xl leading-[2rem] font-medium my-10">
            <p>{verse}</p>
            <p className="mt-10 italic text-lg">{name}</p>

            {/* <h2 className='text-2xl mt-5'>Quran Verse: {name}</h2> */}
          </div>
        )}
      </div>

      <button
        onClick={bibleVerse}
        type="button"
        className="bg-blue-700 px-16 py-5 rounded-xl text-white font-medium hover:font-semibold"
      >
        Generate Bible Verse
      </button>
      <div className="fixed left-10">
        <a href="/" className="px-5 py-3 text-white bg-blue-700 hover:bg-blue-300 hover:text-blue-900 rounded-l-lg">Home</a>
        <a href="/quran" className="px-5 py-3 text-white bg-blue-700 hover:bg-blue-300 hover:text-blue-900 rounded-r-lg">Quran</a>
      </div>
      
    </div>
  );
}

// React component modified to use a proxy server

// import React, { useState } from 'react';

// export default function Bible() {
//   const [verse, setVerse] = useState(null);
//   const [error, setError] = useState(null);

//   const bibleVerse = async () => {
//     try {
//       const verseId = Math.floor(Math.random() * (23145 - 1)) + 1;
//       const bibleId = '65eec8e0b60e656b-01'
//       const response = await fetch(`https://api.scripture.api.bible/v1/bibles​/${bibleId}​/verses​/${verseId}`); // Request to your server-side script
//       const data = await response.json();

//       setVerse(data);
//       console.log(data);
//     } catch (error) {
//       setError(error);
//     }
//   };

//   return (
//     <div className='flex min-h-screen flex-col items-center justify-between px-24 py-12'>
//       <div className="font-extrabold text-5xl font uppercase">Bible Generator</div>

//       <div className='text-center w-full text-2xl'>
//         {error && <p className='text-sm'>Sorry, the server misunderstood your request:<br/>{error.message}</p>}
//         {verse && (
//           <div className='text-3xl leading-[3rem] font-medium my-10'>
//             <p>{verse}</p>
//           </div>
//         )}
//       </div>

//       <button onClick={bibleVerse} type='button' className='bg-blue-700 px-16 py-5 rounded-xl text-white font-medium hover:font-semibold'>Generate Bible Verse</button>
//     </div>
//   );
// }
