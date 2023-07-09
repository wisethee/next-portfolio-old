import Logo from "@/components/icons/logo";
import ArrowRight from "@/components/icons/arrow-right";

const Home = () => {
  return (
    <main>
      <nav className="absolute flex items-center h-24 w-full px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-grow basis-0 justify-start">
          <Logo />
        </div>

        <div className="flex flex-grow basis-0 justify-center">
          <ul className="flex gap-x-16">
            <li className="text-label-large uppercase">Skills</li>
            <li className="text-label-large uppercase">Works</li>
            <li className="text-label-large uppercase">Insights</li>
          </ul>
        </div>

        <div className="flex flex-grow basis-0 justify-end items-center">
          <span className="text-label-large uppercase">Let&apos;s talk</span>
          <ArrowRight />
        </div>
      </nav>

      <div className="px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="grid grid-cols-12 gap-x-6 h-hero content-center h-screen">
          <div className="col-span-2 row-span-2"></div>
          <div className="col-span-5 row-span-2 col-start-3 flex flex-col items-start gap-y-16">
            <div className="flex flex-col gap-y-6">
              <h1 className="text-display-large">
                Unleashing creativity, one line of code at a time_
              </h1>
              <p>
                I thrive on challenges, believing every problem has a solution.
                I relentlessly pursue optimal solutions that meet your needs.
                With meticulous attention to detail and a coding passion, I
                optimise every line of code for performance and functionality.
              </p>
            </div>

            <button className="text-label-large uppercase rounded-full bg-black text-white px-8 py-4">
              Find out more about me
            </button>
          </div>
          <div className="col-span-3 row-span-2 col-start-8"></div>
          <div className="col-span-2 row-span-2 col-start-11"></div>
        </div>
      </div>

      <footer className="flex items-center h-16 px-4 md:px-8 lg:px-16 xl:px-24">
        <div className="flex flex-grow basis-0 justify-start">Start</div>
        <div className="flex flex-grow basis-0 justify-end">End</div>
      </footer>
    </main>
  );
};

export default Home;
