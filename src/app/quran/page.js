"use client";
import React, { useState } from "react";

export default function Quran() {
  const [verse, setVerse] = useState(null);
  const [name, setName] = useState(null);
  const [name1, setName1] = useState(null);
  const [numberInSurah, setNumberInSurah] = useState(null);
  const [meaning, setMeaning] = useState(null);
  const [chapter, setChapter] = useState (null);
  const [error, setError] = useState(null);

  const quranVerse = async () => {
    try {
      const min = 1;
      const max = 6237;
      const verseId = Math.floor(Math.random() * (max - min)) + min; // Assuming 31102 verses in the Bible
      const response = await fetch(`https://api.alquran.cloud/v1/ayah/${verseId}/editions/quran-uthmani,en.asad`,
        {
          headers: {
            // 'Access-Control-Allow-Credentials':true,
            // 'Accept': '/',
            // Origin: "ht/tp://localhost:3000",
            // "Access-Control-Allow-Origin": "http://localhost:3000",
            // 'Access-Control-Expose-Headers': '*'
          },
        }
      );
      const data = await response.json();

      setVerse(data.data[0].text);
      setNumberInSurah(data.data[0].numberInSurah);
      setMeaning(data.data[1].text);

      setName(data.data[0].surah.name);
      setName1(data.data[1].surah.englishNameTranslation);
      setChapter(data.data[0].surah.number);

    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-10 md:px-24 py-8 md:py-12">
      <div className="py-6 font-extrabold text-xl md:text-5xl font uppercase">
        Quran Generator
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
          <div className=" text-3xl leading-[3rem] font-medium my-10">
            <p>
              {verse} : {numberInSurah}
            </p>
            <p className="text-xl">{meaning}</p>
            <p className="text-lg mt-10 italic">
              {name1} - {name}
            </p>
            <p className="text-xl font-bold">{chapter} : {numberInSurah}</p>

          </div>
        )}
      </div>

      <button
        onClick={quranVerse}
        type="button"
        className="bg-blue-700 px-8 md:px-16 py-3 md:py-5 rounded-xl text-white font-medium hover:font-semibold">
        Generate Quran Verse
      </button>

      <div className="fixed left-5 md:left-10 max-md:top-5">
        <a href="/" className="px-2.5 md:px-5 py-2 md:py-3 text-white bg-blue-700 hover:bg-blue-300 hover:text-blue-900 rounded-l-lg">Home</a>
        
        <a href="/bible" className="px-2.5 md:px-5 py-2 md:py-3 text-white bg-blue-700 hover:bg-blue-300 hover:text-blue-900 rounded-r-lg">Bible</a>
      </div>

    </div>
  );
}
