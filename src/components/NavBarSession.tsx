import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { Button } from "./ui/button";

const NavBarSession = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      {session?.user ? (
        <UserAccountNav />
      ) : (
        <Link href="/accedi">
          <Button className="text-2xl">
            Login <CiLogin />
          </Button>
        </Link>
      )}
    </div>
  );
};

export default NavBarSession;

