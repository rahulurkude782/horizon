"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            src={"/icons/hamburger.svg"}
            width={30}
            height={30}
            alt="menu"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="flex items-center cursor-pointer gap-1 px-4"
          >
            <Image src="/icons/logo.svg" width={34} height={34} alt="Horizon" />
            <h1 className="text-24 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex flex-col h-full gap-6 pt-16">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathName === link.route ||
                    pathName.startsWith("/" + link.route);
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        className={cn("mobilenav-sheet_close", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <div className="relative size-6">
                          <Image
                            src={link.imgURL}
                            width={20}
                            height={20}
                            alt="link-icon"
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                        </div>
                        <p
                          className={cn("text-16 text-black-2 font-semibold", {
                            "text-white": isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
