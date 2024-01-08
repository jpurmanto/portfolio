"use client";

import React, { CSSProperties, useState } from "react";
import { LoaderAnimIcon } from "../icons/LoaderAnimIcon";
import { twMerge } from "tailwind-merge";

const buttonColors = {
  primary: "var(--primary-color)",
  secondary: "var(--secondary-color)",
  tertiary: "var(--tertiary-color)",
  danger: "var(--error-color)",
};

const buttonRadius = {
  none: "0px",
  sm: "0.125rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  color?: "primary" | "secondary" | "tertiary" | "danger";
  variant?: "outline" | "fill";
  height?: string;
  width?: string;
  href?: string;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      size = "md",
      radius = "lg",
      color = "primary",
      variant = "outline",
      height = "100%",
      width = "100%",
      isLoading = false,
      onClick,
      ...props
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleButtonClick = (
      event: MouseEvent & React.MouseEvent<HTMLButtonElement>
    ) => {
      if (onClick) {
        onClick(event);
      }
    };

    const buttonStyles: CSSProperties = {
      height: `${height}rem`,
      width: `${width}rem`,
      color: isHovered || variant === "fill" ? "white" : buttonColors[color],
      backgroundColor: variant === "fill" ? buttonColors[color] : "",
      borderRadius: buttonRadius[radius],
      borderColor: buttonColors[color],
      boxShadow: isHovered
        ? `inset 0 -100px 0 0 ${buttonColors[color]}`
        : `inset 0 0 0 0 ${buttonColors[color]}`,
      transition: "box-shadow colors 0.3s ease",
    };

    return (
      <button
        id="custom-button"
        type={props.type ?? "button"}
        style={buttonStyles}
        className={twMerge(
          `no-underline relative inline-block py-2 px-4 text-center font-semibold tracking-wider bg-transparent cursor-pointer transition-all ease-out duration-500 border-2 select-none hover:text-white active:scale-90 disabled:cursor-default disabled:opacity-50 disabled:hover:shadow-none disabled:active:transform-none text-${size}`,
          className
        )}
        onClick={handleButtonClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        ref={ref}
        {...props}
      >
        <span className="flex items-center justify-center">
          {isLoading ? <LoaderAnimIcon className="pr-1" /> : <></>}

          {props.href ? (
            <a href={props.href} rel="noreferrer noopener" target="_blank">
              {children}
            </a>
          ) : (
            children
          )}
        </span>
      </button>
    );
  }
);
Button.displayName = "Button";
