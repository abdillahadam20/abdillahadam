import * as LucideIcons from "lucide-react";
import type React from "react";

type IconName = keyof typeof LucideIcons;

export interface IconProps {
  /**
   * Name of the icon from Lucide React
   * @example "ChevronRight", "User", "Settings"
   */
  name: IconName;
  /**
   * Size of the icon in pixels or with units
   * @default 24
   */
  size?: number | string;
  /**
   * Color of the icon
   * @default "currentColor"
   */
  color?: string;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Stroke width of the icon
   * @default 2
   */
  strokeWidth?: number;
  /**
   * Accessibility label for the icon
   * If not provided, the icon will be hidden from screen readers
   */
  label?: string;
  /**
   * Additional props to pass to the SVG element
   */
  [key: string]: any;
}

/**
 * Reusable Icon component that renders Lucide React icons
 */
const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  label,
  ...props
}) => {
  // Check if the icon exists in Lucide
  if (!name || !(name in LucideIcons)) {
    console.warn(`Icon "${name}" not found in Lucide icons`);
    return null;
  }

  // Get the icon component from Lucide
  const LucideIcon = LucideIcons[name] as React.ComponentType<React.SVGProps<SVGSVGElement>>;

  // Convert size to string with px if it's a number
  const sizeValue = typeof size === "number" ? `${size}px` : size;

  // Determine accessibility attributes
  const a11yProps = label ? { "aria-label": label } : { "aria-hidden": true };

  return (
    <LucideIcon
      color={color}
      width={sizeValue}
      height={sizeValue}
      className={className}
      strokeWidth={strokeWidth}
      {...a11yProps}
      {...props}
    />
  );
};

export default Icon;
