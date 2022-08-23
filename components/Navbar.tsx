import { MenuItem } from "@mui/material";
import React from "react";
import styles from "../styles/Navbar.module.css";
import { NavItem } from "./NavItem";
import { NavItemDropDown } from "./NavItemDropDown";

export const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <img src="/udea-logo.png" alt="Image" className="h-12" />
      <NavItemDropDown text="Inicio">
        <>Hola mundo</>
      </NavItemDropDown>
      <NavItem text="Investigación" />
      <NavItem text="Extensión" />
      <NavItemDropDown text="Internacionalización">
        <div className="w-48">
          <MenuItem sx={{ width: 200 }}>Hola</MenuItem>
          <MenuItem sx={{ width: 200 }}>Mundo</MenuItem>
          <MenuItem sx={{ width: 200 }}>prueba</MenuItem>
        </div>
      </NavItemDropDown>
      <NavItem text="Recursos" />
    </nav>
  );
};
