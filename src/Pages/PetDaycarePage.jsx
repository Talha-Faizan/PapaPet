import React from 'react';
// import HeroSection from './components/DayCare/HeroSection';
// import PetDaycareList from './components/DayCare/PetDaycareList';
// import Footer from './components/Footer/Footer';
// import NavPapaPet from './components/Nav/NavPapaPet';

const PetDaycarePage = () => {
  return (
    <div className="w-full min-h-screen">
      <nav className="w-full h-[5vw] max-md:w-screen">
        {/* <NavPapaPet /> */}
      </nav>

      {/* <HeroSection /> */}

      {/* Trusted Doctors Section */}
      <section className="py-20 px-6 text-center bg-[#F4EEE1]">
        <h2 className="text-3xl font-semibold">
          Discover a Loving Pet Daycare Near You
        </h2>
        <input
          type="text"
          placeholder="Search Top grooming services Near you..."
          className="mt-4 p-2 w-full md:w-1/2 border border-gray-300 rounded-md placeholder:pl-2"
        />
      </section>

      {/* <PetDaycareList /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default PetDaycarePage;
