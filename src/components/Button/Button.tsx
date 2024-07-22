type Colors = "primary" | "secondary" | "neutral";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Colors;
}

type ButtonColorConfiguration = {
  background: string;
  hoveredBackground: string;
  textColor: string;
};

const buttonConfigurationMap: Record<Colors, ButtonColorConfiguration> = {
  primary: {
    background: "bg-orange-500",
    hoveredBackground: "bg-orange-700",
    textColor: "text-white",
  },
  secondary: {
    background: "bg-emerald-500",
    hoveredBackground: "bg-emerald-700",
    textColor: "text-white",
  },
  neutral: {
    background: "bg-zinc-400",
    hoveredBackground: "bg-zinc-900",
    textColor: "text-zinc-900",
  },
};

export default function Button({
  color = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const colorConfig = buttonConfigurationMap[color];

  const classes = [
    "text-sm",
    "font-bold",
    "leading-6",
    "border-0",
    "py-1.5",
    "px-4",
    colorConfig.background,
    colorConfig.textColor,
    `hover:${colorConfig.hoveredBackground}`,
    "rounded-md",
    "transition-colors",
    "ease-in-out",
    "duration-300",
  ];

  return (
    <button className={[...classes, className].join(" ")} {...props}>
      {children}
    </button>
  );
}
