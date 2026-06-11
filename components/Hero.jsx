import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-20 bg-gray-100 text-gray-800">
      <h1 className="text-5xl font-bold">
        Welcome to DripZone
      </h1>

      <p className="mt-4 text-lg">
        Discover the latest fashion trends.
      </p>

      <Link href="/dashboard">
        <button className="mt-6 bg-black text-white px-6 py-3 rounded-lg">
          Shop Now
        </button>
      </Link>
    </section>
  );
}