/* eslint-disable react/prop-types */
import Cancel from "/cancel.svg";

const NavBar = (props) => {


  return (
    <nav>
      <div
        role="dialog"
        aria-labelledby="nav-label"
        className="bg-brand-aqua static w-screen h-screen -m-8"
      >
        <button
          id="btnClose"
          aria-label="close"
          onClick={() => props.setIsNavOpen((prev) => !prev)}
        >
          <img 
            src={Cancel} 
            alt="close menu" 
            className="w-8 hover:backdrop-saturate-200 hover:w-9 absolute top-10 right-10" 
          />
        </button>
        <ul className="text-brand-100 flex gap-6 flex-col items-center mt-16">
          {props.navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                className="pb-6 text-brand-blue font-semibold text-lg hover:underline  hover:underline-offset-8 hover:decoration-wavy hover:text-brand-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar