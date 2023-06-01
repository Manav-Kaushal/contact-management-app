import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
  centered?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  centered = false,
  children,
  ...rest
}) => {
  const baseStyles = `block w-fit font-medium rounded`;

  let variantStyles = "";
  switch (variant) {
    case "secondary":
      variantStyles = "text-white bg-gray-500 hover:bg-gray-600";
      break;
    case "success":
      variantStyles = "text-white bg-green-500 hover:bg-green-600";
      break;
    case "danger":
      variantStyles = "text-white bg-red-500 hover:bg-red-600";
      break;
    default:
      variantStyles = "text-white bg-blue-500 hover:bg-blue-600";
  }

  let sizeStyles = "";
  switch (size) {
    case "sm":
      sizeStyles = "text-sm px-3 py-1.5";
      break;
    case "lg":
      sizeStyles = "text-lg px-5 py-2.5";
      break;
    default:
      sizeStyles = "text-base px-4 py-2";
  }

  const buttonStyles = `${baseStyles} ${variantStyles} ${sizeStyles}  ${
    centered ? "mx-auto" : ""
  }`;

  return (
    <button className={buttonStyles} {...rest}>
      {children}
    </button>
  );
};

export default Button;
