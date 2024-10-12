import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-emerald-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">BizBuild</h2>
            <p className="text-emerald-200">Empowering the next generation of entrepreneurs</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-emerald-300 transition-colors">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-emerald-300 transition-colors">Our Programs</Link></li>
              <li><Link href="/get-involved" className="hover:text-emerald-300 transition-colors">Get Involved</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-300 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="hover:text-emerald-300 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-300 transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-emerald-300 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-emerald-300 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                <span className="sr-only">Instagram</span>
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-300 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-emerald-700 text-center text-emerald-200">
          <p>&copy; {new Date().getFullYear()} BizBuild. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}