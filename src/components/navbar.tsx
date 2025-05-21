"use client";

import { site } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "/public/logo.svg";

export default function Navbar() {
  const [state, setState] = useState(false);

  return (
    <nav className="border-b border-orange-400/50 w-full md:relative md:text-sm md:border-none z-50">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-6 md:block">
          <Link href="/">
            <Image src={logo} alt="LIKELION" className="h-6 md:h-7 w-auto" />
          </Link>
          <div className="md:hidden">
            <button className="text-white" onClick={() => setState(!state)}>
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0">
            {site.routes.map((item, idx) => {
              return (
                <li key={idx} className="transition-colors">
                  <Link href={item.path} className="block font-semibold">
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
              <li>
                <Button className="w-full md:w-auto" asChild>
                  <Link href={site.registrationUrl} target="_blank">
                    Ứng tuyển ngay
                  </Link>
                </Button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
