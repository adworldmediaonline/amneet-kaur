import Image from 'next/image';

export default function ProfileSection() {
  const redirectUrl =
    'https://www.realtor.ca/agent/2201704/amneet-kaur-700-1816-crowchild-trail-nw-calgary-alberta-t2m3y7';

  return (
    <section className="bg-white py-4 sm:py-6 lg:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Amneet Kaur
          </h1>
          <button
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            aria-label="Share profile"
          >
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
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
              />
            </svg>
            <span className="text-sm hidden sm:block">Share</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <div className="flex-shrink-0 mx-auto sm:mx-0">
              <div className="w-32 h-40 sm:w-40 sm:h-52 lg:w-48 lg:h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                <Image
                  src="/images/proile.jpg"
                  alt="Amneet Kaur - Professional Real Estate Agent"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                Amneet Kaur
              </h2>
              <p className="text-gray-600 mb-3 sm:mb-4">Associate</p>

              <div className="space-y-1 sm:space-y-2 text-sm text-gray-700 mb-4 sm:mb-6">
                <p>700 - 1816 Crowchild</p>
                <p>Trail NW</p>
                <p>CALGARY, Alberta</p>
                <p>T2M3Y7</p>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">514-662-3863</span>
                </div>

                <div className="flex items-center justify-center sm:justify-start space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">403-648-2765</span>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
                <a
                  href={redirectUrl}
                  className="inline-flex items-center px-4 sm:px-6 py-2 bg-blue-600 !text-white rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="lg:pl-8 mt-6 lg:mt-0">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6">
              <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                <div className="w-12 h-8 sm:w-16 sm:h-10 relative bg-white border border-gray-200 rounded flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/exp.jpg"
                    alt="eXp Realty"
                    width={48}
                    height={32}
                    className="object-contain sm:w-16 sm:h-10"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                    eXp Realty
                  </h3>
                </div>
              </div>

              <div className="space-y-1 sm:space-y-2 text-sm text-gray-700 mb-3 sm:mb-4">
                <p>700 - 1816 Crowchild Trail NW</p>
                <p>CALGARY, Alberta T2M3Y7</p>
              </div>

              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">403-262-7653</span>
                </div>

                <div className="flex items-center space-x-2">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-sm">403-648-2765</span>
                </div>
              </div>

              <div>
                <a
                  href={redirectUrl}
                  className="inline-flex items-center px-4 sm:px-6 py-2 bg-blue-600 !text-white rounded-md hover:bg-blue-700 transition-colors font-medium w-full justify-center text-sm"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-8 sm:mt-10 lg:mt-12">
          <div className="bg-gray-50 rounded-lg p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              About Me
            </h3>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Hi, I'm Amneet Kaur — your Calgary real estate partner.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Buying or selling a home is more than just a transaction — it's
                a major life moment, and I treat it with the care it deserves.
                Whether you're searching for your first condo, upsizing for your
                growing family, or investing in the future, I'll be by your side
                to guide, support, and advocate for you.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                I've spent years exploring Calgary's communities — understanding
                not just the housing market, but the heart and energy of each
                neighborhood. It's important to me that you don't just find a
                property, but a place that truly feels like home.
              </p>
              <p className="text-gray-700 leading-relaxed">
                My clients know me as someone who listens deeply, communicates
                honestly, and follows through on every detail. I believe that
                real estate should feel personal, not pressured. Every client I
                work with becomes part of a journey we take together — and your
                success genuinely matters to me.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
