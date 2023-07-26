import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto py-24">
      <p className="w-full lg:w-2/4 mx-auto text-xl text-center px-8">
        Feel free to reach out whether you’re interested in working with us, for
        us or just want to say hello. Ok, bye now.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-center mt-24 px-4">
        <div>
          <p className="text-xl lg:text-2xl">Contact Us</p>
          <p className="text-2xl lg:text-4xl font-medium mt-6 mb-4">
            +46 8 501 101 00
          </p>
          <p className="text-2xl lg:text-4xl font-medium">info@pookatales.cc</p>
        </div>
        <div>
          <p className="text-xl lg:text-2xl">Visit Us</p>
          <p className="text-2xl lg:text-4xl font-medium mt-6 mb-4">
            Mäster Samuelsgatan 56
          </p>
          <p className="text-2xl lg:text-4xl font-medium">111 21 Stockholm</p>
        </div>
        <div>
          <p className="text-xl lg:text-2xl">Helpline</p>
          <p className="text-2xl lg:text-4xl font-medium mt-6 mb-4">
            Henrik Johansson
          </p>
          <p className="text-2xl lg:text-4xl font-medium">
            henrik@pookatales.cc
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
