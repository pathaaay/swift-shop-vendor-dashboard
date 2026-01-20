import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    name: "Contact Us",
    href: "/",
    isButton: true,
  },
];
export const Navbar = () => {

  return (
    <>
      {/* Desktop Navbar */}{" "}
      <nav className="bg-slate-800 text-white py-2 px-5 md:px-20 flex items-center justify-between">
        <div className="text-2xl font-bold">SwithShop</div>
        <div className="flex items-center gap-4 max-md:hidden">
          {navItems.map((item) => (
            <Fragment key={item.href}>
              {item.isButton ? (
                <button className="text-sm cursor-pointer bg-cyan-800 hover:bg-cyan-700 rounded-md px-4 p-2">
                  {item.name}
                </button>
              ) : (
                <div className="text-sm text-slate-300 hover:text-slate-50 cursor-pointer hover:underline">
                  {item.name}
                </div>
              )}
            </Fragment>
          ))}
        </div>
        <button
          className="md:hidden text-sm cursor-pointer border border-cyan-800  rounded-md size-10 flex items-center justify-center"
        >
          <MenuIcon size={20} />
        </button>
      </nav>
    </>
  );
};
