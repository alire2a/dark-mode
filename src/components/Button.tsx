import React from "react";

type Props = {
  color: "primary" | "secendary";
  title: string;
};

export const Button = ({ title, color }: Props) => {
  let colors;
  switch (color) {
    case "primary":
      colors = "bg-red-800 text-white dark:bg-red-400 dark:text-gray-900";
      break;
    case "secendary":
      colors = "bg-blue-900 text-white dark:bg-blue-400 dark:text-gray-900 ";
      break;
    default:
      colors = "bg-red-400 text-gray-100";
      break;
  }
  return (
    <button className={`${colors} rounded-md px-14 py-2 mx-6 font-semibold`}>
      {title}
    </button>
  );
};
