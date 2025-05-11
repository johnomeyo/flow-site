'use client';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const currentPath = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const handleNavLinkClick = (path: string) => {
    router.push(path);
    setIsMenuOpen(false); // Close menu after navigating
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors";
    const activeClasses = "text-blue-600 font-semibold";
    const inactiveClasses = "text-gray-700 hover:text-blue-600";
    
    return `${baseClasses} ${currentPath === path ? activeClasses : inactiveClasses}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <div
          onClick={() => handleNavLinkClick('/')}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <div className="h-8 w-8 rounded-full" style={{ backgroundColor: '#0674B4' }}></div>
          <span className="font-bold text-2xl" style={{ color: '#0674B4' }}>Flow</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/entrepreneurs" className={getLinkClasses('/entrepreneurs')}>
            For Entrepreneurs
          </Link>
          <Link href="/investors" className={getLinkClasses('/investors')}>
            For Investors
          </Link>
          <Link href="/about" className={getLinkClasses('/about')}>
            About
          </Link>
          <Link href="/contact" className={getLinkClasses('/contact')}>
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 p-4">
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavLinkClick('/entrepreneurs')}
              className={`text-left py-2 ${getLinkClasses('/entrepreneurs')}`}
            >
              For Entrepreneurs
            </button>
            <button
              onClick={() => handleNavLinkClick('/investors')}
              className={`text-left py-2 ${getLinkClasses('/investors')}`}
            >
              For Investors
            </button>
            <button
              onClick={() => handleNavLinkClick('/about')}
              className={`text-left py-2 ${getLinkClasses('/about')}`}
            >
              About
            </button>
            <button
              onClick={() => handleNavLinkClick('/contact')}
              className={`text-left py-2 ${getLinkClasses('/contact')}`}
            >
              Contact
            </button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;