import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="object-cover"
            width={128}
            height={33}
            src="https://jaysonpostle.digital/static/media/jayson.b6a312d68fda2de29790.png"
            alt="logo"
          />
        </Link>
        <h1>digital</h1>
      </div>
      <div>
        <Link href="/subscribe" className="text-[#e9ca79] ml-2">
          Subscribe here...
        </Link>
      </div>
    </header>
  );
}

export default Header;
