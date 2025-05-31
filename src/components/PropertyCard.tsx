import Image from 'next/image';

interface PropertyCardProps {
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  isRecent?: boolean;
  daysAgo?: number;
}

export default function PropertyCard({
  price,
  address,
  bedrooms,
  bathrooms,
  squareFeet,
  imageUrl,
  isRecent = false,
  daysAgo,
}: PropertyCardProps) {
  const redirectUrl =
    'https://www.realtor.ca/agent/2201704/amneet-kaur-700-1816-crowchild-trail-nw-calgary-alberta-t2m3y7';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <button
          className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors"
          aria-label="Add to favorites"
        >
          <svg
            className="w-5 h-5 text-gray-400 hover:text-red-500"
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

        <a href={redirectUrl} className="block">
          <div className="aspect-[4/3] bg-gray-200 relative">
            <Image
              src={imageUrl}
              alt={`Property at ${address}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
        </a>
      </div>

      <div className="p-4">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-blue-600 mb-1">{price}</h3>
          <p className="text-sm text-gray-600">{address}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span>{bedrooms}</span>
              <span className="text-xs">Bedrooms</span>
            </div>

            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{bathrooms}</span>
              <span className="text-xs">Bathrooms</span>
            </div>

            <div className="flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{squareFeet.toLocaleString()}</span>
              <span className="text-xs">Square Feet</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-6 relative bg-white border border-gray-200 rounded flex items-center justify-center overflow-hidden">
              <Image
                src="/images/exp.jpg"
                alt="eXp Realty"
                width={40}
                height={24}
                className="object-contain"
              />
            </div>
            <span className="text-xs text-gray-500">eXp Realty</span>
          </div>

          {isRecent && daysAgo && (
            <div className="flex items-center space-x-1 text-xs text-gray-500">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{daysAgo} days ago</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
