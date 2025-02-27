import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";

const Footer = () => {
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
            <li>📍 1092 Budapest, Ráday u. 30.</li>
            <li>📧 hello@pelda.hu</li>
            <li>📞 +36 70 123 4567</li>
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
              <a href="#" className="hover:text-gray-600">
                Főoldal
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Rólam
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-600">
                Kapcsolat
              </a>
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
            <a href="#" aria-label="Facebook">
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
