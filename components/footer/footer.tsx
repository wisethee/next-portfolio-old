const Footer = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-16 xl:px-24">
      <div className="flex items-center h-16  border-t">
        <div className="flex flex-grow basis-0 justify-start text-label-medium uppercase">
          2023 © marius-paduraru.dev
        </div>
        <div className="flex flex-grow basis-0 justify-end">
          <ul className="flex gap-x-16">
            <li className="text-body-medium">Terms & Conditions</li>
            <li className="text-body-medium">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
