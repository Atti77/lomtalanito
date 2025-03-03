"use client";

import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Küldés...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Az üzenetet sikeresen elküldtük!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Hiba történt az üzenet küldése közben.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Hiba történt az üzenet küldése közben.");
    }
  };

  return (
    <section id="contact" className="bg-[#938973] py-10 px-6 text-[#000000]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bal oldali oszlop */}
        <div>
          <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "Montserrat" }}>
            ELÉRHETŐSÉGEK:
          </h2>
          <ul className="space-y-2" style={{ fontFamily: "Montserrat" }}>
            <li><strong>TEL:</strong> +36 70 646 7247</li>
            <li><strong>EMAIL:</strong> istvansandor03@gmail.com</li>
            <li><strong>INSTAGRAM:</strong> @istvansandor03</li>
            <li><strong>FACEBOOK:</strong> facebook.com/Sándor István</li>
          </ul>
        </div>
        
        {/* Jobb oldali oszlop */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left" style={{ fontFamily: "Montserrat" }}>
            KAPCSOLAT:
          </h2>
          <p className="mb-6 text-center md:text-left" style={{ fontFamily: "Montserrat" }}>
            Írj nekem és kezdjük el a közös munkát
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="first-name" className="block font-bold mb-1" style={{ fontFamily: "Montserrat" }}>
                KERESZTNÉV:
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Keresztnév"
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              />
            </div>

            {/* Vezetéknév */}
            <div>
              <label htmlFor="last-name" className="block font-bold mb-1" style={{ fontFamily: "Montserrat" }}>
                VEZETÉKNÉV:
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Vezetéknév"
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-bold mb-1" style={{ fontFamily: "Montserrat" }}>
                EMAIL:
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              />
            </div>

            {/* Telefonszám */}
            <div>
              <label htmlFor="phone" className="block font-bold mb-1" style={{ fontFamily: "Montserrat" }}>
                TELEFONSZÁM:
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefonszám"
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              />
            </div>

            {/* Üzenet */}
            <div>
              <label htmlFor="message" className="block font-bold mb-1" style={{ fontFamily: "Montserrat" }}>
                ÜZENET:
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Üzenet"
                rows={4}
                className="w-full p-3 border rounded bg-[#D1CCBF]"
              ></textarea>
            </div>

            {/* Elküld gomb */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#EF1111] text-white px-6 py-3 rounded hover:bg-red-700 transition w-full md:w-auto"
                style={{ fontFamily: "Montserrat" }}
              >
                ELKÜLD
              </button>
            </div>

            {/* Státusz */}
            {status && (
              <p className={`text-center text-lg mt-4 ${status.includes("sikeresen") ? "text-black" : "text-red-900"}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
