import Header from '@/components/Header';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProfileSection from '@/components/ProfileSection';
import ListingsSection from '@/components/ListingsSection';
import Footer from '@/components/Footer';

export default function Home() {
  const amneetListings = [
    {
      id: '1',
      price: '$745,000',
      address: '244 SAVANNA Way NE, Calgary, Alberta',
      bedrooms: 3,
      bathrooms: 3,
      squareFeet: 2013,
      imageUrl: '/images/listing1.webp',
    },
    {
      id: '2',
      price: '$599,999',
      address: '47 Martindale Court NE, Calgary, Alberta',
      bedrooms: 3,
      bathrooms: 4,
      squareFeet: 1075,
      imageUrl: '/images/listing2.webp',
      isRecent: true,
      daysAgo: 6,
    },
    {
      id: '3',
      price: '$299,990',
      address: '117, 7110 80 Avenue NE, Calgary, Alberta',
      bedrooms: 2,
      bathrooms: 1,
      squareFeet: 760,
      imageUrl: '/images/listing3.webp',
    },
    {
      id: '4',
      price: '$669,000',
      address: '102 Edith Green NW, Calgary, Alberta',
      bedrooms: 3,
      bathrooms: 3,
      squareFeet: 1593,
      imageUrl: '/images/listing4.webp',
    },
  ];

  const officeListings = [
    {
      id: '5',
      price: '$355,000',
      address: '1102, 175 Silverado Boulevard SW, Calgary, Alberta',
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 743,
      imageUrl: '/images/listing5.jpg',
    },
    {
      id: '6',
      price: '$400,000',
      address: '202, 25 Walgrove Walk SE, Calgary, Alberta',
      bedrooms: 2,
      bathrooms: 2,
      squareFeet: 984,
      imageUrl: '/images/listing6.jpg',
    },
    {
      id: '7',
      price: '$899,999',
      address: '2006 30 Avenue SW, Calgary, Alberta',
      bedrooms: 2,
      bathrooms: 1,
      squareFeet: 999,
      imageUrl: '/images/listing7.jpg',
    },
    {
      id: '8',
      price: '$399,900',
      address: '1407, 530 3 Street SE, Calgary, Alberta',
      bedrooms: 1,
      bathrooms: 1,
      squareFeet: 633,
      imageUrl: '/images/listing8.jpg',
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Breadcrumbs />
      <ProfileSection />
      <ListingsSection title="Amneet's Listings" listings={amneetListings} />
      <ListingsSection title="Office Listings" listings={officeListings} />
      <Footer />
    </main>
  );
}
