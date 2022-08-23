import React from "react";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SchoolIcon from "@mui/icons-material/School";
import QrCodeIcon from "@mui/icons-material/QrCode";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const MainInfo = () => {
  return (
    <div className="w-full bg-blue2 text-white font-bold p-10">
      <div>
        <ApartmentIcon />
        Facultad de Ingeniería
      </div>
      <div>
        <SchoolIcon />
        Título: Ingenier@ de sistemas
      </div>
      <div>
        <QrCodeIcon />
        Código SNIES: 444
      </div>
      <div>
        <WatchLaterIcon />
        Duración: 10 semestres
      </div>
      <div>
        <WatchLaterIcon />
        Duración: 10 semestres
      </div>{" "}
      <div>
        <WatchLaterIcon />
        Duración: 10 semestres
      </div>{" "}
      <div>
        <WatchLaterIcon />
        Duración: 10 semestres
      </div>{" "}
      <div>
        <WatchLaterIcon />
        Duración: 10 semestres
      </div>
    </div>
  );
};
