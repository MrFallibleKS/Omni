import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import React = require("react");

const Home = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Welcome to Omni</h1>
      <p className="text-lg mt-2">AI-Powered Blockchain Agent</p>

      <SignedOut>
        <SignInButton mode="modal">
          <button className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
            Sign In
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <a href="/dashboard" className="mt-4 px-6 py-2 bg-green-600 rounded-lg hover:bg-green-700">
          Go to Dashboard
        </a>
      </SignedIn>
    </div>
  );
};

export default Home;
