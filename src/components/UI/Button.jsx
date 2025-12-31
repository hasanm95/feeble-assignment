import React from "react";

const Button = ({
  children,
  variant = "primary",
  className = "",
  onClick,
  icon,
  ...props
}) => {
  const baseStyles =
    "py-3 px-7 rounded-full leading-[1.2] font-medium cursor-pointer transition-all duration-250 ease-out whitespace-nowrap flex items-center justify-center gap-[0.6rem]";

  const variants = {
    primary:
      "bg-primary text-white text-[0.95rem] md:text-[1.125rem] border border-transparent hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,122,255,0.25)]",
    secondary:
      "bg-transparent text-dark text-[0.95rem] md:text-[1.125rem] border border-[#6c788f] hover:bg-[#f9fafb] hover:border-[#d1d5db] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.05)]",
    header:
"bg-primary text-white py-[11px] px-[18px] md:text-base font-medium hover:bg-primary-hover hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,122,255,0.25)]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
