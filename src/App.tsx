import React from "react"; // Required for JSX
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ClerkProvider, SignedIn, SignedOut, SignIn, SignUp } from "@clerk/clerk-react";

import Home from "@pages/Home"; 
import Dashboard from "@pages/Dashboard";
import Chatbot from "@components/Chatbot";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  console.error("❌ Missing Clerk Publishable Key! Check your .env file.");
}

const App = () => {
  return (
 //   <ClerkProvider publishableKey={clerkPubKey}>
 //     <Router>
  //      <Routes>
 //         <Route path="/" element={<Home />} />
  //        <Route path="/dashboard" element={<SignedIn><Dashboard /></SignedIn>} />
  //        <Route path="/sign-in" element={<SignedOut><SignIn /></SignedOut>} />
   //       <Route path="/sign-up" element={<SignedOut><SignUp /></SignedOut>} />
  //      </Routes>
  //    </Router>
  <Chatbot />
  //  </ClerkProvider>
  );
};

export default App;
