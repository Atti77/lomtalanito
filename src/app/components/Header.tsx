"use client";

const Header = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header className="bg-[#938973] text-[#000000] py-4">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-lg">LOGO</div>

        {/* Navigációs menü */}
        <ul className="flex space-x-6 font-montserrat">
          <li>
            <button
              className="hover:text-red-500 transition"
              onClick={() => handleScroll("home")}
            >
              Főoldal
            </button>
          </li>
          <li>
            <button
              className="hover:text-red-500 transition"
              onClick={() => handleScroll("about")}
            >
              Rólunk
            </button>
          </li>
          <li>
            <button
              className="hover:text-red-500 transition"
              onClick={() => handleScroll("services")}
            >
              Blog
            </button>
          </li>
          <li>
            <button
              className="hover:text-red-500 transition"
              onClick={() => handleScroll("contact")}
            >
              Kapcsolat
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
