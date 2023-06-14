const Hero = () => {
  return (
    <section className="bg-[#8846FF] h-screen flex justify-center items-center pb-20">
      <div className="container mx-auto">
        <div className="w-full">
          <h5 className="text-[5rem] text-gray-200 font-light text-center leading-[80px] uppercase py-12">
            Today a reader<br /> Tomorrow a leader
          </h5>
          <img
            className="photo_wrapper w-2/4 mx-auto object-cover"
            src="https://images.unsplash.com/photo-1635073211933-86612c029924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
