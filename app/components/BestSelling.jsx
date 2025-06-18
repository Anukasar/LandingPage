'use client';
import { useRef } from 'react';

const products = [
  { id: 1, name: 'Luxury Watch', image: '/images/watch.jpg' },
  { id: 2, name: 'Designer Bag', image: '/images/bag.jpg' },
  { id: 3, name: 'Premium Shoes', image: '/images/shoes.webp' },
];

export default function BestSelling() {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    const scrollAmount = direction === 'left' ? -250 : 250;
    sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">Best Selling Products</h2>

      <div className="relative">
        {/* Horizontal product slider */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-4 scroll-smooth no-scrollbar justify-center"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] bg-white p-4 rounded-xl shadow-md flex-shrink-0"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-40 w-full object-cover rounded mb-4"
              />
              {/* Product Name */}
              <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
              {/* Action Button */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md transition duration-300">
                View Product
              </button>
            </div>
          ))}
        </div>

        {/* Navigation Buttons (Visible only on Mobile & Tablet) */}
        <div className="flex justify-between mt-4 md:hidden">
          <button
            onClick={() => slide('left')}
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
          >
            ◀
          </button>
          <button
            onClick={() => slide('right')}
            className="bg-gray-300 hover:bg-gray-400 p-2 rounded-full"
          >
            ▶
          </button>
        </div>
      </div>
    </section>
  );
}
