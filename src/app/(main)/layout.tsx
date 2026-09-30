import Menu from "@/components/Menu";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Menu />
      {children}
    </>
  );
}
