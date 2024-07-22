export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ className, children, ...props }: LabelProps) {
  const classes = ["text-sm"];

  return (
    <label className={[...classes, className].join(" ")} {...props}>
      {children}
    </label>
  );
}
