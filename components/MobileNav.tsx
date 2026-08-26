import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="mobile-nav">

      <Link
        href="/"
        className="mobile-logo"
      >
        SHIVANKUR
      </Link>

      <div className="mobile-links">

        <Link href="/portfolio">
          Work
        </Link>

        <Link href="/writing">
          Writing
        </Link>

        <Link href="/thoughts">
          Thoughts
        </Link>

      </div>

    </nav>
  );
}