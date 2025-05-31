'use client';

import { useState } from 'react';

export default function Header() {
  const redirectUrl =
    'https://www.realtor.ca/agent/2201704/amneet-kaur-700-1816-crowchild-trail-nw-calgary-alberta-t2m3y7';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-8">
            <a
              href={redirectUrl}
              className="flex items-center space-x-2"
              aria-label="Amneet Kaur Real Estate"
            >
              <div className="text-xl font-bold">Amneet Kaur</div>
            </a>

            <nav
              className="hidden lg:flex items-center space-x-6"
              role="navigation"
            >
              <a
                href={redirectUrl}
                className="hover:opacity-80 transition-opacity text-sm"
              >
                Find a Home
              </a>
              <div className="relative group">
                <a
                  href={redirectUrl}
                  className="hover:opacity-80 transition-opacity flex items-center text-sm"
                >
                  Find an Agent
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a
                  href={redirectUrl}
                  className="hover:opacity-80 transition-opacity flex items-center text-sm"
                >
                  Mortgage Calculators
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
              <div className="relative group">
                <a
                  href={redirectUrl}
                  className="hover:opacity-80 transition-opacity flex items-center text-sm"
                >
                  Blog
                  <svg
                    className="ml-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </nav>
          </div>

          <div className="flex items-center space-x-2 lg:space-x-4">
            <div className="hidden lg:flex items-center space-x-2">
              <button className="flex items-center space-x-1 hover:opacity-80 transition-opacity">
                <span className="text-sm">CAD</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <a
                href={redirectUrl}
                className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
              >
                <div className="bg-white text-blue-900 rounded-full w-8 h-8 flex items-center justify-center">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-sm">Sign in</span>
              </a>

              <div className="flex items-center space-x-2">
                <div className="bg-white text-blue-900 rounded-full w-6 h-6 flex items-center justify-center">
                  <span className="text-xs font-bold">FR</span>
                </div>
                <span className="text-xs">FR</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-blue-800 rounded transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
              <button className="p-2 relative hover:bg-blue-800 rounded transition-colors">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-white text-blue-900 text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">
                  0
                </span>
              </button>

              <button
                className="lg:hidden p-2 hover:bg-blue-800 rounded transition-colors"
                aria-label="Menu"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-blue-900 border-t border-blue-800">
            <div className="px-4 py-2 space-y-1">
              <a
                href={redirectUrl}
                className="block px-3 py-2 text-sm hover:bg-blue-800 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find a Home
              </a>
              <a
                href={redirectUrl}
                className="block px-3 py-2 text-sm hover:bg-blue-800 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find an Agent
              </a>
              <a
                href={redirectUrl}
                className="block px-3 py-2 text-sm hover:bg-blue-800 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Mortgage Calculators
              </a>
              <a
                href={redirectUrl}
                className="block px-3 py-2 text-sm hover:bg-blue-800 rounded transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
              <div className="border-t border-blue-800 mt-2 pt-2">
                <a
                  href={redirectUrl}
                  className="block px-3 py-2 text-sm hover:bg-blue-800 rounded transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign in
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
