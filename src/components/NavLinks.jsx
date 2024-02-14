/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom"

const NavLinks = (props) => {
  return (
    <ul className="font-roboto flex gap-6 flex-col items-center lg:flex-row lg:gap-8">
      {props.navLinkPaths.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              `pb-6 text-lg lg:text-brand-300
            ${isActive ? "text-brand-800 font-medium pointer-events-none lg:text-brand-800" : "text-brand-100 hover:underline hover:underline-offset-8 hover:decoration-wavy hover:text-brand-300"}`
            }
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default NavLinks