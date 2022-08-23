import Image from "next/image";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Person } from "../interfaces/Perons";

interface Props {
  person: Person;
}

export const PersonCard = ({ person }: Props) => {
  return (
    <div className="rounded-2xl border-t-[28px] border-green2 shadow-md bg-white flex flex-col w-[270px] justify-center items-center p-4 pb-10">
      <div className="pb-6">
        {person.photo ? (
          <Image src={person.photo}>:AccountCircleIcon</Image>
        ) : (
          <AccountCircleIcon className="w-40 h-40 font-[60px] text-gray-400" />
        )}
      </div>

      <div className="uppercase font-extrabold ">{person.name}</div>
      <div className="text-sm pb-5 text-gray-600">{person.field}</div>
      <div className="text-green1 font-thin text-sm">{person.email}</div>
    </div>
  );
};
