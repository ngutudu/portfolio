"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./text-typing.scss";

export const TextTyping = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["frontend development", "web development", "blockchain development", "mobile development"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return <span ref={el} style={{ color: "rgb(148, 8, 8)" }} />;
};
