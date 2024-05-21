import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a modern banking solution for everyone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: "Rahul", lastName: "Urkude" };
  return (
    <main className="flex w-full h-screen font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex flex-col size-full">
        <div className="root-layout">
          <Image src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
