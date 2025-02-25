const ServicesSection = () => {
  const services = [
    {
      title: "Sitt- és törmelékszállítás",
      description:
        "Építkezés, felújítás vagy bontás után gyorsan és szakszerűen elszállítjuk a keletkezett hulladékot.",
      image: "/images/sitt-torlekszallitas.jpg", // Kép elérési útja
    },
    {
      title: "Lomtalanítás",
      description:
        "Segítünk megszabadulni a felesleges bútoroktól, háztartási eszközöktől, elektronikai hulladéktól és egyéb lomoktól.",
      image: "/images/lomtalanitas.jpg", // Kép elérési útja
    },
    {
      title: "Költöztetés",
      description:
        "Legyen szó lakás- vagy irodaköltöztetésről, csapatunk gyors és biztonságos megoldást nyújt.",
      image: "/images/koltoztetes.jpg", // Kép elérési útja
    },
  ];

  return (
    <section className="py-10 bg-[#D1CCBF] text-[#000000]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center"
          >
            {/* Kép */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            {/* Szolgáltatás címe */}
            <h3
              className="text-xl font-bold mb-2"
              style={{ fontFamily: "Montserrat" }}
            >
              {service.title}
            </h3>
            {/* Szolgáltatás leírása */}
            <p style={{ fontFamily: "Montserrat" }}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
