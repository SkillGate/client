import Image from "next/image";

const HeroBox = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="max-w-sm w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1682925280/medicare/5138237_cxwnoe.jpg"
            alt="Card 1"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Card 1 Title</h3>
            <p className="mt-2 text-gray-600">Card 1 Description goes here.</p>
          </div>
        </div>
      </div>

      <div className="max-w-sm w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1682925280/medicare/5138237_cxwnoe.jpg"
            alt="Card 2"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Card 2 Title</h3>
            <p className="mt-2 text-gray-600">Card 2 Description goes here.</p>
          </div>
        </div>
      </div>

      <div className="max-w-sm w-full md:w-1/2 lg:w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1682925280/medicare/5138237_cxwnoe.jpg"
            alt="Card 3"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Card 3 Title</h3>
            <p className="mt-2 text-gray-600">Card 3 Description goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
