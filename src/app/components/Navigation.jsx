import Link from "next/link";

const TemporaryNavigation = () => {
  return (
    <nav className="full-bleed bg-blue-800">
      <ul className=" flex text-sm gap-4 p-2">
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
    </nav>
  );
};

export default TemporaryNavigation;
