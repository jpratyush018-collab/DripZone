import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center"> 
    
    {/*LOGO*/}
    <h1 className="text-2xl font-bold">DripZone</h1>

    {/*Navigation Links*/}
    <div className="flex gap-6">
      <Link href="/" className="hover:text-grey-300">Home</Link>
      <Link href="/about" className="hover:text-grey-300">About</Link>
      <Link href="/dashboard" className="hover:text-grey-300">Dashboard</Link>
      <Link href="/login" className="hover:text-grey-300">Login</Link>
    </div>
    <button classsname="bg-white text-black px-4 py-2 rounded-lg hover:bg-grey-200">Profile</button>
  </nav>
  );
}