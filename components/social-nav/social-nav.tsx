const SocialNav = () => {
  return (
    <div className="absolute flex items-center h-24 w-full px-4 md:px-8 lg:px-16 xl:px-24 bottom-24">
      <div>
        <ul className="flex gap-x-6">
          <li className="text-label-medium uppercase">GitHub</li>
          <li className="relative w-3 after:content-[''] after:w-3 after:h-px after:bg-black after:inset-y-0 after:top-1/2 after:-translate-y-2/3"></li>
          <li className="text-label-medium uppercase">Linkedin</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
};

export default SocialNav;
