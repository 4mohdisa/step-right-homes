'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            <span className="text-black">Step Right </span>
            <span className="text-primary-yellow">Homes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-primary-yellow transition-colors duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button variant="primary" size="sm">
              <a href={COMPANY_INFO.phoneHref}>{COMPANY_INFO.phone}</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col space-y-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-black hover:text-primary-yellow transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="primary" size="sm" fullWidth>
                <a href={COMPANY_INFO.phoneHref}>{COMPANY_INFO.phone}</a>
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;
