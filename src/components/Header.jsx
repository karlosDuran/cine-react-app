import { NavLink } from "react-router-dom";

function Header() {
  const links = [
    { to: "/", label: "Inicio" },
    { to: "/cartelera", label: "Cartelera" },
    { to: "/alimentos", label: "Alimentos" },
    { to: "/otros", label: "Otros" },
  ];

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="header-logo">
          Cine<span>mex</span>
        </NavLink>

        <nav className="header-nav">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
