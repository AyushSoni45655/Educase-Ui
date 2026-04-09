// import React from 'react'

// const SignUp = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default SignUp


import React, { useState } from "react";

const SignUp = () => {
  const [agency, setAgency] = useState("yes");

  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-100">
      
      {/* Mobile Container */}
      <div className="w-[375px] h-screen bg-gray-200 flex flex-col justify-between p-4">
        
        {/* Form Section */}
        <div className="space-y-4">
          
          <h2 className="text-2xl tracking-wider  font-bold text-black">
            Create your PopX account
          </h2>

          {/* Name */}
          <div>
            <label className="text-sm text-purple-600 font-semibold">
              Full Name*
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full mt-1 p-2 rounded-md border outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm text-purple-600 font-semibold">
              Phone number*
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full mt-1 p-2 rounded-md border outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-purple-600 font-semibold">
              Email address*
            </label>
            <input
              type="email"
              placeholder="Marry Doe"
              className="w-full mt-1 p-2 rounded-md border outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-purple-600 font-semibold">
              Password*
            </label>
            <input
              type="password"
              placeholder="Marry Doe"
              className="w-full mt-1 p-2 rounded-md border outline-none"
            />
          </div>

          {/* Company */}
          <div>
            <label className="text-sm text-purple-600 font-semibold">
              Company name
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="w-full mt-1 p-2 rounded-md border outline-none"
            />
          </div>

          {/* Radio Buttons */}
          <div>
            <p className="text-sm font-semibold">
              Are you an Agency?*
            </p>

            <div className="flex items-center gap-6 mt-2">
              
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="yes"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                  className="accent-purple-600"
                />
                Yes
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="agency"
                  value="no"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                  className="accent-purple-600"
                />
                No
              </label>

            </div>
          </div>

        </div>

        {/* Bottom Button */}
        <button className="w-full h-12 rounded-md bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold">
          Create Account
        </button>

      </div>
    </div>
  );
};

export default SignUp;