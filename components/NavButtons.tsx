import { Button } from "@mui/material";
import styles from "../styles/NavButtons.module.css";

export const NavButtons = () => {
  return (
    <div className="flex justify-center h-28 items-stretch font-bold my-6">
      <Button
        variant="contained"
        size="large"
        className={`${styles.navButton} bg-green1`}
      >
        Sobre el programa
      </Button>
      <Button
        variant="contained"
        size="large"
        className={`${styles.navButton} bg-green2`}
      >
        Alianzas
      </Button>
      <Button
        variant="contained"
        size="large"
        className={`${styles.navButton} bg-green3`}
      >
        Comunidad
      </Button>
      <Button
        variant="contained"
        size="large"
        className={`${styles.navButton} bg-green4`}
      >
        Contáctenos
      </Button>
    </div>
  );
};
