"use client";
import { TiThMenu } from "react-icons/ti";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaCaretDown } from "react-icons/fa";
import { cn } from "@/lib/utils";

const HeaderSheet = () => {
  const [showNavigationSheet, setShowNavigationSheet] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  const linksData = [
    {
      name: "eLearning Voice Over",
      link: "/learning",
      imgUrl: "https://voiceoceanllp.com/img/Voice%20Ocean%20e-Learning.jpg",
    },
    {
      name: "IVR Voice Over",
      link: "/ivr",
      imgUrl: "https://voiceoceanllp.com/img/Voice%20Ocean%20IVR.jpg",
    },
    {
      name: "Videos Voice Over",
      link: "/video-voice-over",
      imgUrl:
        "https://voiceoceanllp.com/img/Voice%20Ocean%20Internet%20Videos.jpg",
    },
    {
      name: "Commercials",
      link: "/commercial-voice-over",
      imgUrl:
        "https://voiceoceanllp.com/img/Voice%20Ocean%20Commercials%20&%20Spots.jpg",
    },
  ];

  return (
    <div>
      <Sheet
        open={showNavigationSheet}
        onOpenChange={(e) => setShowNavigationSheet(e)}
      >
        <SheetTrigger className="lg:hidden">
          <div
            className={cn(
              buttonVariants({
                variant: "ghost",
                size: "sm",
              })
            )}
          >
            <TiThMenu size={16} className="text-white" />
          </div>
        </SheetTrigger>
        <SheetContent className="w-screen">
          <SheetHeader className="mt-5">
            <div className="w-full flex justify-center mb-3">
              <Link
                href="/"
                onClick={() => setShowNavigationSheet(false)}
                className="w-1/2"
              >
                <Image
                  src="/images/voice-ocean-logo.png"
                  className="w-full"
                  alt="logo"
                  width={100}
                  height={100}
                />
              </Link>
            </div>
            <div className="text-black flex-col">
              <Button
                variant="ghost"
                className="w-full text-lg text-primary"
                onClick={() => setShowNavigationSheet(false)}
              >
                <Link href="/">HOME</Link>
              </Button>
              <hr className="my-2" />
              <Link href="/voice-over" className="w-full">
                <Button
                  variant="ghost"
                  className="w-full text-lg text-primary"
                  onClick={() => setShowNavigationSheet(false)}
                >
                  VOICE OVER
                </Button>
              </Link>
              <hr className="my-2" />
              <Link href="/about">
                <Button
                  variant="ghost"
                  className="w-full text-lg text-primary"
                  onClick={() => setShowNavigationSheet(false)}
                >
                  ABOUT US
                </Button>
              </Link>
              <hr className="my-2" />
              <DropdownMenu onOpenChange={(e) => setShowNavigationSheet(e)}>
                <DropdownMenuTrigger className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full text-lg text-primary"
                  >
                    SERVICES <FaCaretDown className="text-xs ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white p-0 rounded border-t-2 lg:border-primary border-r-0 border-b-0 border-l-0 lg:translate-x-[26%] lg:mt-[-5px] ">
                  {linksData.map((link) => {
                    return (
                      <DropdownMenuItem key={link.name}>
                        <Link
                          href={link.link}
                          className="hover:bg-gray-100 text-sm px-4 py-2 cursor-pointer w-full"
                          // onClick={() => navigate(link.link)}
                          onClick={() => setShowNavigationSheet(false)}
                        >
                          <p className="text-grayTxt text-lg" key={link.name}>
                            {link.name}
                          </p>
                        </Link>
                      </DropdownMenuItem>
                    );
                  })}
                </DropdownMenuContent>
              </DropdownMenu>
              <hr className="my-2" />
              <Link href="/clients">
                <Button
                  variant="ghost"
                  className="w-full text-lg text-primary"
                  onClick={() => setShowNavigationSheet(false)}
                >
                  OUR CLIENTS
                </Button>
              </Link>
              <hr className="my-2" />
              <Link href="/contact-us">
                <Button
                  variant="ghost"
                  className="w-full text-lg text-primary"
                  onClick={() => setShowNavigationSheet(false)}
                >
                  CONTACT US
                </Button>
              </Link>
              <hr className="my-2" />
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default HeaderSheet;
