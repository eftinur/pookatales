
const Hero = () => {
  return (
    <section className="hero_wrapper bg-[#8846FF] flex items-center">
      <div className="container mx-auto flex justify-between items-center flex-col-reverse lg:flex-row gap-10 py-28 px-4">
        <div className="w-full lg:w-2/4 py-4">
          <h5 className="text-3xl lg:text-[5rem] text-white font-light text-left leading-[48px] lg:leading-[80px] capitalize">
            Find, explore аnd sрreаd the knоwledge.
          </h5>
          <p className="sm:text-sm lg:text-xl text-white mt-4 mb-8">
            We are thriving towards turning the world&apos;s happiest moments into lasting
            memories - one book at a time.
          </p>
          <button className="button_2">Get Started</button>
        </div>

        <div className="w-full lg:w-2/4">
          <img
            src="https://images.pexels.com/photos/5865624/pexels-photo-5865624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="w-full shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
