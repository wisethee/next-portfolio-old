const Hero = () => {
  return (
    <div className="grid grid-cols-12 gap-x-6 h-hero content-center h-screen">
      <div className="col-span-2 row-span-2"></div>
      <div className="col-span-5 row-span-2 col-start-3 flex flex-col items-start gap-y-16">
        <div className="flex flex-col gap-y-6">
          <h1 className="text-display-large">
            Unleashing creativity, one line of code at a time_
          </h1>
          <p>
            I thrive on challenges, believing every problem has a solution. I
            relentlessly pursue optimal solutions that meet your needs. With
            meticulous attention to detail and a coding passion, I optimise
            every line of code for performance and functionality.
          </p>
        </div>

        <button className="text-label-large uppercase rounded-full bg-black text-white px-8 py-4">
          Find out more about me
        </button>
      </div>
      <div className="col-span-3 row-span-2 col-start-8"></div>
      <div className="col-span-2 row-span-2 col-start-11"></div>
    </div>
  );
};

export default Hero;
