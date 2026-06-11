import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

  {/*Feature Product section*/} 
  <section className="py-12 px-6">
    <h2 className="text-4xl font-bold text-center mb-10">Featured Product</h2>

    <div className="flex flex-wrap justify-center gap-8">
      <Card title="Oversized Hoodie" 
      description={"Premium quality oversizes hoodie for everydayt style" }
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0EB3bKwwOjiFQQZsmFMMVs448boLHQnfzEw&s"/>

      <Card title="Classic Sneakers"
      description="Comfortable Sneaker Designed for all day wear"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1GZCOuprRlQt9EWst8hivWw57oUfuZvO4A&s"/>
      
      <Card title="Graphic T-Shirt"
      description="Trendy Graphic tees made of soft cotton."
      image="data:image/jpeg;base64,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"/>

      <Card title="Denim Jackets"
      description="Stylish Denim Jackets for every season."
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSernXfKh5R3fbgCGJjHT-h5NEsOnawPG0scg&s"/>

      <Card title="Cargo Pants"
      description="Modern fit cargo pants with utility pocket"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09PtMCRo07or2wgXyA-nmSuQyl_C-6nXosA&s"/>

      <Card title="Sports Cap"
      description="Minimal and comfortable cap for daily use"
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnF9Tfd9rwt3DNkT1_phQPuKr0GJMzvi4BEw&s"/>
    </div>
    
  </section>

  <section
  className="py-20 text-white text-center bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/images/img.jpg')",
  }}
>
  {/* Dark Overlay */}
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