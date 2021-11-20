import React from "react";

type Props = {
  title: string;
  type: "text" | "email";
};

export const Input = ({ title,type }: Props) => {
  return (
    <input type={type} placeholder={title} className="w-full	bg-white text-gray-500 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 border rounded-sm h-10 p-3 my-2" />
  );
};
