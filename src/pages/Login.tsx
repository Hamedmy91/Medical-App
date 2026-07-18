import { useState } from "react";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="flex justify-center items-center mt-10 mb-20">
      <div className="border border-gray-200 rounded-xl w-88 p-6 flex flex-col gap-4 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-700">
          {showLogin ? "Login" : "Create Account"}
        </h1>

        <p className="text-sm text-gray-500">
          {showLogin
            ? "Please login to book appointment"
            : "Please sign up to book appointment"}
        </p>

        {!showLogin && (
          <div className="w-full">
            <label className="text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 mt-1"
            />
          </div>
        )}

        <div className="w-full">
          <label className="text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>

        <div className="w-full">
          <label className="text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-md p-2 mt-1"
          />
        </div>
        <button className="w-full bg-[#5f6fff] text-white rounded-md py-3 font-medium">
          {showLogin ? "Login" : "Create Account"}
        </button>
        <p className="text-sm text-gray-600">
          {showLogin ? (
            <>
              Create a new account?{" "}
              <span
                onClick={() => setShowLogin(false)}
                className="text-[#5f6fff] cursor-pointer underline"
              >
                Click here
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setShowLogin(true)}
                className="text-[#5f6fff] cursor-pointer underline"
              >
                Login here
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
