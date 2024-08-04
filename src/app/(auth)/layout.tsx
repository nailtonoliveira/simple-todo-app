import { Card } from "@/components";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-md mx-auto h-full flex items-center justify-stretch">
      <Card className="w-full p-6 flex flex-col gap-4 bg-transparent sm:bg-zinc-900 border-0 sm:border">
        {children}
      </Card>
    </div>
  );
}
