export default function Footer() {
  return (
    <footer  className="bg-black text-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">

          {/*Brand Secti0on*/}
          <div>
            <h2 className="text-2xl font-bold">DripZone</h2>
            <p className="mt-3 text-gray-400">You one-stop destination for trendy fashion and premium cloathing</p>
          </div>

          {/*Quick Links*/}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
               <li><a href="/home" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/dashboard" className="hover:text-gray-300">Dashboard</a></li>
              <li><a href="/login" className="hover:text-gray-300">Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p className="mt-3 text-gray-400">
              📧 support@dripzone.com
            </p>
            <p className="text-gray-400">
              📞 +91 98765 43210
            </p>
            <p className="text-gray-400">
              📍 India
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © 2026 DripZone. All Rights Reserved.
        </div>
        
      </div>
    </footer>
  );
}