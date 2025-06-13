import React, { useState } from "react";

const Profile = () => {
  return (
    <>
      <div className="bg-white mt-4 sm:mt-6 md:mt-10 px-3 sm:px-4 md:px-5 py-6 sm:py-8 md:py-10 rounded-lg">
        <div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Profile Details:
          </h1>
        </div>
        <div className="border-b-2 border-gray-300 px-3 sm:px-4 md:px-5 mb-6 sm:mb-8 md:mb-10"></div>
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 lg:gap-8 w-full">
          <div className="flex flex-col items-center gap-4 mb-6 md:mb-0 md:w-1/2">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-46 md:h-46 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-300">
              <img
                id="profilePreview"
                src="/default-avatar.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative">
              <label className="flex flex-col items-center justify-center w-40 sm:w-44 md:w-48 h-10 sm:h-11 md:h-12 border-2 border-orange-500 border-dashed rounded-lg cursor-pointer bg-white hover:bg-blue-50 transition-colors duration-200">
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="text-xs sm:text-sm text-orange-500 font-medium">
                    Upload Photo
                  </p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => {
                        document.getElementById("profilePreview").src =
                          e.target.result;
                      };
                      reader.readAsDataURL(file);
                    }
                  }}
                />
              </label>
            </div>
          </div>
          <div className="w-full py-6 md:py-0">
            <div className="max-w-3xl mx-auto">
              <div className="rounded-lg p-4 sm:p-5 md:p-6">
                <form className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                    <div className="w-full">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                        placeholder="Name"
                      />
                    </div>

                    <div className="w-full">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                        placeholder="Primary Email"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                    <div className="w-full">
                      <input
                        type="email"
                        id="secondaryEmail"
                        name="secondaryEmail"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                        placeholder="Secondary Email"
                      />
                    </div>

                    <div className="w-full">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="w-full">
                      <input
                        type="text"
                        id="country"
                        name="country"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                        placeholder="Country"
                      />
                    </div>

                    <div className="w-full">
                      <input
                        type="text"
                        id="state"
                        name="state"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                        placeholder="State"
                      />
                    </div>

                    <div className="w-full">
                      <input
                        type="text"
                        id="pincode"
                        name="pincode"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                        placeholder="Pincode"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-6 sm:mt-8">
                    <button
                      type="submit"
                      className="bg-orange-600 text-white w-full py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm sm:text-base"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className = "bg-white pt-10">
        <div className = "px-5 mt-10">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
          Shipping Details:{" "}
        </h1>
        <div className = " border-b border-gray-400"></div>
        </div>

        <div className="mx-auto">
          <div className="rounded-lg p-4 sm:p-5 md:p-6">
            <form className="space-y-4 sm:space-y-5 md:space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                    placeholder="Name"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Primary Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                    placeholder="Primary Email"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
                <div className="w-full">
                  <label
                    htmlFor="secondaryEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Secondary Email
                  </label>
                  <input
                    type="email"
                    id="secondaryEmail"
                    name="secondaryEmail"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                    placeholder="Secondary Email"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-full">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                    placeholder="Country"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                    placeholder="State"
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="pincode"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Pincode
                  </label>
                  <input
                    type="text"
                    id="pincode"
                    name="pincode"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                    placeholder="Pincode"
                  />
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                  placeholder="Address"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Landmark (Optional)
                </label>
                <input
                  type="text"
                  id="Landmark"
                  name="Landmark"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3 text-sm sm:text-base"
                  placeholder="Landmark"
                />
              </div>
              <div className="flex justify-start mt-6 sm:mt-8">
                <button
                  type="submit"
                  className="font-bold bg-orange-600 text-white w-1/4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 text-sm sm:text-base"
                >
                  Edit Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
