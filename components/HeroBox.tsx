import Image from "next/image";

const HeroBox = () => {
  return (
    <div className="flex flex-wrap justify-center py-24 sm:py-32">
      <div className="hero__box-container">
        <div className="hero__box-card-container">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1682925280/medicare/5138237_cxwnoe.jpg"
            alt="Card 1"
            className="hero__box-card-image"
          />
          <div className="p-4">
            <h3 className="hero__box-card-title">Card 1 Title</h3>
            <p className="hero__box-card-description">Card 1 Description goes here.</p>
          </div>
        </div>
      </div>

      <div className="hero__box-container">
        <div className="hero__box-card-container">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1682925280/medicare/5138237_cxwnoe.jpg"
            alt="Card 2"
            className="hero__box-card-image"
          />
          <div className="p-4">
            <h3 className="hero__box-card-title">Card 2 Title</h3>
            <p className="hero__box-card-description">Card 2 Description goes here.</p>
          </div>
        </div>
      </div>

      <div className="hero__box-container">
        <div className="hero__box-card-container">
          <img
            src="https://res.cloudinary.com/midefulness/image/upload/v1682925280/medicare/5138237_cxwnoe.jpg"
            alt="Card 3"
            className="hero__box-card-image"
          />
          <div className="p-4">
            <h3 className="hero__box-card-title">Card 3 Title</h3>
            <p className="hero__box-card-description">Card 3 Description goes here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBox;
