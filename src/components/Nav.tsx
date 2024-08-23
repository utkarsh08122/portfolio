"use client";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
// import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Nav() {
  const [symbol, setsymbol] = useState<boolean>(false);

  return (
    <div className=" w-full h-[40px] flex justify-center fixed top-0   ">
      <div className=" flex flex-row items-center justify-between  maxwidth ">
        <div className="text-2xl select-none text-white  flex-1 ">
          Portfolio
        </div>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="cursor-pointer"
                variant="outline"
                onClick={(e) => {
                  e.preventDefault()

                  // setsymbol(!symbol);

                  console.log(e);
                }}
              >
                {symbol ? <RxHamburgerMenu   onClick={(props) => {
                   props.preventDefault()
                  setsymbol(false);

                  console.log(props);
                }} /> : <RxCross1    onClick={(props) => {
                  props.preventDefault()
                  setsymbol(true);

                  console.log(props);
                }}/>}
                {/* <RxHamburgerMenu /> */}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96 ">
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup className="flex items-center  flex-col">
                <DropdownMenuRadioItem value="top" className="list-none">
                  <Link
                    className="hover:text-blue-600 select-none active:text-blue-500 "
                    href="/"
                  >
                    Home
                  </Link>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="rigth">
                  <Link
                    className="hover:text-blue-600 select-none active:text-blue-500"
                    href="/about"
                  >
                    About
                  </Link>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  <Link
                    className="hover:text-blue-600 select-none active:text-blue-500"
                    href="/services"
                  >
                    Services
                  </Link>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  <Link
                    className="hover:text-blue-600 select-none active:text-blue-500"
                    href="/portfolio"
                  >
                    Portfolio
                  </Link>
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="right">
                  <Link
                    className="hover:text-blue-600 select-none active:text-blue-500"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="hidden  md:flex  text-white  text-lg gap-9 items-center">
          <Link
            className="hover:text-blue-600 select-none active:text-blue-500 "
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:text-blue-600 select-none active:text-blue-500"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-blue-600 select-none active:text-blue-500"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="hover:text-blue-600 select-none active:text-blue-500"
            href="/portfolio"
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-blue-600 select-none active:text-blue-500"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
