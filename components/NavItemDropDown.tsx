import React, { useState } from "react";
import styles from "../styles/NavItem.module.css";
import { Typography, MenuItem, Menu } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";

interface Props {
  text: string;
  children: ReactJSXElement;
}

export const NavItemDropDown = ({ text, children }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Typography
        className={styles.NavItem}
        onClick={handleClick}
        aria-controls="basic-menu"
        aria-haspopup={open ? "true" : undefined}
      >
        {text}
        <ExpandMoreIcon />
      </Typography>
      <Menu
        open={open}
        id="basic-menu"
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <>{children}</>
      </Menu>
    </>
  );
};
