import React from 'react';
import styles from '../styles/Navbar.module.css';
import { NavItem } from './NavItem';
import { NavItemDropDown } from './NavItemDropDown';

export const Navbar = () => {
	return (
		<nav className={styles.Navbar}>
			<img src="/udea-logo.png" alt="Image" className="h-12" />
			<NavItemDropDown text="Inicio" />
			<NavItem text="Investigación" />
			<NavItem text="Extensión" />
			<NavItemDropDown text="Internacionalización" />
			<NavItem text="Recursos" />
		</nav>
	);
};
