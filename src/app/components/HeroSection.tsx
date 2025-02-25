const HeroSection = () => {
  return (
    <section
      className="relative h-[500px] bg-cover bg-center"
      style={{ backgroundImage: "url('/lomtalanito-hero.png')" }}
    >
      {/* Szöveg a bal felső sarokban */}
      <div className="absolute top-10 left-10 text-black">
        <h1 className="text-5xl font-bold mb-4">Pincétől a Padlásig</h1>
        <p className="text-lg font-bold">Lomtalanítás, sitt elhordás, költöztetés</p>
      </div>

      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <button className="bg-[#EF1111] text-black px-8 py-3 rounded hover:bg-red-700 transition">
          KAPCSOLAT
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
