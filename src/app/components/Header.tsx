const Header = () => {
  return (
    <header className="bg-[#938973] text-[#000000] py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg">LOGO</div>

        {/* Navigációs menü */}
        <ul className="flex space-x-6 font-montserrat">
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Főoldal
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Rólunk
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-red-500 transition">
              Kapcsolat
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
