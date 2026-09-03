import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import VersionInfo from "./VersionInfo";

const NAV_TABS = [
  { icon: "📋", label: "Tarefas", to: "/", end: true },
  { icon: "🔧", label: "Versão",  to: "/versao" },
  { icon: "ℹ️", label: "Sobre",   to: "/about" },
];

const Header = ({ title }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className="header">
      {/* Linha superior: título + controles */}
      <div className="header-top">
        <h1>{title}</h1>
        <div className="header-controls">
          <VersionInfo />
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={isDarkMode ? "Tema claro" : "Tema escuro"}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>

      {/* Barra de abas de navegação */}
      <nav className="nav-tabs" aria-label="Navegação principal">
        {NAV_TABS.map(({ icon, label, to, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `nav-tab${isActive ? " nav-tab--active" : ""}`
            }
          >
            <span className="nav-tab-icon" aria-hidden="true">{icon}</span>
            <span className="nav-tab-label">{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

Header.defaultProps = {
  title: "BIA 2026",
};

export default Header;
