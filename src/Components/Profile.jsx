import React, { useState } from "react";

const Profile = () => {
  return (
    <>
      <div className="bg-white mt-10 px-5 py-10 rounded-lg">
        <div>
          <h1 className="text-2xl font-bold">Profile Details:</h1>
        </div>
        <div className="border-b-2 border-gray-300 px-5 mb-10"></div>
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-300">
            <img
              id="profilePreview"
              src="/default-avatar.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative">
            <label className="flex flex-col items-center justify-center w-48 h-12 border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-white hover:bg-blue-50 transition-colors duration-200">
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 text-blue-500"
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
                <p className="text-sm text-blue-500 font-medium">
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
        <div className="min-h-screen py-12">
          <div className="max-w-3xl mx-auto">
            <div className=" shadow rounded-lg p-6">
              <form className="space-y-6">
                <div>
                  <div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3"
                      placeholder="Name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3"
                      placeholder="Primary Email"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="email"
                      id="secondaryEmail"
                      name="secondaryEmail"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3"
                      placeholder="Secondary Email"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3"
                      placeholder="Country"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3"
                      placeholder="State"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      id="pincode"
                      name="pincode"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 py-2 px-3"
                      placeholder="Pincode"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
