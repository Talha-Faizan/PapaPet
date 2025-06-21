import React, { useState, useEffect, useRef } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Dog Food",
    description: "Nutritious food for your dog",
    price: "$20",
  },
  { id: 2, name: "Cat Toy", description: "Fun toy for your cat", price: "$8" },
  {
    id: 3,
    name: "Bird Cage",
    description: "Spacious cage for birds",
    price: "$50",
  },
  {
    id: 4,
    name: "Fish Tank",
    description: "Aquarium for your fish",
    price: "$100",
  },
  {
    id: 5,
    name: "Rabbit Hutch",
    description: "Comfortable hutch for rabbits",
    price: "$70",
  },
  {
    id: 6,
    name: "Dog Leash",
    description: "Durable leash for walking dogs",
    price: "$12",
  },
  {
    id: 7,
    name: "Cat Litter",
    description: "Odor control litter",
    price: "$15",
  },
  {
    id: 8,
    name: "Hamster Wheel",
    description: "Exercise wheel for hamsters",
    price: "$10",
  },
];

const Search = ({ open, onClose }) => {
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState(PRODUCTS);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        inputRef.current && inputRef.current.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (query.trim() === "") {
      setFiltered(PRODUCTS);
    } else {
      setFiltered(
        PRODUCTS.filter(
          (p) =>
            p.name.toLowerCase().includes(query.toLowerCase()) ||
            p.description.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose && onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center "
      style={{
        backdropFilter: "blur(8px)",
        background: "rgba(0,0,0,0.25)",
        transition: "backdrop-filter 0.2s",
      }}
      onClick={handleOverlayClick}
    >
      <div
        className="w-full md:w-2xl lg:w-4xl 2xl:w-7xl mt-14 pt-10 md:pt-20 bg-white rounded-xl shadow-lg p-6 relative "
        style={{ minHeight: "300px" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute -top-7 left-1/2 -translate-x-1/2 md:top-0 md:right-0 md:left-auto md:translate-x-0
             bg-white text-gray-400 hover:text-gray-700 rounded-full shadow-lg md:shadow-none
             h-12 w-12 flex items-center justify-center text-3xl"
          onClick={onClose}
          aria-label="clove"
          style={{}}
        >
          &times;
        </button>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFAD22] text-lg mb-6"
        />
        <div className="overflow-y-auto" style={{ maxHeight: "550px" }}>
          {filtered.length === 0 ? (
            <div className="text-gray-500 text-center py-8">
              No products found.
            </div>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filtered.map((product) => (
                <li key={product.id} className="py-4 flex flex-col gap-1">
                  <span className="font-semibold text-[#0D9899]">
                    {product.name}
                  </span>
                  <span className="text-gray-600 text-sm">
                    {product.description}
                  </span>
                  <span className="text-[#FFAD22] font-bold">
                    {product.price}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
