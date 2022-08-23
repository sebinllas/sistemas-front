import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import React from "react";

interface Props {
  title: string;
  children: ReactJSXElement;
}

export const Section = ({ title, children }: Props) => {
  return (
    <section className="bg-gray-200 mt-10 p-12 p relative w-full">
      <h1 className="absolute left-0  -top-4 h-6 text-lg pl-3 pr-6 py-1 flex items-center justify-center font-extrabold text-center rounded-r-full box-content text-white bg-green1">
        {title}
      </h1>
      {children}
    </section>
  );
};
