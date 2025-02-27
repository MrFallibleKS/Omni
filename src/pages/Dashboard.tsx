import { UserButton, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Chatbot from "@components/Chatbot";

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <UserButton afterSignOutUrl="/" />
      
      <Chatbot />

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default Dashboard;
