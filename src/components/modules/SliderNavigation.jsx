"use client";

import React from "react";

import { Button } from "../ui/button";

const SliderNavigation = ({ navigationStyles, onClick, children }) => {
  return (
    <Button className={navigationStyles} onClick={onClick}>
      {children}
    </Button>
  );
};

export default SliderNavigation;
