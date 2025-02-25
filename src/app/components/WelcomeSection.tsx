const WelcomeSection = () => {
  return (
    <section className="bg-[#938973] text-black py-10 px-6">
      <h2 className="text-3xl font-bold mb-4 text-center">
        ÜDVÖZÖLJÜK A WEBOLDALUNKON!
      </h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Bal oldali tartalom (kép helye) */}
        <div className="bg-gray-100 rounded-lg h-[300px] md:h-[400px]"></div>

        {/* Jobb oldali tartalom (szöveg) */}
        <div className="space-x-4 ml-10">
          <p className="mb-4 text-lg font-bold">
            Cégünk professzionális megoldásokat kínál sitt szállítására,
            lomtalanításra és költöztetésre, legyen szó magánszemélyekről vagy
            vállalkozásokról.
          </p>
          <h3 className="font-bold mb-2">MIÉRT VÁLASSZON MINKET?</h3>
          <ul className="list-disc list-inside mb-4">
            <li className="list-none">✅ Megbízható, tapasztalt csapat</li>
            <li className="list-none">✅ Gyors és hatékony munkavégzés</li>
            <li className="list-none">
              ✅ Kedvező árak, rejtett költségek nélkül
            </li>
            <li className="list-none">✅ Környezettudatos hulladékkezelés</li>
          </ul>
          <p className="font-bold mt-10 text-justify">
            Ha szüksége van profi segítségre, hívjon minket bizalommal! <br />
            📞[Telefonszám] vagy írjon nekünk: [E-mail cím]
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
