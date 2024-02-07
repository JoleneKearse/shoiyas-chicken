import Cancel from "/cancel.svg";
import Menu from "/menu.svg"

const Header = () => {

  return (
    <>
      <header className="font-sans-serif bg-brand-blue p-8">
        <h1 className="text-2xl font-courgette"><span className="block text-5xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pb-3">Shoiya's</span> Specialty Chicken, Wings N' Things</h1>
        <nav className="text-lg tracking-wide font-bold">
          <span hidden>Navigation</span>
          <button id="btnOpen" aria-expanded="false" aria-labelledby="nav-label">
            <img src={Menu} alt="open menu" className="w-8" />
          </button>

          <div
            role="dialog"
            aria-labelledby="nav-label"
          >
            <button id="btnClose" aria-label="close">
              <img src={Cancel} alt="close menu" className="w-8" />
            </button>
            <ul className="text-brand-100">
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer"
                  className="pb-6"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer"
                  className="pb-6"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer"
                  className="pb-6"
                >
                  Menu
                </a>
              </li>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer"
                  className="pb-6"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header