"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { CiLogin } from "react-icons/ci";

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
      Logout <CiLogin />
    </Button>
  );
};

export default UserAccountNav;
