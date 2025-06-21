import React from "react";


const Walker = () => {
  return (
    <div className="w-full">
      {/* Navigation */}
      <nav className="w-full h-[5vw] bg-red-200 max-md:w-screen">
       
      </nav>

      {/* Hero Section */}
      

      {/* Trusted Pet Walkers Search */}
      <section className="py-20 px-6 text-center bg-[#F4EEE1]">
        <h2 className="text-3xl font-semibold max-md:text-xl">
          Find Pet Walkers Near you
        </h2>
        <input
          type="text"
          placeholder="Search Top grooming services Near you..."
          className="mt-4 p-2 w-full md:w-1/2 border border-gray-300 rounded-md placeholder:pl-2"
        />
      </section>

      {/* Petwalker List Section */}
    

      {/* Footer */}
     
    </div>
  );
};

export default Walker;
