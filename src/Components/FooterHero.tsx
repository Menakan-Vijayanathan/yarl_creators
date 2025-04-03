import React from "react";

const FooterHero = () => {
  return (
    <section className="relative bg-black flex justify-center items-center px-8 md:px-16 lg:px-24">
      <div className="bg-[#fdee36] rounded-2xl p-14 w-11/12 max-w-7xl flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left Section - Text and Profile */}
          <div className="text-left text-black flex-1">
            <h1 className="text-5xl font-bold leading-tight">
              Let's create content that connects you with your audience.
            </h1>
            <button className="mt-8 flex items-center space-x-3 bg-black text-white py-4 px-6 rounded-full">
              <img
                src="/profile.jpg" // Replace with actual profile image
                alt="Gazy"
                className="w-10 h-10 rounded-full"
              />
              <span>Book a Call with Gazy</span>
            </button>
          </div>

          {/* Right Section - Banner Image */}
          <div className="hidden md:flex flex-1 justify-end">
            <img src="/banner1.png" alt="Banner" className="w-full rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterHero;
