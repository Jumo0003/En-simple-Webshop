import Logo from "@/app/components/(knapper)/Logo";

const Footer = () => {
  return (
    <div className="full-bleed text-[#2e4565] bg-head-foot mt-4">
      <footer className="px-4 py-8 flex flex-col justify-center md:flex-row gap-4 items-start md:justify-between">
        <div>
          <h4 className="font-bold">Contact</h4>
          <ul>
            <li>Phone number: +45 88 89 23 09</li>
            <li>Email-adress: @Løtex.dk</li>
            <li>Adress: Løtexvej 31, 3456 Bynavn</li>
          </ul>
        </div>
        <div className="flex gap-4">
          <div>
            <h3 className="font-bold">Opening hours</h3>
            <h5>Mon - Sun</h5>
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
