// import NavBar from "@/components/NavBar";
import { FC, ReactNode } from "react";

interface AuthlayoutProps {
  children: ReactNode;
}

const Authlayout: FC<AuthlayoutProps> = ({ children }) => {
  return (
    <div className="bg-gradient-to-b  h-screen flex items-center justify-center">
      <div className="bg-gradient-to-b from-blue-200 to-slate-300 p-10 border border-blue-300 rounded-md">{children}</div>
    </div>
  );
};

export default Authlayout;
