import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-accent to-violet text-white shadow-glow hover:brightness-110 hover:shadow-[0_0_36px_-8px_rgba(91,138,255,0.85)]",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10",
  ghost: "text-white hover:bg-white/8",
  dark: "bg-ink-text text-white hover:bg-navy",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition duration-200 disabled:pointer-events-none disabled:opacity-50";

type Common = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type ButtonAsButton = Common &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
    href?: undefined;
  };

type ButtonAsLink = Common & {
  href: string;
  type?: never;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, disabled, ...rest } = props;
    return (
      <Link
        href={href}
        className={cn(classes, disabled && "pointer-events-none opacity-50")}
        aria-disabled={disabled || undefined}
        {...rest}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as ButtonAsButton;
  const { type = "button", ...rest } = buttonProps;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
