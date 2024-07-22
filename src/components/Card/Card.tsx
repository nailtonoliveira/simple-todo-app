export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Card({ children, className, ...props }: CardProps) {
  const classes = ["border", "border-zinc-800", "rounded-md", "bg-zinc-900"];

  return (
    <div {...props} className={[...classes, className].join(" ")}>
      {children}
    </div>
  );
}
