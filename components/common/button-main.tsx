import * as React from "react";
import { cn } from "@/lib/utils";

// Định nghĩa các lớp CSS cho từng variant
const variantClasses = {
  // Border mặc định rất nhạt, gần như trong suốt
  default:
    "bg-gray-800 text-white border-[1px] border-[rgba(255,255,255,0.05)] hover:bg-gray-700",
  secondary:
    "bg-gray-100 text-gray-800 border-[1px] border-[rgba(0,0,0,0.03)] hover:bg-gray-200",
  // Outline sử dụng border ban đầu bạn yêu cầu, nhưng với opacity nhạt hơn
  outline:
    "bg-transparent border-[1px] border-[rgba(36,28,16,0.1)] text-gray-700 hover:bg-gray-50",
  // Ghost và Link thường không có border ban đầu, nhưng chúng ta sẽ thêm border rất nhạt để có hiệu ứng
  ghost:
    "hover:bg-gray-100 hover:text-gray-800 border-[1px] border-[rgba(0,0,0,0.03)]",
  link: "text-gray-800 underline-offset-4 hover:underline border-[1px] border-[rgba(0,0,0,0.03)]",
  accent:
    "bg-[#B8860B] text-white border-[1px] border-[rgba(255,255,255,0.05)] hover:bg-[#A0780A]",
} as const;

// Định nghĩa các lớp CSS cho từng size
const sizeClasses = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3 py-2",
  lg: "h-11 rounded-md px-6 py-3",
  icon: "h-10 w-10",
} as const;

// Định nghĩa các kiểu props cho Button
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantClasses;
  size?: keyof typeof sizeClasses;
}

const ButtonMain = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "default", size = "default", children, ...props },
    ref
  ) => {
    // Lấy các lớp CSS dựa trên variant và size
    const classes = cn(
      "inline-flex items-center justify-center",
      "whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variantClasses[variant],
      sizeClasses[size],
      "group relative overflow-hidden", // Thêm group, relative, overflow-hidden cho animation
      className
    );

    // Màu của đường viền animation sẽ là currentColor (màu chữ của button)
    // và opacity sẽ thay đổi khi hover
    const animatedBorderBaseClasses =
      "bg-current h-[1px] w-[1px] opacity-0 transition-all duration-300 ease-out z-10";

    return (
      <button className={classes} ref={ref} {...props}>
        {/* Animated Hover Borders (xuất hiện và vẽ khi hover) */}
        {/* Top border animation (left to right) */}
        <span
          className={cn(
            "absolute top-0 left-0 w-0", // Bắt đầu với width 0
            animatedBorderBaseClasses,
            "group-hover:w-full group-hover:opacity-40" // Khi hover, width full và opacity 40%
          )}
        ></span>
        {/* Left border animation (top to bottom) */}
        <span
          className={cn(
            "absolute top-0 left-0 h-0", // Bắt đầu với height 0
            animatedBorderBaseClasses,
            "group-hover:h-full group-hover:opacity-40 delay-100" // Khi hover, height full và opacity 40%, có delay
          )}
        ></span>
        {/* Bottom border animation (left to right) */}
        <span
          className={cn(
            "absolute bottom-0 left-0 w-0", // Bắt đầu với width 0
            animatedBorderBaseClasses,
            "group-hover:w-full group-hover:opacity-40 delay-200" // Khi hover, width full và opacity 40%, có delay
          )}
        ></span>
        {/* Right border animation (top to bottom) */}
        <span
          className={cn(
            "absolute top-0 right-0 h-0", // Bắt đầu với height 0
            animatedBorderBaseClasses,
            "group-hover:h-full group-hover:opacity-40 delay-300" // Khi hover, height full và opacity 40%, có delay
          )}
        ></span>

        {/* Nội dung nút - đảm bảo nó nằm trên tất cả các đường viền */}
        <span className="relative z-20 inline-flex items-center justify-center">
          {children}
        </span>
      </button>
    );
  }
);
ButtonMain.displayName = "ButtonMain";

export { ButtonMain };
