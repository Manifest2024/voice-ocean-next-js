"use client";

import { IconType } from "react-icons";
import { FaWhatsapp, FaSkype, FaCaretDown } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useAppSelector } from "@/store";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import HeaderSheet from "./HeaderSheet";

type HeaderInfoLinksProps = {
  Icon: IconType;
  title: string;
};

const HeaderInfoLinks: React.FC<HeaderInfoLinksProps> = ({ Icon, title }) => (
  <div className="flex gap-1 items-center">
    <Icon className="text-base text-[#999999]" />
    <p className="text-base text-[#f04323]">{title}</p>
  </div>
);

const servicesLinks = [
  {
    name: "eLearning Voice Over",
    link: "/learning",
  },
  {
    name: "IVR Voice Over",
    link: "/ivr",
  },
  {
    name: "Videos Voice Over",
    link: "/video-voice-over",
  },
  {
    name: "Commercials",
    link: "/commercial-voice-over",
  },
];

const CartIcon = ({ count }: { count: number }) => (
  <Link href="/cart-checkout" className="relative cursor-pointer">
    <FaCartShopping className="text-white" size={18} />
    {count > 0 && (
      <div className="w-[15px] h-[15px] rounded-full absolute -top-2 -right-2 bg-primary flex items-center justify-center">
        <p className="text-white text-xs">{count}</p>
      </div>
    )}
  </Link>
);

const Header = () => {
  const cart = useAppSelector((state) => state.cart);
  const cartCount = cart.bookedArtists.length;

  return (
    <header className="w-screen py-2 px-5 lg:flex justify-between bg-black bg-opacity-70 fixed items-center z-10">
      {/* Logo and Mobile Sheet */}
      <div className="flex md:block mb-5 lg:mb-0 justify-between items-center">
        <Link href="/">
          <Image
            loading="lazy"
            src="/images/voice-ocean-logo.png"
            width={100}
            height={100}
            className="w-[100px] h-[70px] lg:w-[180px] lg:h-[100px]"
            alt="logo"
          />
        </Link>
        <HeaderSheet />
      </div>

      {/* Navigation */}
      <div>
        <div className="block lg:flex gap-5 justify-end pr-10">
          <div className="flex gap-5">
            <HeaderInfoLinks Icon={FaWhatsapp} title="+91 9850 638 414" />
            <HeaderInfoLinks Icon={FaSkype} title="transru21" />
          </div>

          <div className="flex justify-between items-center">
            <HeaderInfoLinks
              Icon={MdEmail}
              title="projects@voiceoceanllp.com"
            />
            <div className="lg:hidden">
              <CartIcon count={cartCount} />
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="lg:flex mt-2 gap-1 items-center hidden pr-10">
          <Button variant="ghostprimary" asChild>
            <Link href="/">HOME</Link>
          </Button>

          <Button variant="ghostprimary" asChild>
            <Link href="/voice-over">VOICE OVER</Link>
          </Button>

          <Button variant="ghostprimary" asChild>
            <Link href="/about">ABOUT US</Link>
          </Button>

          <HoverCard>
            <HoverCardTrigger>
              <Button variant="ghostprimary">
                SERVICES <FaCaretDown className="text-xs ml-1" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="bg-white p-0 rounded border-t-2 border-primary border-r-0 border-b-0 border-l-0 translate-x-[26%] mt-[-5px]">
              {servicesLinks.map((link) => (
                <div key={link.name} className="hover:bg-gray-100 px-5">
                  <Link href={link.link}>
                    <p className="text-sm px-4 py-1 text-grayTxt cursor-pointer w-full">
                      {link.name}
                    </p>
                  </Link>
                </div>
              ))}
            </HoverCardContent>
          </HoverCard>

          <Button variant="ghostprimary" asChild>
            <Link href="/clients">OUR CLIENTS</Link>
          </Button>

          <Button variant="ghostprimary" asChild>
            <Link href="/contact-us">CONTACT US</Link>
          </Button>

          <CartIcon count={cartCount} />
        </div>
      </div>
    </header>
  );
};

export default Header;
