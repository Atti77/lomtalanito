const WelcomeSection = () => {
  return (
    <section id="about" className="bg-[#938973] text-black py-10 px-6">
      <h2 className="text-3xl font-bold mb-4 text-center" style={{ fontFamily: "Montserrat" }}>
        ÜDVÖZÖLJÜK A WEBOLDALUNKON!
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Bal oldali tartalom (kép helye) */}
        <div>
          <img
            src="/welcome_pic.jpg" 
            alt="Üdvözöljük a weboldalunkon"
            className="rounded-lg w-full h-[300px] md:h-[400px] object-cover"
          />
        </div>

        {/* Jobb oldali tartalom (szöveg) */}
        <div className="space-x-4 ml-10">
          <p className="mb-4 text-lg font-bold" style={{ fontFamily: "Montserrat" }}>
            Cégünk professzionális megoldásokat kínál sitt szállítására,
            lomtalanításra és költöztetésre, legyen szó magánszemélyekről vagy
            vállalkozásokról.
          </p>
          <h3 className="font-bold mb-2" style={{ fontFamily: "Montserrat" }}>
            MIÉRT VÁLASSZON MINKET?
          </h3>
          <ul className="list-disc list-inside mb-4" style={{ fontFamily: "Montserrat" }}>
            <li className="list-none">✅ Megbízható, tapasztalt csapat</li>
            <li className="list-none">✅ Gyors és hatékony munkavégzés</li>
            <li className="list-none">✅ Kedvező árak, rejtett költségek nélkül</li>
            <li className="list-none">✅ Környezettudatos hulladékkezelés</li>
          </ul>
          <p className="font-bold mt-10" style={{ fontFamily: "Montserrat" }}>
            Ha szüksége van profi segítségre, hívjon minket bizalommal! <br />
            📞+36 70 646 7247 vagy írjon nekünk: istvansandor03@gmail.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
