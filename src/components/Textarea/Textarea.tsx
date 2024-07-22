export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ className, ...props }: TextareaProps) {
  const classes = [
    "block",
    "rounded-md",
    "border-0",
    "py-1.5",
    "px-4",
    "text-sm",
    "leading-6",
    "text-zinc-900",
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
  ];

  return <textarea className={[...classes, className].join(" ")} {...props} />;
}
