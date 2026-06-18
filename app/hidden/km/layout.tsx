// app/hidden/km/layout.tsx
export default function HiddenKmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout does NOT include the navbar.
  // It applies to ALL pages under /hidden/km (including /gym).
  return <>{children}</>;
}