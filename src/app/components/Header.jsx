import Logo from "@/app/components/(knapper)/Logo";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Logo />
      <ul className="bg-blue-800 flex gap-4 p-4">
        <li>
          <Link href="/">Forside</Link>
        </li>
        <li>
          <Link href="/produkter">Produktliste</Link>
        </li>
        <li>
          <Link href="/detaljevisning">EnkeltProdukt</Link>
        </li>
        <li>
          <Link href="/betaling">Betaling</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
