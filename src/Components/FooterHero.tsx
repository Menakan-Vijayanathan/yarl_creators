// components/HeroSection.tsx
import React from "react";

const FooterHero = () => {
  return (
    <section className="relative bg-black flex justify-center items-center  py-10 px-6 md:px-12 lg:px-24">
      <div className="bg-yellow-400 rounded-2xl p-20 w-11/12 max-w-7xl flex flex-col md:flex-row items-center justify-between shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
  {/* Left Section - Text and Profile */}
  <div className="text-left text-black flex-1">
    <h2 className="text-3xl font-bold leading-snug">
      Let's create content that connects you with your audience.
    </h2>
    <button className="mt-6 flex items-center space-x-3 bg-black text-white py-3 px-6 rounded-full">
      <img
        src="/profile.jpg" // Replace with actual profile image
        alt="Gazy"
        className="w-8 h-8 rounded-full"
      />
      <span>Book a Call with Gazy</span>
    </button>
  </div>

  {/* Right Section - Network Effect */}
  <div className="hidden md:flex flex-1 justify-end">
    <img src="/dots-pattern.png" alt="Network effect" className="w-60" />
  </div>
</div>
</div>
    </section>
  );
};

export default FooterHero;
