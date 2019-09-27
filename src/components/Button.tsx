import React from "react";

type ButtonProps = {
  title: string;
  paragraph: string;
};

export const Button = ({ title, paragraph }: ButtonProps) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);

export default Button;
