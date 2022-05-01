import React from "react";

const Footer = () => {
  const footerItem = [
    { name: "Terms", id: 1 },
    { name: "Privacy", id: 2 },
    { name: "Security", id: 3 },
    { name: "Status", id: 4 },
    { name: "Docs", id: 5 },
    { name: " Contact GitHub", id: 6 },
    { name: "Pricing", id: 7 },
    { name: "API", id: 8 },
    { name: "Training", id: 9 },
    { name: "Blog", id: 10 },
    { name: "About", id: 11 },
  ];
  return (
    <div className="px-8 md:px-24 w-full my-10">
      <div className="md:flex items-center py-8 border-t">
        <ul className="md:hidden ">
          {footerItem.map((item) => (
            <li className="mx-1 md:mx-3 inline text-[#0969da] text-[.75rem]">
              {item.name}
            </li>
          ))}
        </ul>
        <div className="mt-3 flex md:mr-9 items-center">
          <img
            className="opacity-60"
            src="./GitHub-logo.png"
            alt="logo"
            width="20px"
          />
          <span className=" text-[.75rem] ml-3">© 2022 GitHub, Inc.</span>
        </div>
        <ul className="hidden md:block">
          {footerItem.map((item) => (
            <li className="mx-1 md:mx-3 inline text-[#0969da] text-[.75rem]">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
