import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  console.log(router);
  return (
    <nav>
      <Link href="/">
        <a
          className="hello"
          style={{ color: router.pathname === "/" ? "red" : "blue" }}
        >
          Home
        </a>
      </Link>
      <Link
        href="/about"
        style={{ color: router.pathname === "/" ? "red" : "blue" }}
      >
        <a>About</a>
      </Link>
    </nav>
  );
}
