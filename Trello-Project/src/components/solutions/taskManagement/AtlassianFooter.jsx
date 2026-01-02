import React from "react";
import { Link } from "react-router-dom";

const AtlassianFooter = () => {
  const Links = [
    { name: "Templates", href: "/templates" },
    { name: "Pricing", href: "/pricing" },
    { name: "Apps", href: "/platforms" },
    { name: "Jobs", href: "/company/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Developers", href: "/cloud/trello/" },
    { name: "About", href: "/about" },
    { name: "Help", href: "/trello/" },
    { name: "Legal", href: "/legal/atlassian-customer-agreement#intro" },
    { name: "Privacy", href: "/legal/privacy-policy" },
    { name: "Integrations", href: "/integrations" },
    { name: "Contact us", href: "/login" },
    { name: "Terms", href: "/legal/atlassian-customer-agreement#intro" },
  ];
  return (
    <>
      <div>
        <div className="flex justify-center gap-3 ">
          {Links.map((link, index) => (
            <Link key={index} to={link.href} className="text-sm underline">
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex justify-center gap-3 pt-2 pb-10">
          <img
            src="https://trello.com/assets/a84c1127dbd06040faf9.svg"
            alt=""
            className="h-[18px] w-[150px]"
          />
          <span>© Copyright 2025. All rights reserved.</span>
        </div>
      </div>
    </>
  );
};

export default AtlassianFooter;
