import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            DripZone
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          Discover the latest fashion trends and elevate your style.
        </p>

        <Link href="/dashboard">
          <button className="mt-8 px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition duration-300 shadow-lg hover:shadow-purple-500/50">
            Shop Now
          </button>
        </Link>
      </div>
    </section>
  );
}
