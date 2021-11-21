import React, { useState } from "react";

type Props = {
  title: string;
  type: "text" | "email";
};

export const Input = ({ title, type }: Props) => {
  const [value, setValue] = useState("");
  return (
    <input
      value={value}
      onChange={e => setValue(e.target.value)}
      type={type}
      placeholder={title}
      className="w-full	bg-white text-gray-500 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 border rounded-sm h-10 p-3 my-2"
    />
  );
};
