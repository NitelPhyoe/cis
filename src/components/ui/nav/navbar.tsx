import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

function NavBar() {
  return (
    <div className="flex bg-transparent backdrop-blur-sm -z-50 border-b-gray-600 border border-r-2">
      <div className="flex  items-center space-x-3">
        <h1 className="text-gray-700-500 text-lg font-bold italic ">CIS</h1>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link
          href="/examples/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Overview
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
