/* eslint-disable react/prop-types */
import NavLinks from "./NavLinks";
import Cancel from "/cancel.svg";

const NavBar = (props) => {
  return (
    <nav>
      <div
        role="dialog"
        aria-labelledby="nav-label"
        className="bg-brand-aqua fixed w-screen h-screen -m-8"
      >
        <button
          id="btnClose"
          aria-label="close"
          title="Close menu"
          onClick={() => props.setIsNavOpen((prev) => !prev)}
        >
          <img
            src={Cancel}
            alt="close menu"
            className="w-8 hover:backdrop-saturate-200 hover:w-9 absolute top-10 right-10"
          />
        </button>
        {props.isNavOpen && <NavLinks isNavOpen={props.isNavOpen} setIsNavOpen={props.setIsNavOpen} navLinkPaths={props.navLinkPaths} />}
      </div>
    </nav>
  )
}

export default NavBar