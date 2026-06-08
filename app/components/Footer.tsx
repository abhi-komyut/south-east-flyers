import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo.png"
              alt="South East Flyers and Marketing Solutions"
              width={200}
              height={53}
              className="h-12 w-auto mb-3 invert"
            />
            <p className="text-gray-300 text-sm">
              Professional letterbox distribution services across Melbourne and Sydney.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-white transition-colors">Our Clients</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Melbourne Metropolitan</li>
              <li>Sydney Metropolitan</li>
              <li>South East Melbourne</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} South East Flyers & Marketing Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
