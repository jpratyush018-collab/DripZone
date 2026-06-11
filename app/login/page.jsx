import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="bg-gray-900 p-8 rounded-xl shadow-lg w-full max-w-md">

          <h1 className="text-4xl font-bold text-white text-center mb-6">
            Login
          </h1>

          <form className="space-y-4">

            <div>
              <label className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded font-semibold hover:bg-gray-200"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
            <a href="#" className="text-white hover:underline">
              Sign Up
            </a>
          </p>

        </div>
      </div>

      <Footer />
    </>
  );
}