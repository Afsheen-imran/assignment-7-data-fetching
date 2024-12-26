import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export interface IServerSideRendering {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export default async function ServerSideRendering() {
  const response = await fetch("https://simple-books-api.glitch.me/books/", {
    cache: "no-cache",
  });
  const data: IServerSideRendering[] = await response.json();
  return (
    <div className="min-h-screen container flex flex-col items-center justify-center w-full mx-auto bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-700">
      <h1
        className={`${poppins.className} motion-safe:animate-bounce uppercase text-center text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-5xl`}
      >
        Books
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:px-6 py-10">
        {data.map((book) => (
          <div
            key={book.id}
            className="bg-gray-100 border hover:animate-spin hover:border-[#afc93f] rounded-lg p-4 shadow-md transition duration-300 ease-in-out"
          >
            <h3
              className={`${poppins.className} text-2xl font-semibold mb-2 text-gray-800`}
            >
              {book.name}
            </h3>
            <p className="text-gray-600 mb-2">Type: {book.type}</p>
            <p className="text-gray-600 mb-2">
              Available: {book.available ? (
                <span className="text-green-600">Yes</span>
              ) : (
                <span className="text-red-500">No</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}