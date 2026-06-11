import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black text-white">

        {/* Hero Section */}
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold">
            About DripZone
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
            DripZone is a modern fashion platform designed for people who
            love trendy clothing, premium quality products, and a seamless
            shopping experience.
          </p>
        </section>

        {/* Mission Section */}
        <section className="max-w-6xl mx-auto px-8 py-12">
          <h2 className="text-3xl font-bold mb-6">
            Our Mission
          </h2>

          <p className="text-gray-300 leading-8">
            Our mission is to bring the latest fashion trends to everyone
            while maintaining quality, affordability, and customer
            satisfaction. We believe fashion is a way to express
            individuality and confidence.
          </p>
        </section>

        {/* Features Section */}
        <section className="max-w-6xl mx-auto px-8 py-12">
          <h2 className="text-3xl font-bold mb-10">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold">
                Premium Quality
              </h3>
              <p className="mt-3 text-gray-400">
                Carefully selected products with top-quality materials.
              </p>
            </div>

            <div className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold">
                Fast Delivery
              </h3>
              <p className="mt-3 text-gray-400">
                Quick and reliable shipping across the country.
              </p>
            </div>

            <div className="border border-gray-700 p-6 rounded-lg">
              <h3 className="text-2xl font-semibold">
                Latest Trends
              </h3>
              <p className="mt-3 text-gray-400">
                Stay updated with the newest fashion collections.
              </p>
            </div>

          </div>
        </section>

        {/* Team Section */}
        <section className="text-center py-16">
          <h2 className="text-3xl font-bold">
            Built By
          </h2>

          <p className="mt-4 text-gray-400">
            Created by Pratyush Joshi as part of the TBI-GEU Internship Program.
          </p>
        </section>

      </div>

      <Footer />
    </>
  );
}