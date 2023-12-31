import Link from 'next/link';

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">about</Link>
      </li>
    </ul>
  );
};

export default Navbar;
