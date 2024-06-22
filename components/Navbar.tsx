"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { MenuIcon, X } from "lucide-react";
import { onGotoElement } from "@/lib/utils";

const menus = [
  { title: "Benefits", href: "benefits" },
  { title: "Pricing", href: "pricing" },
  { title: "FAQ", href: "faq" },
];

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <div className="fixed z-10 bg-[#09090B]/20 backdrop-blur w-full">
      {isDesktop ? (
        <div className="container pt-4 pb-2 flex justify-between items-center">
          <Image
            className="hidden lg:block cursor-pointer"
            src="/logo.png"
            alt="Findover Logo"
            width={100}
            height={95}
            onClick={() => onGotoElement("hero")}
          />
          <nav className="hidden lg:block">
            <div className="flex justify-center space-x-2 items-center">
              {menus.map((item, idx) => (
                <Button
                  onClick={() => onGotoElement(item.href)}
                  variant={"ghost"}
                  key={idx}
                  className="w-full hover:bg-[#000000]/10 hover:text-white"
                >
                  {item.title}
                </Button>
              ))}

              <Button
                onClick={() => onGotoElement("download")}
                className="bg-[#3C65FB] text-white hover:bg-white hover:text-black font-semibold"
              >
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      ) : (
        <div className="container pt-4 pb-2 flex justify-between items-center">
          <Image
            className="lg:hidden block cursor-pointer"
            src="/logo.png"
            alt="Findover Logo"
            width={80}
            height={75}
            onClick={() => onGotoElement("hero")}
          />

          <Drawer direction="right">
            <DrawerTrigger>
              <MenuIcon size={24} />
            </DrawerTrigger>
            <DrawerContent className="bg-[#09090B] border-none p-6">
              <div className="w-full flex justify-end">
                <DrawerClose className="flex justify-end items-center w-10 h-10">
                  <Button
                    variant={"ghost"}
                    size={"icon"}
                    className="w-full hover:bg-[#000000]/10 hover:text-white py-6 rounded-full"
                  >
                    <X />
                  </Button>
                </DrawerClose>
              </div>
              <div className="flex flex-col space-y-4 mt-20">
                {menus.map((item, idx) => (
                  <DrawerClose key={idx} asChild>
                    <Button
                      onClick={() => {
                        setTimeout(() => onGotoElement(item.href), 550);
                      }}
                      variant={"ghost"}
                      className="w-full hover:bg-[#000000]/10 hover:text-white py-6"
                    >
                      {item.title}
                    </Button>
                  </DrawerClose>
                ))}
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      )}
    </div>
  );
};

export default Navbar;
