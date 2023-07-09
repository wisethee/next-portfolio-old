const SectionSkills = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-1 gap-4 py-24">
      <div className="col-span-6 flex flex-col items-start gap-y-16">
        <div className="flex flex-col gap-y-6">
          <h2 className="text-display-medium">
            Achieving results through my unique approach
          </h2>
          <p>
            Crafting innovative web solutions with meticulous attention to
            detail, efficient code, and a minimalist design approach that
            exceeds expectations.
          </p>
        </div>
        <button className="text-label-large uppercase rounded-full bg-black text-white px-8 py-4">
          Explore my work
        </button>
      </div>
      <div className="col-span-5 col-start-8 row-start-1"></div>
      <div className="col-start-7 row-start-1"></div>
    </div>
  );
};

export default SectionSkills;
