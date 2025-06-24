import * as React from "react";
import { cn } from "@/lib/utils"; // Vẫn sử dụng cn để nối các class

// Định nghĩa các lớp CSS cơ bản cho button
const baseClasses =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

// Định nghĩa các lớp CSS cho từng variant
const variantClasses = {
  default: "bg-gray-800 text-white hover:bg-gray-700",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
  outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
  ghost: "hover:bg-gray-100 hover:text-gray-800",
  link: "text-gray-800 underline-offset-4 hover:underline",
  accent: "bg-[#B8860B] text-white hover:bg-[#A0780A]", // Màu vàng nâu/đồng
};

// Định nghĩa các lớp CSS cho từng size
const sizeClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

// Định nghĩa các kiểu props cho Button (đã loại bỏ asChild)
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
}

const ButtonMain = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    // Lấy các lớp CSS dựa trên variant và size
    const classes = cn(
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    // Luôn render thẻ button
    return <button className={classes} ref={ref} {...props} />;
  }
);
ButtonMain.displayName = "ButtonMain";

export { ButtonMain };
