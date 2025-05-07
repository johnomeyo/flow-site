'use client'

import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-6 w-6 rounded-full" style={{ backgroundColor: '#0674B4' }}></div>
              <span className="font-bold text-xl text-white">Flow</span>
            </div>
            <p className="text-sm">
              Connecting entrepreneurs with investors to create successful business partnerships.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/entrepreneurs" className="hover:text-blue-400 transition-colors">For Entrepreneurs</Link></li>
              <li><Link href="/investors" className="hover:text-blue-400 transition-colors">For Investors</Link></li>
              <li><Link href="/success-stories" className="hover:text-blue-400 transition-colors">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Flow. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Social Icons */}
            {[
              { name: 'Twitter', href: '#', icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0..." />
                </svg>) },
              { name: 'LinkedIn', href: '#', icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19 0h-14c..." clipRule="evenodd" />
                </svg>) },
              { name: 'Instagram', href: '#', icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2..." clipRule="evenodd" />
                </svg>) }
            ].map(({ name, href, icon }) => (
              <a key={name} href={href} className="text-gray-400 hover:text-white transition-colors" aria-label={name}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
