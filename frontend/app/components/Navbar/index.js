import Image from "next/image";
import Link from "next/link";
import "./styles.css";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Vitamins", href: "/vitamins" },
    { label: "About", href: "/about" },
    { label: "Sign Up", href: "/auth/signup" },
  ];

  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="nav-logo">
            <Link href="/">
              <Image
                src="/logos/site_logo.png"
                alt="Logo"
                width={100}
                height={40}
                priority
              />
              <p>Vitamin Shop</p>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="nav-menu">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
