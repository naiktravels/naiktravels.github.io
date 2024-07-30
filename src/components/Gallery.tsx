import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  location: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

const Gallery: React.FC<GalleryProps> = ({ items }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left'
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        >
          ←
        </button>
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              className="cursor-pointer flex-shrink-0 w-64 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <motion.img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div className="p-4 bg-white">
                <h3 className="text-lg font-semibold text-gray-800">{item.location}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
        >
          →
        </button>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selectedId}
              className="bg-white rounded-lg overflow-hidden max-w-3xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {items.find((item) => item.id === selectedId) && (
                <>
                  <img
                    src={items.find((item) => item.id === selectedId)!.src}
                    alt={items.find((item) => item.id === selectedId)!.alt}
                    className="w-full h-auto max-h-[70vh] object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">
                      {items.find((item) => item.id === selectedId)!.location}
                    </h2>
                    <p className="text-gray-600">
                      Additional details about the location can go here...
                    </p>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
