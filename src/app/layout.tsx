import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeTooggle';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-white">
        
        
        <main className="container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}