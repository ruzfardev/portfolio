import React, { FC } from "react";
import "./index.css";
type DividerProps = {
  title: string;
};
export const Divider: FC<DividerProps> = ({ title }) => {
  return (
    <div className="divider">
      <div className="divider-line"></div>
      <h2 className="divider-title">{title}</h2>
      <div className="divider-line"></div>
    </div>
  );
};
