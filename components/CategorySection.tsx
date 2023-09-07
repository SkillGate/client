import React from "react";

const CategorySection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8">Explore Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Category Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Category 1</h3>
            <p className="text-gray-600">
              Description of Category 1 goes here.
            </p>
          </div>

          {/* Category Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Category 2</h3>
            <p className="text-gray-600">
              Description of Category 2 goes here.
            </p>
          </div>

          {/* Category Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Category 3</h3>
            <p className="text-gray-600">
              Description of Category 3 goes here.
            </p>
          </div>

          {/* Add more category cards as needed */}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
