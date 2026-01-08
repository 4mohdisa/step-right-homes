import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Step Right Homes | Professional Property Maintenance in SA',
  description: 'Step Right Homes provides professional residential property maintenance services including fencing, roofing, electrical, and plumbing works in South Australia.',
  keywords: ['property maintenance', 'fencing', 'roofing', 'electrical', 'plumbing', 'South Australia', 'residential maintenance'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
