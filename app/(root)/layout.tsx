import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking solution for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      SIDEBAR
      {children}
    </main>
  );
}
