import React from "react";
import Image from "next/image";

const Hero: React.FC = () => (
 <div className="py-20 px-3 md:px-0 max-w-5xl mx-auto" id="home">
      <h1 className="text-3xl md:text-5xl font-bold text-black dark:text-violet-300 text-center mb-16">
        Welcome to My chalenge Frontend par{" "}
        <span className="text-violet-600 dark:text-violet-400">IDUN-GROUPE</span>
      </h1>
</div>
);

export default Hero;
