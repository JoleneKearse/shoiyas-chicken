

const Header = () => {
  return (
    <>
      <header className="font-sans-serif bg-brand-blue p-8">
        <h1 className="text-2xl font-courgette"><span className="block text-5xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pb-3">Shoiya's</span> Specialty Chicken, Wings N' Things</h1>
        <nav>
          <span hidden>Navigation</span>
          <button id="btnOpen" aria-expanded="false" aria-labelledby="nav-label">
            {/* TODO: Add close svg */}
          </button>
          <ul className="text-brand-100">
            <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
            <li><a href="/" target="_blank" rel="noopener noreferrer">Gallery</a></li>
            <li><a href="/" target="_blank" rel="noopener noreferrer">Menu</a></li>
            <li><a href="/" target="_blank" rel="noopener noreferrer">Contact Us</a></li>
          </ul>

        </nav>
      </header>
    </>
  )
}

export default Header