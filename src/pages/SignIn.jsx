
import React from "react";
const SignIn = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-gray-100">
      <div className="w-[375px] h-screen bg-gray-200 flex flex-col p-5">
        <div className="space-y-4 mt-6">
          
          <h2 className="text-2xl w-52  font-bold text-black leading-7">
            Signin to your PopX account
          </h2>

          <p className="text-gray-500 w-60  text-sm  leading-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Email */}
          <div>
            <label className="text-sm text-purple-600 font-semibold">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full mt-1 p-2 rounded-md border outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-purple-600 font-semibold">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full mt-1 p-2 rounded-md border outline-none"
            />
          </div>
          <button className="w-full h-11 rounded-md bg-gray-300 text-white font-semibold mt-2 cursor-not-allowed">
            Login
          </button>

        </div>

      </div>
    </div>
  );
};

export default SignIn;