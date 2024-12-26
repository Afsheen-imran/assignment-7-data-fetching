"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

//TYPE DEFINE.....
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ClientSide = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: Product[]) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 flex items-center justify-center py-12 px-6 sm:px-8">
      <div className="w-full max-w-7xl bg-white rounded-xl shadow-xl overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center space-x-2 py-8">
            <AiOutlineLoading3Quarters className="animate-spin text-4xl text-gray-800" />
            <span className="text-gray-800 text-xl animate-pulse">Loading...</span>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-blue-500 via-yellow-500 to-blue-700 p-8 text-center rounded-t-lg">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-wide">
              Client Side Data Fetching
            </h1>
          </div>
        )}
        <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {error ? (
            <div className="text-red-500 text-xl text-center">Error: {error}</div>
          ) : (
            data.map((product) => (
              <div
                key={product.id}
                className="bg-gray-100 border border-gray-300 p-6 rounded-xl shadow-md hover:shadow-lg transition w-64 h-80"
              >
                <div className="flex flex-col items-center h-full">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover w-full h-40 mb-4"
                    />
                  )}
                  <h2 className="text-lg font-semibold text-gray-800 mb-2 text-center truncate">
                    {product.title}
                  </h2>
                  <p className="text-xl font-semibold text-blue-600 mb-2">${product.price}</p>
                  <p className="text-sm text-gray-600 mb-2 truncate">Category: {product.category}</p>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, index) => {
                        const rating = Math.round(product.rating.rate);
                        return (
                          <FaStar
                            key={index}
                            className={index < rating ? "text-yellow-400" : "text-gray-400"}
                          />
                        );
                      })}
                    </div>
                    <p className="ml-2 text-gray-500">({product.rating.count})</p>
                  </div>
                  <button className="bg-gradient-to-r from-blue-500 to-purple-700 text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientSide;