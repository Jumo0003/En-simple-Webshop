import Logo from "@/app/components/(knapper)/Logo";

const Footer = () => {
  return (
    <div className="full-bleed text-[#2e4565] bg-head-foot mt-4">
      <footer className="px-4 py-8 flex flex-col justify-center md:flex-row gap-4 items-start md:justify-between">
        <div>
          <h4 className="font-bold">Kontakt</h4>
          <ul>
            <li>Tlf: +45 88 89 23 09</li>
            <li>Email: @Løtex.dk</li>
            <li>Adresse: Løtex vej 31</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <div>
            <h3 className="font-bold">Åbningstider</h3>
            <h5>Man - Søn</h5>
          </div>
          <ul className="gap-1">
            <li>07:30-22:30</li>
            <li>07:30-22:30</li>
            <li>07:30-22:30</li>
            <li>07:30-22:30</li>
            <li>07:30-22:30</li>
            <li>07:30-22:30</li>
            <li>07:30-22:30</li>
          </ul>
        </div>
        <Logo />
      </footer>
    </div>
  );
};

export default Footer;
