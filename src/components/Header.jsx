import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Inicio" },
    { to: "/cartelera", label: "Cartelera" },
    { to: "/alimentos", label: "Alimentos" },
    { to: "/otros", label: "Otros" },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          Cine<span>mex</span>
        </Link>

        <nav className="header-nav">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
