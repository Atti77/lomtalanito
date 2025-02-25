const ContactForm = () => {
  return (
    <section className="bg-[#938973] py-10 px-6 text-[#000000]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bal oldali oszlop: Elérhetőségek */}
        <div>
          <h2
            className="text-2xl font-bold mb-4"
            style={{ fontFamily: "Montserrat" }}
          >
            ELÉRHETŐSÉGEK:
          </h2>
          <ul className="space-y-2" style={{ fontFamily: "Montserrat" }}>
            <li>
              <strong>TEL:</strong> +36 30 123 4567
            </li>
            <li>
              <strong>EMAIL:</strong> info@cegnev.hu
            </li>
            <li>
              <strong>INSTAGRAM:</strong> @cegnev
            </li>
            <li>
              <strong>FACEBOOK:</strong> facebook.com/cegnev
            </li>
          </ul>
        </div>

        {/* Jobb oldali oszlop: Kapcsolati űrlap */}
        <div>
          <h2
            className="text-2xl font-bold mb-4 text-center md:text-left"
            style={{ fontFamily: "Montserrat" }}
          >
            KAPCSOLAT:
          </h2>
          <p
            className="mb-6 text-center md:text-left"
            style={{ fontFamily: "Montserrat" }}
          >
            Írj nekem és kezdjük el a közös munkát
          </p>
          <form className="space-y-4">
            {/* Keresztnév */}
            <div>
              <label
                htmlFor="first-name"
                className="block font-bold mb-1"
                style={{ fontFamily: "Montserrat" }}
              >
                KERESZTNÉV:
              </label>
              <input
                type="text"
                id="first-name"
                placeholder="Keresztnév"
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              />
            </div>

            {/* Vezetéknév */}
            <div>
              <label
                htmlFor="last-name"
                className="block font-bold mb-1"
                style={{ fontFamily: "Montserrat" }}
              >
                VEZETÉKNÉV:
              </label>
              <input
                type="text"
                id="last-name"
                placeholder="Vezetéknév"
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-bold mb-1"
                style={{ fontFamily: "Montserrat" }}
              >
                EMAIL:
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              />
            </div>

            {/* Telefonszám */}
            <div>
              <label
                htmlFor="phone"
                className="block font-bold mb-1"
                style={{ fontFamily: "Montserrat" }}
              >
                TELEFONSZÁM:
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Telefonszám"
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              />
            </div>

            {/* Üzenet */}
            <div>
              <label
                htmlFor="message"
                className="block font-bold mb-1"
                style={{ fontFamily: "Montserrat" }}
              >
                ÜZENET:
              </label>
              <textarea
                id="message"
                placeholder="Üzenet"
                rows={4}
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              ></textarea>
            </div>

            {/* Elküld gomb */}
            <button
              type="submit"
              className="bg-[#EF1111] text-white px-6 py-3 rounded hover:bg-red-700 transition w-full md:w-auto md:self-start mt-4 mx-auto"
              style={{ fontFamily: "Montserrat" }}
            >
              ELKÜLD
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
