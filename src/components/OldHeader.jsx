<header className="font-sans-serif bg-brand-blue p-8 flex flex-col">
<h1 className="text-2xl font-courgette">
  <span className="block text-5xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent pb-3">Shoiya's</span>
  Specialty Chicken, Wings N' Things</h1>

<nav className="text-lg tracking-wide font-bold">
  <span hidden>Navigation</span>
  <button id="btnOpen" aria-expanded="false" aria-labelledby="nav-label">
    <img 
      src={Menu} 
      alt="open menu" 
      className="w-8" 
      onClick={() => setIsNavOpen((prev) => !prev)}
    />
  </button>

  <div
    role="dialog"
    aria-labelledby="nav-label"
  >
    <button id="btnClose" aria-label="close">
      <img src={Cancel} alt="close menu" className="w-8" />
    </button>
    <ul className="text-brand-100 flex gap-6 flex-col items-center">
      {navLinks.map((link, index) => (
        <li key={index}>
          <a
            href={link.path}
            target="_blank"
            rel="noopener noreferrer"
            className="pb-6 hover:underline  hover:underline-offset-8 hover:decoration-wavy hover:text-brand-300"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
</nav>
</header>