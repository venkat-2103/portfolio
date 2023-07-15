import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const handleClick = () => {
    router.push("");
  };
  const handleclick = () => {
    router.push("/screens/Signin");
  };
  return (
    <div class="shadow-md fixed font-sans bg-blue-300 w-full h-24">
      <div class="p-4">
        <Link href="/">
          <Image src="/port.png" alt="My Image" width={140} height={90} />
        </Link>
      </div>
      <div class=" font-sans text-lg text-black p-8 flex flex-row space-x-4 top-right-div absolute top-0 right-0">
      <input type="text" placeholder="Search..." />
      <button
          onClick={handleClick}
          className="bg-black hover:bg-slate-700 text-white py-1 px-4 rounded"
        >
          Search
        </button>
        <button
          onClick={handleclick}
          className="bg-black hover:bg-slate-700 text-white py-1 px-4 rounded"
        >
          Sign In
        </button>
        <Link href="/screens/About">About</Link>
        <Link href="/screens/Project">Projects</Link>
        <Link href="/screens/Profile">Profile</Link>
      </div>
    </div>
  );
}
export default Header;
