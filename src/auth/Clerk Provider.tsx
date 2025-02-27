import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import React from "react";

const clerkPubKey = "YOUR_CLERK_PUBLISHABLE_KEY"; // Get from Clerk dashboard

const AuthWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      {children}
    </ClerkProvider>
  );
};

export default AuthWrapper;
