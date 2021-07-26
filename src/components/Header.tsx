import React from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import Logo from "../images/otta-logo.png";

type ILink = Pick<NavLinkProps, "to" | "children" | "exact">;

export const Nav: React.FC<ILink> = ({ to, children, exact }) => {
  return (
    <NavLink
      exact={exact}
      to={to}
      className="border-b-4 border-transparent hover:border-gray-100 font-bold"
      activeClassName="border-brand hover:border-brand"
    >
      {children}
    </NavLink>
  );
};

const links: ILink[] = [
  { to: "/", children: "Home", exact: true },
  { to: "/jobs", children: "Jobs" },
  { to: "/profile", children: "Profile" },
  { to: "/inbox", children: "Inbox" },
];

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center md:flex-row-reverse px-2 md:px-10 py-4 bg-white">
      <div className="space-x-4 items-center">
        {links.map(({ to, children, exact }, i) => (
          <Nav key={i} exact={exact} to={to} children={children} />
        ))}
      </div>
      <div className="items-center flex justify-center h-7">
        <img src={Logo} alt="otta logo" className="h-full object-center" />
      </div>
    </div>
  );
};

export default Header;
