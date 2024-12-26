import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";



const HomePage = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#f7f7f7]">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <Link href="/client-side">
          <div
            className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm cursor-pointer transition duration-300 ease-in-out hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Client Side Rendering
            </h2>
            <p className="text-gray-600">
              Client-side rendering is a technique where the browser
              renders the web page.
            </p>
            <Button className="text-white bg-[#1c2007] border border-gray-300 rounded-lg hover:motion-safe:animate-ping mt-4">
              Learn More
            </Button>
          </div>
        </Link>
        <Link href="/server-side">
          <div
            className="bg-white shadow-md rounded-lg p-4 w-full max-w-sm cursor-pointer transition duration-300 ease-in-out hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-gray-800">
              Server Side Rendering
            </h2>
            <p className="text-gray-600">
              Server-side rendering is a technique where the server
              renders the web page.
            </p>
            <Button className="text-white bg-[#1c2007] border border-gray-300 rounded-lg hover:motion-safe:animate-ping mt-4">
              Learn More
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;