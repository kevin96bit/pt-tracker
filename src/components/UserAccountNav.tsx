"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

const UserAccountNav = () => {
  return (
    <Button
      className="text-2xl"
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: "/accedi",
        })
      }
    >
      Logout
    </Button>
  );
};

export default UserAccountNav;
