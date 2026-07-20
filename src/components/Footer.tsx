const Footer = () => {
  return (
    <div className="flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center px-5 border-t text-gray-400 py-5 mt-28 border-t-gray-700 text-center gap-3">
      <div>
        © {new Date().getFullYear()} Zeeshan Haider. All rights reserved.
      </div>
      <div>Made with ❤️ in Pakistan.</div>
    </div>
  );
};

export default Footer;
