export default function Footer() {
  const redirectUrl =
    'https://www.realtor.ca/agent/2201704/amneet-kaur-700-1816-crowchild-trail-nw-calgary-alberta-t2m3y7';

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">Find an Agent</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Create an Account
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Professional Resources
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Tips for Buyers
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Tips for Sellers
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Canada Real Estate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Real Estate Blog</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Market Updates
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  About CREA
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Code of Ethics
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Community Care
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Send Feedback</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms of Use
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href={redirectUrl}
                  className="hover:text-gray-300 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div>
              <h4 className="font-semibold mb-4">Download our Mobile App</h4>
              <div className="flex space-x-4">
                <a href={redirectUrl} className="inline-flex items-center">
                  <img
                    src="/images/apple_app_store.svg"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>

                <a href={redirectUrl} className="inline-flex items-center">
                  <img
                    src="/images/google_play_v2.png"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <div className="flex space-x-4">
                <a
                  href={redirectUrl}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href={redirectUrl}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>

                <a
                  href={redirectUrl}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.596-3.205-1.529-.75-.924-1.171-2.137-1.171-3.41 0-1.272.421-2.485 1.171-3.41.757-.933 1.908-1.529 3.205-1.529s2.448.596 3.205 1.529c.75.925 1.171 2.138 1.171 3.41 0 1.273-.421 2.486-1.171 3.41-.757.933-1.908 1.529-3.205 1.529z" />
                  </svg>
                </a>

                <a
                  href={redirectUrl}
                  className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  aria-label="Pinterest"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm text-gray-400">
            <div className="text-center lg:text-left">
              <span>
                Trusted listings from professional real estate agents. All
                property information is provided for general information
                purposes only.
              </span>
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-gray-500">
            <div>
              © 2024 Amneet Kaur Real Estate. All rights reserved. Professional
              real estate services in Calgary, Alberta.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
