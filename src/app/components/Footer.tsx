"use client";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#FFFFFF] text-[#000000] py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 border-b pb-6">
        {/* Bal oszlop: Logo és leírás */}
        <div>
          <h2
            className="text-xl font-bold mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            LOGO
          </h2>
          <p style={{ fontFamily: "Montserrat" }}>
            Cégünk professzionális megoldásokat kínál sitt szállítására,
            lomtalanításra és költöztetésre, legyen szó magánszemélyekről vagy
            vállalkozásokról.
          </p>
        </div>

        {/* Középső oszlop: Elérhetőség */}
        <div>
          <h3
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            Elérhetőség
          </h3>
          <ul className="space-y-2" style={{ fontFamily: "Montserrat" }}>
            <li>📧 istvansandor03@gmail.com.</li>
            <li>📞 +36 70 646 7247</li>
          </ul>
        </div>

        {/* Jobb oszlop: Oldalak és közösségi média */}
        <div>
          <h3
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            Oldalak
          </h3>
          <ul className="space-y-2 mb-6" style={{ fontFamily: "Montserrat" }}>
            <li>
              <button
                className="hover:text-gray-600"
                onClick={() => handleScroll("home")}
              >
                Főoldal
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-600"
                onClick={() => handleScroll("about")}
              >
                Rólam
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-600"
                onClick={() => handleScroll("services")}
              >
                Blog
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-600"
                onClick={() => handleScroll("contact")}
              >
                Kapcsolat
              </button>
            </li>
          </ul>

          <h3
            className="text-lg font-bold mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            Kapcsolódjunk!
          </h3>
          <div className="flex space-x-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61550297631107"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            {/* YouTube */}
            <a href="#" aria-label="YouTube">
              <FaYoutube className="w-6 h-6" />
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Alsó sor: Copyright és jogi információk */}
      <div
        className="container mx-auto text-center mt-6 text-sm text-gray-500"
        style={{ fontFamily: "Montserrat" }}
      >
        Sándor István - Minden jog fenntartva! | Adatvédelmi tájékoztató | Süti
        szabályzat
      </div>
    </footer>
  );
};

export default Footer;
