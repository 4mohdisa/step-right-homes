import React from 'react';
import Link from 'next/link';
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '@/lib/constants';
import Container from '@/components/ui/Container';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Step Right </span>
              <span className="text-primary-yellow">Homes</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Professional residential property maintenance services in South Australia.
            </p>
            <div className="text-gray-300 space-y-2">
              <p>ABN: {COMPANY_INFO.abn}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-yellow">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-yellow">Our Services</h4>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-gray-300 hover:text-primary-yellow transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary-yellow">Contact Us</h4>
            <div className="text-gray-300 space-y-2">
              <p>{COMPANY_INFO.address}</p>
              <p>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="hover:text-primary-yellow transition-colors duration-300"
                >
                  {COMPANY_INFO.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-primary-yellow transition-colors duration-300"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 text-center text-gray-400">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
