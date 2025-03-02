import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 md:p-24">
      <div className=" font-extrabold text-xl md:text-5xl font uppercase">
        Random Generator
      </div>


      <div className=" flex max-md:flex-col md:space-x-10 max-md:space-y-5">
        <Link href="/quran" className="bg-blue-700 px-8 md:px-16 py-3 md:py-5 rounded-xl text-center text-white font-medium hover:bg-blue-100 hover:text-blue-800 hover:font-semibold">
          <button type="button" className="">
          Quran Generate
          </button>
        </Link>
        
        <Link href="/bible" className="bg-blue-700 px-10 md:px-16 py-3 md:py-5 rounded-xl text-center text-white font-medium hover:bg-blue-100 hover:text-blue-800 hover:font-semibold">
          <button type="button" className="">
           Bible Generate
          </button>
        </Link>
        
      </div>
    </main>
  );
}
