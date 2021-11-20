import React from "react";

import { useAppSelector, useAppDispatch } from "../app/hooks";

import { toggle, selectTheme } from "../features/toggler/toglerSlice";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const dispatch = useAppDispatch();
  const isDark = useAppSelector(selectTheme);
  if (isDark) {
    document.documentElement.classList.add("dark");
     localStorage.setItem("isDarkMode", JSON.stringify(true));
  } else {
    document.documentElement.classList.remove("dark");
     localStorage.setItem("isDarkMode", JSON.stringify(false));
  }
  return (
    <div className="flex place-content-between my-16">
      <h1 className="text-gray-900 dark:text-blue-400 text-4xl font-bold">
        The Hitchhiker's Guide to the Galaxy
      </h1>
      <button onClick={() => dispatch(toggle())}>
        {isDark ? (
          <FontAwesomeIcon
            icon={faMoon}
            className="text-blue-500 text-3xl"
          ></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className="text-yellow-500 text-3xl"
          ></FontAwesomeIcon>
        )}
      </button>
    </div>
  );
};
