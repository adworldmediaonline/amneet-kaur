import PropertyCard from './PropertyCard';

interface Listing {
  id: string;
  price: string;
  address: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  isRecent?: boolean;
  daysAgo?: number;
}

interface ListingsSectionProps {
  title: string;
  listings: Listing[];
}

export default function ListingsSection({
  title,
  listings,
}: ListingsSectionProps) {
  const redirectUrl =
    'https://www.realtor.ca/agent/2201704/amneet-kaur-700-1816-crowchild-trail-nw-calgary-alberta-t2m3y7';

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {listings.map(listing => (
            <PropertyCard
              key={listing.id}
              price={listing.price}
              address={listing.address}
              bedrooms={listing.bedrooms}
              bathrooms={listing.bathrooms}
              squareFeet={listing.squareFeet}
              imageUrl={listing.imageUrl}
              isRecent={listing.isRecent}
              daysAgo={listing.daysAgo}
            />
          ))}
        </div>

        <div className="text-center">
          <a
            href={redirectUrl}
            className="inline-flex items-center px-8 py-3 bg-blue-600 !text-white rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            View All
          </a>
        </div>
      </div>
    </section>
  );
}
