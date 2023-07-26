const Hero = () => {
  return (
    <section className="hero_wrapper bg-white h-screen">
      <div className=" mx-auto flex flex-col-reverse lg:flex-row justify-center items-center">
        <div className="w-full lg:w-2/4 h-[50vh] flex items-center px-4 lg:px-20 py-4">
          <h5 className="text-5xl sm:text-7xl lg:text-8xl font-medium text-[#1e1e1e] capitalize mb-12">A story of friendship, family, and finding yourself</h5>
      
          {/* <button className="button_2">Get Started</button> */}
        </div>

        {/* Photo */}
        <div className="w-full lg:w-2/4 h-fit overflow-hidden">
          <img
            src="https://images.pexels.com/photos/4996868/pexels-photo-4996868.jpeg"
            alt=""
            className="w-full h-[50vh] lg:h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
