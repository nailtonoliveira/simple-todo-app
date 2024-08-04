export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  const classes = [
    "block",
    "rounded-md",
    "border-0",
    "py-1.5",
    "px-4",
    "text-sm",
    "leading-6",
    "text-zinc-50",
    "placeholder:text-zinc-400",
    "ring-1",
    "ring-inset",
    "ring-zinc-700",
    "focus:ring-2",
    "focus:ring-inset",
    "focus:ring-orange-600",
    "focus:outline-none",
    "bg-zinc-800",
    "shadow-sm",
    "transition",
    "duration-500",
    "ease-in-out",
  ];

  return <input className={[...classes, className].join(" ")} {...props} />;
}
