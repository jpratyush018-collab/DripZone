"use client";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      {/* Featured Products */}
      <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h2
          className="
            text-5xl
            font-extrabold
            text-center
            mb-12
            bg-gradient-to-r
            from-purple-600
            to-pink-500
            bg-clip-text
            text-transparent
          "
        >
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          <Card
            title="Oversized Hoodie"
            description="Premium quality oversized hoodie for everyday style."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EB3bKwwOjiFQQZsmFMMVs448boLHQnfzEw&s"
          />

          <Card
            title="Classic Sneakers"
            description="Comfortable sneakers designed for all-day wear."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1GZCOuprRlQt9EWst8hivWw57oUfuZvO4A&s"
          />

          <Card
            title="Graphic T-Shirt"
            description="Trendy graphic tees made from soft cotton."
            image="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
          />

          <Card
            title="Denim Jacket"
            description="Stylish denim jackets for every season."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSernXfKh5R3fbgCGJjHT-h5NEsOnawPG0scg&s"
          />

          <Card
            title="Cargo Pants"
            description="Modern fit cargo pants with utility pockets."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09PtMCRo07or2wgXyA-nmSuQyl_C-6nXosA&s"
          />

          <Card
            title="Sports Cap"
            description="Minimal and comfortable cap for daily use."
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnF9Tfd9rwt3DNkT1_phQPuKr0GJMzvi4BEw&s"
          />
        </div>
      </section>

      {/* Why Choose DripZone */}
      <section
        className="py-20 text-white text-center bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/img.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold mb-12">
            Why Choose DripZone?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 px-10">
            <div>
              <h3 className="text-3xl font-semibold">
                Premium Quality
              </h3>
              <p className="mt-3 text-gray-300">
                Carefully selected products with the best quality materials.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Fast Delivery
              </h3>
              <p className="mt-3 text-gray-300">
                Quick and reliable shipping across the country.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold">
                Trendy Collection
              </h3>
              <p className="mt-3 text-gray-300">
                Stay updated with the latest fashion trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
