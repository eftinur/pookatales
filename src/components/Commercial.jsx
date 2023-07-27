import React from "react";
import commercial_clip from "../assets/videos/pexels-maialen-sanchez-8441891 (720p).mp4";

const Commercial = () => {
  return (
    <section className="bg-[#1e1e1e] text-white py-20">
      <div className="container mx-auto">
        <div className="w-3/4 mx-auto">
          <h5 className="text-4xl lg:text-8xl text-white font-medium text-center capitalize">
           Book festival
          </h5>
        
          <p className="w-full lg:w-2/4 mx-auto text-xl text-center px-8 mt-6">
           In stores only untill Saturday, 17th July, 2024. 
          </p>
        </div>
        <div className="w-full lg:w-3/4 mx-auto mt-10 lg:mt-16 px-4">
          <video autoPlay loop muted>
            <source src={commercial_clip} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Commercial;
