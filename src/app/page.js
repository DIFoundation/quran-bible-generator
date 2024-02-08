import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" font-extrabold text-5xl font uppercase">
        Random Generator
      </div>


      <div className=" flex max-md:flex-col space-x-10 max-md:space-y-10">
        <a href="/quran" className="bg-blue-700 px-16 py-5 rounded-xl text-white font-medium hover:bg-blue-100 hover:text-blue-800 hover:font-semibold">
          <button type="button" className="">
           Quran Generate
          </button>
        </a>
        

        <a href="/bible" className="bg-blue-700 px-16 py-5 rounded-xl text-white font-medium hover:bg-blue-100 hover:text-blue-800 hover:font-semibold">
          <button type="button" className="">
           Bible Generate
          </button>
        </a>
      </div>
    </main>
  );
}
